/* eslint-disable react/prop-types */
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import StyledCard from "./StyledCard";
import { breakpoints } from "@/utils/breakpoints";
const MyLatestCreatedTask = ({ className, taskList }) => {
  return (
    <Col className={className} xss="12" md="4">
      <StyledCard>
        <Card.Title className="card-title">Latest Created Tasks</Card.Title>
        <ul>
          {taskList.length > 0 && (
            <li> {taskList[taskList.length - 1].task}</li>
          )}
          {taskList.length > 1 && (
            <>
              <li>{taskList[taskList.length - 2].task}</li>
            </>
          )}
          {taskList.length > 2 && (
            <>
              <li>{taskList[taskList.length - 3].task}</li>
            </>
          )}
        </ul>
      </StyledCard>
    </Col>
  );
};
const StyledMyLatestCreatedTask = styled(MyLatestCreatedTask)`
  .card {
    height: 158px; 
  }
  .card-title { margin-bottom: 12px;}
  ul {height: 70px; padding-left: 0;}
  li {list-style-type: none; position: relative; text-align: left; font-family: "Montserrat", sans-serif; font-size: 14px; color: #8F9EA2; font-weight: medium; margin-bottom: 4px;}
  li:before {content: "•"; font-size: 22px; line-height: 22px; margin-right: 12px; float: left; color: #8F9EA2; font-weight: bold; display: inline-block; height: 6px; width:6px;}
 
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md})) {
    margin-top: 8px; 
    .card { border-radius: 0;}
  }

  @media (min-width: ${breakpoints.md}) {
    margin-top: 22px;
  }
`;
export default StyledMyLatestCreatedTask;
