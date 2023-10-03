import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    .subtitle {
        font-size: 22px;
        opacity: 50%;
    }

    h3 {
        font-family: Elsie Swash Caps;
        font-size: 82px;
        font-weight: 900;
    }

    .cards {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 16px 0;
    }
`
