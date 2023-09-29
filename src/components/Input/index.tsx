import { useState } from "react";
import styled from "styled-components";

type Props = {
    placeholder: string
    children?: React.ReactNode
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    emailIsValid: boolean
}

const StyledInput = styled.div`
    align-items: center;
    border: none;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    flex-grow: 1;
    font-size: 16px;
    height: 75px;
    padding: 24px;
    div {
        display: flex;
        gap: 24px;
            
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
    }
    .warning {
        color: #cb0000;
        font-size: 12px;
    }
`

const Input = ({ children, placeholder, email, setEmail, emailIsValid }: Props) => {
    const [showMessage, setShowMessage] = useState(false);

    return(
        <StyledInput>
            <div>
                {children}
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setShowMessage(true)}
                    name="user_email"
                />
            </div>
            {!emailIsValid && showMessage ? <p className="warning">Insira um endereço de email válido.</p> : null}
        </StyledInput>
    )
}

export default Input;
