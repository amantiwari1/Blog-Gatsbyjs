import { css } from "styled-components";



export const CustomScroll = css`
  scrollbar-width: thin;
  scrollbar-color: #e76f51 #1d3557;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background: #1d3557;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e76f51;
    border-radius: 14px;
    border: 3px solid #1d3557;
  }
`
export const NegMargin = css`
  
`