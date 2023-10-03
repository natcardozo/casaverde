import { StyledButton } from "./StyledButton";

type Props = {
    children: string
    emailIsValid: boolean
}

const Button = ({ children, emailIsValid }: Props) => {
    return(
        <StyledButton disabled={!emailIsValid} $enabled={emailIsValid} type="submit">
            {children}
        </StyledButton>
    )
}

export default Button;
