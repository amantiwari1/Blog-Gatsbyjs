import styled from "styled-components";
import Img from "gatsby-image"



const FeatureImage = styled(Img)`

display: block !important;
margin-left: auto !important;
margin-right: auto !important;

@media (max-width: 940px) {
    height: 200px !important;
    width: 300px !important;
  }
`

export {FeatureImage}