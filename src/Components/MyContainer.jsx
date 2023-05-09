import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const MyContainer = styled(Container)`
    background-color: ${(props) => props.theme.pageBackgroundColor};
    height: 100vh;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0px;
`;

export default MyContainer;