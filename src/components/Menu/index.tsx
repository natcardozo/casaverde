import logo from '../../assets/images/logo.svg';
import ListItem from "./ListItem";
import { StyledMenu } from './StyledMenu';

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
