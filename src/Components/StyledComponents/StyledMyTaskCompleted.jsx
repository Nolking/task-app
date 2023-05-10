/* eslint-disable react/prop-types */
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import StyledCard from "./StyledCard";
import { breakpoints } from "../../utils/breakpoints";
const MyTaskCompleted = ({ className, taskList }) => {
  return (
    <Col className={className} xss="12" md="4">
      <StyledCard>
        <Card.Title className="card-title">Task Completed</Card.Title>
        <div className="task-completed-count">
          <span>{taskList.filter((el) => el.completed === true).length} </span>
          <span>/ {taskList.length}</span>
        </div>
      </StyledCard>
    </Col>
  );
};
const StyledMyTaskCompleted = styled(MyTaskCompleted)`
  .card {
    height: 158px;
  }
  .task-completed-count {
    text-align: left;
    height: 78px;
    display: flex;
  }
  .card-title {
    margin-bottom: 4px;
  }
  span {
    display: inline-flex;
    font-family: "Montserrat", sans-serif;
  }
  span:nth-child(1) {
    height: 78px;
    line-height: 78px;
    max-width: 50px;
    font-size: 64px;
    color: #5285ec;
    font-weight: medium;
  }
  span:last-child {
    max-width: 50px;
    color: #8f9ea2;
    font-weight: medium;
    font-size: 20px;
    align-self: end;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
    margin-top: 12px; 
    .card { border-radius: 0;}
  }

  @media (min-width: ${breakpoints.md}) {
    margin-top: 22px;
  }
`;
export default StyledMyTaskCompleted;
