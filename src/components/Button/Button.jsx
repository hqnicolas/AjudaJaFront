import { Children } from "react";
import { ButtonContainer } from "./Button.styles";

export default function Button({ children, typeButton, onClick, ...props }) {
    console.log(typeButton);
    return (
        <ButtonContainer typeButton={typeButton} onClick={onClick} {...props}>
            {children}
        </ButtonContainer>
    );
}

