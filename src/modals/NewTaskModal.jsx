import React from "react";
import StyledCard from "../Components/StyledComponents/StyledCard";
import StyledButton from "../Components/StyledComponents/StyledButton";
import { Form, Card } from "react-bootstrap";
import StyledFormControl from "../Components/StyledComponents/StyledFormControl";
// import { useUser } from "../auth/useUser";

// eslint-disable-next-line react/prop-types
const NewTaskModal = ({isOpen, onClose}) => {
    // const [user, addTask] = useUser();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const taskName = form.taskName.value;
        // if (taskName.trim().length >0) addTask(taskName.trim());
        onClose(taskName.trim());
    }
    if (!isOpen) return null;
    return <React.Fragment>
        <div className="modal-overlay">
        <StyledCard style={{width: "296px"}}>
            <Card.Title>+ New Task</Card.Title>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="taskName">
                    <StyledFormControl type="name" placeholder="Name" />
                </Form.Group>
                <StyledButton type="submit" >+ New Task</StyledButton>
            </Form>
        </StyledCard>
        </div>
    </React.Fragment>;
};

export default NewTaskModal;