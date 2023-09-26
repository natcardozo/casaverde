import styled from "styled-components";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Button from "../Button";
import Input from "../Input";

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
    return(
        <StyledNewsletter>
            <p className="subtitle">Sua casa com as</p>
            <h2>melhores plantas</h2>
            <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <form action="">
                <Input placeholder="Insira seu e-mail">
                    <EmailOutlinedIcon />
                </Input>
                <Button>Assinar newsletter</Button>
            </form>
        </StyledNewsletter>
    )
}

export default Newsletter;
