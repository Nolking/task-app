import Form from "react-bootstrap/Form";
import styled from "styled-components";

const MyFormControl = styled(Form.Control)`
    background-color: ${(props) => props.theme.grayColor};
    border: none;
    border-radius: 8px;
    height: 40px;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    padding-left: 16px;
    display: flex; 
    align-items: center;
    font-size: 14px;
    color: ${(props) => props.theme.lightGrayColor};
    margin-bottom: 12px;
    &:focus {
        outline: none;
        box-shadow: none;
        border: none;
    }
`;

export default MyFormControl;