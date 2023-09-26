import styled from "styled-components";

type Props = {
    children: string;
}

const StyledButton = styled.button`
    background-color: #FFCB47;
    border: none;
    box-shadow: 10px 10px 30px 0px #FFCB4760;
    color: #FFFFFF;
    cursor: pointer;
    flex-shrink: 0;
    font-size: 16px;
    height: 75px;
    text-align: center;
    width: 194px;
`

const Button = ({ children }: Props) => {
    return(
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button;
