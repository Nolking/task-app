import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

import {
  StyledContainer,
  StyledCard,
  StyledRow,
  StyledButton,
} from "@/Components/index.js";
import { useUser } from "../auth/useUser";
import NewTaskModal from "../modals/NewTaskModal";
import StyledMyTaskCompleted from "../Components/StyledComponents/StyledMyTaskCompleted";
import StyledMyLatestCreatedTask from "../Components/StyledComponents/StyledMyLatestCreatedTask";
import StyledMyGraph from "../Components/StyledComponents/StyledMyGraph";
import StyledMyEditTaskList from "../Components/StyledComponents/StyledMyEditTaskList";
import StyledMyHeader from "../Components/StyledComponents/StyledMyHeader";
import StyledAddTaskCard from "../Components/StyledComponents/StyledAddTaskCard";

const DashboardPage = () => {
  const user = useUser();
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleNewTask = (taskName) => {
    setShowModal(false);
    if (taskName.length === 0) return;
    const newTaskList = [...taskList];
    newTaskList.push({ task: taskName, completed: false });
    setTaskList(newTaskList);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };
  const handleAddTask = () => {
    setShowModal(true);
  };
  const handleUpdateTask = (status, index) => {
    const newTaskList = [...taskList];
    newTaskList[index].completed = status;
    setTaskList(newTaskList);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };
  const handleDeleteTask = (event, index) => {
    event.preventDefault();
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  const handleEditTask = (task, index) => {
    const newTaskList = [...taskList];
    newTaskList[index].task = task;
    setTaskList(newTaskList);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <StyledContainer className={taskList.length === 0 ? "empty-list" : ""}>
      <StyledMyHeader loading={loading} />
      {taskList.length > 0 && (
        <section
          className="task-section"
          style={{
            display: "flex",
            flex: "0 0 100%",
            flexWrap: "wrap",
            overflow: "hidden",
          }}
        >
          <StyledRow className="justify-content-md-center">
            <Col xss="0" md="1" />
            <Col xss="12" md="10">
              <StyledRow>
                <StyledMyTaskCompleted
                  taskList={taskList}
                  loading={loading}
                  className="control-col"
                ></StyledMyTaskCompleted>

                <StyledMyLatestCreatedTask
                  taskList={taskList}
                  loading={loading}
                  className="control-col"
                ></StyledMyLatestCreatedTask>

                <StyledMyGraph
                  taskList={taskList}
                  loading={loading}
                  className="control-col"
                >
                  {" "}
                </StyledMyGraph>
              </StyledRow>
            </Col>
            <Col xss="0" md="1" />
          </StyledRow>
        </section>
      )}
      <Col xs="0" md="1"></Col>
      <Col xs="12" md="10">
        {taskList.length > 0 && (
          <StyledMyEditTaskList
            taskList={taskList}
            onAddTask={handleAddTask}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
            loading={loading}
          />
        )}
      </Col>
      <Col xs="0" md="1"></Col>
      {taskList.length === 0 && (
        <StyledAddTaskCard
          loading={loading}
          onAddTask={() => setShowModal(true)}
        ></StyledAddTaskCard>
      )}
      {showModal && <NewTaskModal isOpen={showModal} onClose={handleNewTask} />}
    </StyledContainer>
  );
};

export default DashboardPage;
