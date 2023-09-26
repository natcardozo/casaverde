import styled from "styled-components";

type Props = {
    children: string
}

const StyledListItem = styled.li`
    font-size: 16px;
    padding: 0 24px;
    border-right: 1px solid #222222;
    cursor: pointer;
    &:last-child {
        border-right: none !important;
    }
    &:hover {
        text-decoration: underline;
    }
`

const ListItem = ({ children }: Props) => {
    return (
        <StyledListItem>
            {children}
        </StyledListItem>
    )
}

export default ListItem;
