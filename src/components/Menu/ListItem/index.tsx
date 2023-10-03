import { StyledListItem } from "./StyledListItem";

type Props = {
    children: string
}

const ListItem = ({ children }: Props) => {
    return (
        <StyledListItem>
            {children}
        </StyledListItem>
    )
}

export default ListItem;
