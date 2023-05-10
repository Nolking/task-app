/* eslint-disable react/prop-types */
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import StyledCard from "./StyledCard";
import breakpoints from "@/utils/breakpoints";
import { Skeleton } from "antd";
import TaskPieChart from "../TaskPieChart";

const MyGraph = ({ className, taskList, loading }) => {
  return (
    <Col className={className} xs="12" md="4">
      {loading ? (
        <Skeleton active />
      ) : (
        <StyledCard>
          <TaskPieChart
            totalTasks={taskList.length}
            completedTasks={
              taskList.filter((el) => el.completed === true).length
            }
          />
        </StyledCard>
      )}
    </Col>
  );
};

const StyledMyGraph = styled(MyGraph)`
  .card {
    height: 158px;
  }
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
    margin-top: 8px;
    .card {
      border-radius: 0;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    margin-top: 22px;
    padding-left: 12px;
    padding-right: 10px;
  }
`;

export default StyledMyGraph;
