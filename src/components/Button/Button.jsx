import { Children } from "react";
import { ButtonContainer } from "./Button.styles";

export default function Button({ children, typeButton,className, onClick, ...props}) {
    return (
        <ButtonContainer typeButton={typeButton} onClick={onClick} {...props} className={className}>
            {children}
        </ButtonContainer>
    );
}

