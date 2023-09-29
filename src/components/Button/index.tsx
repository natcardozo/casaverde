import styled from "styled-components";

type Props = {
    children: string
    emailIsValid: boolean
}

const StyledButton = styled.button<{ $enabled?: boolean }>`
    background-color: ${props => props.$enabled ? "#FFCB47" : "#FFCB47"};
    border: none;
    box-shadow: 10px 10px 30px 0px #FFCB4760;
    color: ${props => props.$enabled ? "#FFFFFF" : "#FFFFFF50"};
    cursor: ${props => props.$enabled ? "pointer" : "not-allowed"};
    flex-shrink: 0;
    font-size: 16px;
    height: 75px;
    text-align: center;
    width: 194px;
`

const Button = ({ children, emailIsValid }: Props) => {
    return(
        <StyledButton disabled={!emailIsValid} $enabled={emailIsValid} type="submit">
            {children}
        </StyledButton>
    )
}

export default Button;
