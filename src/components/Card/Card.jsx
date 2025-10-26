import { Container } from "./Card.styles";


export default function CardComponent({children,...props}){
    return (
       <Container className={`${props.className ? props.className : ''}`}>{children}</Container>
    )
}
