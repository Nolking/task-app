import Card from "react-bootstrap/Card";
import styled from "styled-components";

const MyCard = styled(Card)`
    background-color: white;
    height: auto;
    border: none;
    border-radius: 12px;
    padding: 24px 28px 30px 24px;
    .card-title {
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        color: ${(props) => props.theme.secondaryColor};
        font-weight: normal;
        text-align: left;
        margin-bottom: 24px;
        height: 24px;
        line-height: 24px;
    }
    `;

export default MyCard;