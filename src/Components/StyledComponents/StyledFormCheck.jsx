import styled from "styled-components";
import Form from "react-bootstrap/Form";

const StyledFormCheck = styled(Form.Check)`
    display: inline-block; width: 16px; height: 16px; 
    position: absolute; top: 29.5px;
    .form-check-input {margin-top: 0px; margin-right: 0px;
        &:hover {cursor: pointer;}
    }
    
`;

export default StyledFormCheck;
