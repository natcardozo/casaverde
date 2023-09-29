import { useState, useRef, MutableRefObject } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Button from "../Button";
import Input from "../Input";
import { emailValidation } from "./helpers/emailValidation";

const StyledNewsletter = styled.section`
    width: 40%;
    margin: 150px 0;
    .subtitle {
        font-size: 22px;
    }
    h2 {
        font-family: Elsie Swash Caps;
        font-size: 82px;
        font-weight: 900;
        margin: 12px 0 24px 0;
    }
    p {
        font-size: 16px;
        line-height: 24px;
    }
    form {
        display: flex;
        margin: 24px 0;
        width: 100%;
    }
`

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const form = useRef() as MutableRefObject<HTMLFormElement>;

    const emailIsValid = emailValidation(email)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`)
                setEmail("")
            }, (error) => {
                console.error(error.text);
                alert(error.text);
            });

        
    }

    return(
        <StyledNewsletter>
            <p className="subtitle">Sua casa com as</p>
            <h2>melhores plantas</h2>
            <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <form onSubmit={handleSubmit} ref={form}>
                <Input placeholder="Insira seu e-mail" email={email} setEmail={setEmail} emailIsValid={emailIsValid}>
                    <EmailOutlinedIcon />
                </Input>
                <Button emailIsValid={emailIsValid} >Assinar newsletter</Button>
            </form>
        </StyledNewsletter>
    )
}

export default Newsletter;
