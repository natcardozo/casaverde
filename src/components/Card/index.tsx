import { IProduct } from "interfaces/IProduct";
import { StyledCard } from "./StyledCard";


const Card = ({ name, img, price }: IProduct) => {
    return (
        <StyledCard>
            <img src={`/images/${img}.png`} alt={name} />
            <div className="info">
                <div>
                    <p>{name}</p>
                    <span>R$ {price?.toFixed(2).replace(".", ",")}</span>
                </div>
                <button>Comprar {"->"}</button>
            </div>
        </StyledCard>
    )
}

export default Card;