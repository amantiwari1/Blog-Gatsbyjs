import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
} from 'react-live'
import styled from 'styled-components'
import 'victormono'
import {CustomScroll, NegMargin} from "../components/styles/Codestyle"
// https://github.com/gatsbyjs/gatsby/blob/561d33e2e491d3971cb2a404eec9705a5a493602/www/src/utils/copy-to-clipboard.js


const copyToClipboard = str => {
    const clipboard = window.navigator.clipboard
    /*
     * fallback to older browsers (including Safari)
     * if clipboard API not supported
     */
    if (!clipboard || typeof clipboard.writeText !== `function`) {
      const textarea = document.createElement(`textarea`)
      textarea.value = str
      textarea.setAttribute(`readonly`, true)
      textarea.setAttribute(`contenteditable`, true)
      textarea.style.position = `absolute`
      textarea.style.left = `-9999px`
      document.body.appendChild(textarea)
      textarea.select()
      const range = document.createRange()
      const sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
      textarea.setSelectionRange(0, textarea.value.length)
      document.execCommand(`copy`)
      document.body.removeChild(textarea)
  
      return Promise.resolve(true)
    }
  
    return clipboard.writeText(str)
  }

  
const RE = /{([\d,-]+)}/

export const CodeWrapper = styled.div`
  position: relative;
  ${NegMargin};
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  * {
    font-family: 'Victor Mono', 'Courier New', Courier, monospace;
  }
  overflow: hidden;
  border-radius: 5px;
`

const Pre = styled.pre`
  text-align: left;
  padding: 0.5em;
  ${({ ligatures }) => ligatures && `font-variant-ligatures: none;`};
  overflow: hidden;
  overflow-x: auto;
  float: left;
  min-width: 100%;
`

const LineNo = styled.span`
  display: inline-block;
  width: 1.8em;
  user-select: none;
  opacity: 0.3;
`

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  border: 0;
  border-radius: 3px;
  margin-right: 0.25rem;
  padding: 0.25rem;
  color: #a0aec0;
  &:hover {
    background-color: #f7fafc;
    color: #1a202c;
  }
  background-color: #663399;
`

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map(v => v.split('-').map(y => parseInt(y, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end
          ? lineNumber >= start && lineNumber <= end
          : lineNumber === start
      )
      return inRange
    }
  } else {
    return () => false
  }
}

const Wrapper = styled.div`
  overflow: auto;
  ${CustomScroll};
  &::-webkit-scrollbar {
    width: 11px;
  }
`

export const Code = ({ codeString, language, ...props }) => {
  const shouldHighlightLine = calculateLinesToHighlight(
    props.metastring
  )
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  }
  const handleClick = () => {
    copyToClipboard(codeString)
  }
  return (
    <Wrapper>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <Pre className={className} style={style}>
            <CopyCode onClick={handleClick}>Copy</CopyCode>
            {tokens.map((line, i) => (
              <div
                {...getLineProps({
                  line,
                  key: i,
                  className: shouldHighlightLine(i)
                    ? 'highlight-line'
                    : '',
                })}
              >
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    </Wrapper>
  )
}
