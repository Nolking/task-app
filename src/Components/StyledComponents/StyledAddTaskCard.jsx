/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Col, Card } from "react-bootstrap";
import { Skeleton } from "antd";
import StyledCard from "./StyledCard";
import StyledButton from "./StyledButton";
import { breakpoints } from "../../utils/breakpoints";

const AddTaskCard = ({ className, loading, onAddTask }) => {
  return (
    <Col className={className} xs="12" md="4" lg="4" style={{ alignSelf: "baseline" }}>
      <StyledCard>
        {loading ? (
          <Skeleton.Input active />
        ) : (
          <Card.Title className="card-title text-center">
            You have no tasks.
          </Card.Title>
        )}

        {loading ? (
          <Skeleton.Input active></Skeleton.Input>
        ) : (
          <StyledButton
            style={{ maxWidth: "124px", alignSelf: "center" }}
            onClick={onAddTask}
          >
            + New Task
          </StyledButton>
        )}
      </StyledCard>
    </Col>
  );
};

const StyledAddTaskCard = styled(AddTaskCard)`
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
    position: absolute; top: 84px;
  }
`;

export default StyledAddTaskCard;
