/* eslint-disable react/prop-types */
import styled from "styled-components";
import StyledMySearchBar from "./StyledMySearchBar";
import { Row, Col, Card } from "react-bootstrap";
import StyledCard from "./StyledCard";
import StyledButton from "./StyledButton";
import { breakpoints } from "../../utils/breakpoints";
import { PenIcon, TrashIcon } from "../Icons";

const MyEditTaskList = ({className, taskList, onAddTask }) => {
      const handleSearch = (search) => {
        console.log(search);
        };
    return (
        <Row className={className}>
            <Col xs md>
              <Card.Title>Tasks</Card.Title>
            </Col>
            <Col xs="12" md="2">
                <StyledMySearchBar onSearch={handleSearch} />
            </Col>
            <Col xs="12" md="2">
              <StyledButton onClick={onAddTask}>+ New Task</StyledButton>{" "}
            </Col>
            <Col xs="12">
              <StyledCard>
                {taskList.map((el, index) => {
                  return <div key={index}><span>{el.task}</span>
                    <a><PenIcon /></a>
                    <a><TrashIcon /></a>
                  </div>;
                })}
              </StyledCard>
            </Col>
          </Row>
    )}

    const StyledMyEditTaskList = styled(MyEditTaskList)`
    `;

    export default StyledMyEditTaskList;