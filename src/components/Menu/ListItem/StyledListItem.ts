import styled from "styled-components";

export const StyledListItem = styled.li`
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
