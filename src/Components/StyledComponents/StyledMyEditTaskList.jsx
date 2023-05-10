/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import StyledMySearchBar from "./StyledMySearchBar";
import { Col, Card } from "react-bootstrap";
import StyledCard from "./StyledCard";
import StyledButton from "./StyledButton";
import { breakpoints } from "../../utils/breakpoints";
import { PenIcon, TrashIcon } from "../Icons";
import StyledFormCheck from "./StyledFormCheck";
import { Skeleton } from "antd";

const MyEditTaskList = ({
  className,
  taskList,
  onAddTask,
  onUpdateTask,
  onDeleteTask,
  onEditTask,
  loading,
}) => {
  const [filtered, setFiltered] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const handleSearch = (search) => {
    setFiltered(search);
    taskList.filter((el) => {
      if (el.task.toLowerCase().includes(search.toLowerCase())) {
        setErrorMessage("");
      } else {
        setErrorMessage("No task found");
      }
    });
  };
  const handleCheck = (event, index) => {
    const status = event.target.checked;
    onUpdateTask(status, index);
  };
  const handleEditMode = (index) => {
    setEditingIndex(index);
  };

  const handleEditTask = (event, index) => {
    const newTask = event.target.value;
    onEditTask(newTask, index);
  };
  return (
    <section className={className}>
      <Col className="title-col" xs="12" md>
        {loading ? <Skeleton.Input active /> : <Card.Title>Tasks</Card.Title>}
      </Col>
      <Col className="search-bar-col" xs="12" md="3">
        {loading ? (
          <Skeleton.Input active />
        ) : (
          <StyledMySearchBar onSearch={handleSearch} />
        )}
      </Col>
      <Col className="button-col" xs="12" md="2">
        {loading ? (
          <Skeleton.Input style={{}} active />
        ) : (
          <StyledButton onClick={onAddTask}>+ New Task</StyledButton>
        )}
      </Col>
      <Col xs="12">
        <StyledCard>
          {loading ? (
            <Skeleton active />
          ) : (
            <>
              {taskList.map((el, index) => {
                return (
                  <div
                    className={
                      el.task.toLowerCase().includes(filtered.toLowerCase())
                        ? "task-item"
                        : "task-item hidden"
                    }
                    key={index}
                  >
                    {editingIndex === index ? (
                      <input
                        className="edit-input"
                        type="text"
                        value={el.task}
                        onChange={(event) => handleEditTask(event, index)}
                        onBlur={() => setEditingIndex(null)}
                      />
                    ) : (
                      <>
                        <StyledFormCheck
                          type="checkbox"
                          onClick={(event) => {
                            handleCheck(event, index);
                          }}
                        ></StyledFormCheck>
                        <span className={el.completed ? "completed" : ""}>
                          {el.task}
                        </span>
                      </>
                    )}
                    <a
                      className="icon trash-icon"
                      onClick={(event) => {
                        onDeleteTask(event, index);
                      }}
                    >
                      <TrashIcon />
                    </a>
                    <a
                      className="icon pen-icon"
                      onClick={() => handleEditMode(index)}
                    >
                      <PenIcon />
                    </a>
                  </div>
                );
              })}
            </>
          )}

          {errorMessage && (
            <p style={{ color: "#537178", lineHeight: "200px" }}>
              {errorMessage}
            </p>
          )}
        </StyledCard>
      </Col>
    </section>
  );
};

const StyledMyEditTaskList = styled(MyEditTaskList)`
  display: flex;
  flex-wrap: wrap;
  .card-title {
    line-height: 40px;
    color: #537178;
  }
  .card {
    min-height: 200px;
    max-height: 500px; 
    overflow: auto;
    padding-top: 0;
    padding-bottom: 0;
    ${props => props.loading ? ".ant-skeleton {margin-top: 24px}":""}
    .task-item {
      border-bottom: 2px solid #e8e8e8;
      padding: 25px 0;
      line-height: 25px;
      display: block;
      text-align: left;
      position: relative;
      .edit-input { border: none; background-color: #D9DFEB; border-radius: 8px; width: calc(100% - 100px);
        &:focus { outline: none; }
    }
      &.hidden {
        display: none !important;
        }
      &:last-child {
        border-bottom: none;
      }
    }
    .icon {
      display: inline-block;
      float: right;
      margin-left: 16px;
    }
    span {
      text-align: left;
      display: inline-block;
      line-height: 25px;
      font-family: Montserrat;
      font-size: 20px;
      color: #5285ec;
      width: calc(100% - 100px);
      word-break: break-all; white-space: pre-line
      font-weight: medium;
      margin-left: 28px;
      &.completed {
        text-decoration: line-through;
        color: #537178;
      }
    }
  }
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
    margin-top: 30px;
    .card {
      border-radius: 0;
      margin-top: 16px;
      padding-right: 0;
    }
    .task-item {
      padding-right: 13px !important;
    }
    .search-bar-col {
      margin-bottom: 8px;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      ${(props) => (props.loading ? "width: 100% !important" : "")};
      input {
        margin-left: 0;
        text-align: center;
        width: 100%;
      }
    }
    .button-col {
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
    }
    .title-col {
      margin-bottom: 8px;
      text-align: center !important;
    }
    overflow: hidden;
  }

  @media (min-width: ${breakpoints.md}) {
    margin-top: 34px;
    .card {
      margin-top: 10px;
    }
    .button-col {
      padding-left: 0;
      ${(props) => (props.loading ? "" : "width: 124px")}};
    }
    .search-bar-col {
      padding: 0;
      ${(props) => (props.loading ? "width: 175px" : "")}
    }
    .title-col {
      text-align: left;
      line-height: 40px;
    }
  }
`;

export default StyledMyEditTaskList;
