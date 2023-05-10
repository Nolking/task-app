import styled from "styled-components";
import MySearchBar from "../MySearchBar";
import { breakpoints } from "../../utils/breakpoints";

const StyledMySearchBar = styled(MySearchBar)`
  height: 40px;
  display: flex;
  border-radius: 8px;
    background-color: #D9DFEB; 
    display: flex;
    padding-left: 15px;
    a {line-height: 40px; display: flex; align-self: center;}
    input {padding: 0; margin-left: 9px; padding-right: 10px; }
 
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {

    .card { border-radius: 0;}
  }

  @media (min-width: ${breakpoints.md}) {
    margin-right: 12px;
    
    }
`;
export default StyledMySearchBar;
