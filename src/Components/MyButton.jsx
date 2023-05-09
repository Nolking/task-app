import { styled } from "styled-components";
import Button from "react-bootstrap/Button";

const MyButton = styled(Button)`
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
    border: none;
    width: 100%;
    height: 40px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    border-radius: 8px;
    &:hover {
        background-color: ${(props) => props.theme.secondaryColor};
        color: white;
        border: none;
    }
`;

export default MyButton;