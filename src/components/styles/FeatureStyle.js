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


const FreatureImageCourse = styled.img`

margin: 0 auto;
display: block;

width: 690px;

@media (max-width: 1200px) {
    width: 550px;
  }
@media (max-width: 800px) {
    width: 450px;
  }
@media (max-width: 510px) {
    width: 250px;
    height: 250px;
  }


`

export {FeatureImage, FreatureImageCourse}