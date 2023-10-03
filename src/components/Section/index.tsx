import { IProduct } from "interfaces/IProduct";
import { StyledSection } from "./StyledSection";
import { useFetchProducts } from "../../utils/hooks/useFetchProducts";
import Card from "../Card";

const Section = () => {
    const items: IProduct[] = useFetchProducts();  
    
    return (
        <StyledSection>
            <span className="subtitle">Conheça nossas</span>
            <h3>ofertas</h3>
            <div className="cards">
                {items.map(item => item.quantity > 0 && <Card {...item} key={item.id} />)}
            </div>
        </StyledSection>
    )
}

export default Section;
