import { useState } from "react";
import { StyledInput } from "./StyledInput";

type Props = {
    placeholder: string
    children?: React.ReactNode
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    emailIsValid: boolean
}

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
                    onBlur={() => setShowMessage(false)}
                    name="user_email"
                />
            </div>
            {!emailIsValid && showMessage ? <p className="warning">Insira um endereço de email válido.</p> : null}
        </StyledInput>
    )
}

export default Input;
