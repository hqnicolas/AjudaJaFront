import React from "react";
import { Container } from "./Card.styles";


export default function CardComponent({children,...props}){
    return (
       <Container>{children}</Container>
    )
}
