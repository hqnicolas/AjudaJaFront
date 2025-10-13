import { ButtonContainer } from "./Button.styles";

export default function Button({ text, typeButton, onClick, ...props }) {
    console.log(typeButton);
    return (
        <ButtonContainer typeButton={typeButton} onClick={onClick} {...props}>
            {text}
        </ButtonContainer>
    );
}

