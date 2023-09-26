import styled from "styled-components";

type Props = {
    placeholder: string;
    children?: React.ReactNode;
}

const StyledInput = styled.div`
    align-items: center;
    border: none;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    font-size: 16px;
    height: 75px;
    padding: 24px;
    input {
        border: none;
        box-sizing: border-box;
        flex-grow: 1;
        margin-left: 8px;
        padding: 8px;
        &::placeholder {
            color: #909090;
        }
        &:focus {
            outline: none;
        }
    }
    svg {
        color: #909090;
    }
`

const Input = ({ children, placeholder }: Props) => {
    return(
        <StyledInput>
            {children}
            <input type="text" placeholder={placeholder} />
        </StyledInput>
    )
}

export default Input;
