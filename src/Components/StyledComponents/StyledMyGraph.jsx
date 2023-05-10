/* eslint-disable react/prop-types */
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import StyledCard from "./StyledCard";
import breakpoints from "@/utils/breakpoints";

const MyGraph = ({ className, taskList }) => {
  return (
    <Col className={className} xs="12" md="4">
      <StyledCard>Grafsdfph</StyledCard>
    </Col>
  );
};

const StyledMyGraph = styled(MyGraph)`
.card{height: 158px;}
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
    margin-top: 8px;
    .card {border-radius: 0;}
  }

  @media (min-width: ${breakpoints.md}) {
    margin-top: 22px;
  }
`;

export default StyledMyGraph;
