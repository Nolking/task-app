import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

import { StyledContainer, StyledCard, StyledRow, StyledButton } from "@/Components/index.js";
import StyledMySearchBar from "../Components/StyledComponents/StyledMySearchBar";
import { useUser } from "../auth/useUser";
import { NavLink } from "react-router-dom";
import NewTaskModal from "../modals/NewTaskModal";
import { SearchIcon, TrashIcon, PenIcon } from "@/Components/Icons/index.js";
import StyledMyTaskCompleted from "../Components/StyledComponents/StyledMyTaskCompleted";
import StyledMyLatestCreatedTask from "../Components/StyledComponents/StyledMyLatestCreatedTask";
import StyledMyGraph from "../Components/StyledComponents/StyledMyGraph";
import StyledMyEditTaskList from "../Components/StyledComponents/StyledMyEditTaskList";


const DashboardPage = () => {
  const [user] = useUser();
  const [taskList, setTaskList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleLogout = () => {
    sessionStorage.removeItem("token");
  };
  const handleNewTask = (taskName) => {
    setShowModal(false);
    if (taskName.length === 0) return;
    setTaskList([...taskList, { task: taskName, completed: false }]);
    
  };
  const handleAddTask = () => {
    setShowModal(true);
  };
 
  return (
    <StyledContainer className={taskList.length === 0 ? "empty-list":""}>
      <header>
        <StyledRow
          className="justify-content-md-center"
          style={{ flex: "0 0 100%" }}
        >
          <Col xs="1" md="1" lg="1" />
          <Col xs="5" className="text-start">
            {user.name}
          </Col>
          <Col xs="5" className="text-end">
            <NavLink to={"/login"} onClick={handleLogout}>
              Logout
            </NavLink>
          </Col>
          <Col xs="1" md="1" lg="1" />
        </StyledRow>
      </header>
      {taskList.length > 0 && (
        <section className="task-section" style={{display: "flex", flex: "0 0 100%", flexWrap: "wrap", overflow: "hidden"}}>
        <StyledRow className="justify-content-md-center">
          <Col xss="0" xs="0" sm="0" md="1" lg="1" />
          <Col>
            <StyledRow>
              <StyledMyTaskCompleted taskList={taskList}> </StyledMyTaskCompleted>
              <StyledMyLatestCreatedTask taskList={taskList}> </StyledMyLatestCreatedTask>
              <StyledMyGraph taskList={taskList}> </StyledMyGraph>
            </StyledRow>
          </Col>
          <Col xss="0" md="1" />
        </StyledRow>
        </section>
      )}
      <Col xs="1"></Col>
      <Col xs="10">
        {taskList.length > 0 && (
          <StyledMyEditTaskList taskList={taskList} onAddTask={handleAddTask} />
        )}
      </Col>
      <Col xs="1"></Col>
      {taskList.length === 0 && (
        <Col xs="12" md="4" lg="4" style={{ alignSelf: "baseline" }}>
          <StyledCard>
            <Card.Title className="card-title text-center">
              You have no tasks.
            </Card.Title>
            <StyledButton
              style={{ maxWidth: "124px", alignSelf: "center" }}
              onClick={handleAddTask}
            >
              + New Task
            </StyledButton>
          </StyledCard>
        </Col>
      )}
      {showModal && <NewTaskModal isOpen={showModal} onClose={handleNewTask} />}
    </StyledContainer>
  );
};

export default DashboardPage;
