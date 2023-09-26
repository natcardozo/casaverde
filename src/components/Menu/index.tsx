import styled from "styled-components";
import logo from '../../assets/images/logo.svg';
import ListItem from "./ListItem";

const StyledMenu = styled.header`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
        ul {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
    }
`

const Menu = () => {
    return(
        <StyledMenu>
            <img src={logo} alt="Logotipo da Casa Verde" />
            <nav>
                <ul>
                    <ListItem>Como fazer</ListItem>
                    <ListItem>Ofertas</ListItem>
                    <ListItem>Depoimentos</ListItem>
                    <ListItem>Vídeos</ListItem>
                    <ListItem>Meu carrinho</ListItem>
                </ul>
            </nav>
        </StyledMenu>
    )
}

export default Menu;
