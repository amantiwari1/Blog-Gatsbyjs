import React from "react";
import { CardContainer, Card, CardImg, CardImgHover, CardAbout, CardInfo, CardTag, CardTitle} from "../styles/Card2style";


export const CardContent2 = () => {
    return (
        <CardContainer>
            <Card>
                <CardImg></CardImg>
                <CardImgHover src="https://thumbs.dreamstime.com/z/gradient-icon-vector-isolated-white-background-sign-line-outline-elements-linear-style-transparent-134157185.jpg" ></CardImgHover>
                <CardInfo>
                    <CardAbout>
                        <CardTag>News</CardTag>
                    </CardAbout>
                    <CardTitle>There have been big Tesla accident at New Jersey</CardTitle>
                </CardInfo>
            </Card>
        </CardContainer>
    )
} 