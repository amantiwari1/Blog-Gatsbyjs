import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {domToReact} from 'html-react-parser';



export const PostCode = ({language, children}) => (
  <SyntaxHighlighter
    style={a11yDark}
    language={language}
    >
    {children}
  </SyntaxHighlighter>
);


const getCode = node => {
    if (node.children.length > 0 && node.children[0].name === 'code') {
      return node.children[0].children;
    } else {
      return node.children;
    }
  };

const getLanguage = node => {
    if (node.attribs.class != null) {

      return node.attribs.class.substr(14);

    }
    return null;
  };

const getSrc = node => {
    if (node.attribs.src != null) {
      return node.attribs.src;
    }
    return null;
  };
const getAlt = node => {
    if (node.attribs.alt != null) {
      return node.attribs.alt;
    }
    return null;
  };

export const replaceCode = node => {
    if (node.name === 'pre') {
      return node.children.length > 0 && <PostCode language={getLanguage(node)}>{domToReact(getCode(node))}</PostCode>;
    }
    if (node.name === 'img') {
     console.log("here",node);
     return  <img style={{width:"100%",height:"auto"}} src={getSrc(node)} alt={getAlt(node)} />
    }
  };
