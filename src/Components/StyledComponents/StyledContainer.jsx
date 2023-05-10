import Container from "react-bootstrap/Container";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const MyContainer = ({ children, className }) => {
  return (
      <Container className={className}><div className="content-wrapper">{children}</div></Container>
  );
};

const StyledContainer = styled(MyContainer)`
  background-color: ${(props) => props.theme.pageBackgroundColor};
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;
  padding: 0px;
  .content-wrapper { 
    position: absolute;
    ${(props) => props.children.length > 2 ? "top: 0;":""}
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
  }
`;

export default StyledContainer;
