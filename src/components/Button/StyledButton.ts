import styled from "styled-components";

export const StyledButton = styled.button<{ $enabled?: boolean }>`
    background-color: ${props => props.$enabled ? "#FFCB47" : "#FFCB47"};
    border: none;
    box-shadow: 10px 10px 30px 0px #FFCB4760;
    color: ${props => props.$enabled ? "#FFFFFF" : "#FFFFFF50"};
    cursor: ${props => props.$enabled ? "pointer" : "not-allowed"};
    flex-shrink: 0;
    font-size: 16px;
    height: 75px;
    text-align: center;
    width: 194px;
`
