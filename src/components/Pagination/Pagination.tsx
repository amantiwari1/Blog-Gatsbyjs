import React from "react"
import { Paginated } from "@makotot/paginated"
import { Link } from "gatsby"
import styled from "styled-components"

const Linked = styled(Link)`
  padding: 10px;
  color: ${props => props.theme.textColor};
  padding: 5px 15px;
  background: ${props => props.theme.background};
  border-radius: 25px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  margin: 10px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.textColor};
  }
`

const DisableLink: any = styled(Linked)`
  opacity: 0.5;
  pointer-events: none;
`

const ActiveStyle = {
  background: "#f37121",
  pointerEvents: "none",
}

const Paginateds = styled(Paginated)``

export const Paginations = ({ currentPage, numPages }:{ currentPage: number, numPages: number }) => {
  return (
    <Paginateds
      currentPage={currentPage}
      totalPage={numPages}
      siblingsSize={2}
      boundarySize={2}
    >
      {({
        pages,
        currentPage,
        hasPrev,
        hasNext,
        getFirstBoundary,
        getLastBoundary,
        isPrevTruncated,
        isNextTruncated,
      }) => (
        <div>
          {/* hasPrev */}
          {hasPrev() ? (
            <>
              {" "}
              {currentPage - 1 === 1 ? (
                <Linked to="/course">Prev</Linked>
              ) : (
                <Linked to={`/course/${currentPage - 1}`}> Prev </Linked>
              )}{" "}
            </>
          ) : (
            <DisableLink>Prev</DisableLink>
          )}

          {/* getFirstBoundary */}
          {getFirstBoundary().map(boundary =>
            boundary === 1 ? (
              <Linked to={`/course`} key={boundary}>
                {boundary}
              </Linked>
            ) : (
              <Linked to={`/course/${boundary}`} key={boundary}>
                {boundary}
              </Linked>
            )
          )}

          {/* isPrevTruncated */}
          {isPrevTruncated && <DisableLink>...</DisableLink>}

          {/* pages */}
          {pages.map(page => {
            return page === 1 ? (
              <Linked activeStyle={ActiveStyle} to="/course" key={page}>
                {page}
              </Linked>
            ) : (
              <Linked
                activeStyle={ActiveStyle}
                to={`/course/${page}`}
                key={page}
              >
                {page}
              </Linked>
            )
          })}

          {/* isNextTruncated */}
          {isNextTruncated && <DisableLink>...</DisableLink>}

          {/* getLastBoundary */}
          {getLastBoundary().map(boundary =>
            boundary === 1 ? (
              <Linked to={`/course`} key={boundary}>
                {boundary}
              </Linked>
            ) : (
              <Linked to={`/course/${boundary}`} key={boundary}>
                {boundary}
              </Linked>
            )
          )}

          {/* hasNext */}
          {hasNext() ? (
            <Linked to={`/course/${currentPage + 1}`}>Next</Linked>
          ) : (
            <DisableLink>Next</DisableLink>
          )}
        </div>
      )}
    </Paginateds>
  )
}
