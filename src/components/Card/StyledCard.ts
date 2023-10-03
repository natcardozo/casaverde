import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    gap: 16px;
    width: 380px;
    height: 200px;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);

    img {
        width: 45%;
        height: 100%;
        object-fit: cover;
    }

    .info {
        height: 100%;
        padding: 24px 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
            font-family: Elsie Swash Caps;
            font-size: 32px;
            font-weight: 900;
            margin-bottom: 8px;
        }

        span {
            opacity: 50%;
        }

        button {
            text-align: left;
            background-color: transparent;
            border: none;
            cursor: pointer;
            color: #FFCB47;
            font-family: Montserrat, sans-serif;
            font-size: 16px;
            padding: 0;
        }
    }
`