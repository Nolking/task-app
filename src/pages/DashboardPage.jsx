import { Row, Col, Card } from "react-bootstrap";
import MyContainer from "../Components/MyContainer";
import MyCard from "../Components/MyCard";
import MyRow from "../Components/MyRow";
import { useUser } from "../auth/useUser";
import { NavLink } from "react-router-dom";
import MyButton from "../Components/MyButton";

const DashboardPage = () => {
  const [user, addTask] = useUser();
  console.log("user: ", user);
  const handleLogout = () => {
    sessionStorage.removeItem("token");
  };
  const handleAddTask = () => {
    console.log("addTask");
  };
  return (
    <MyContainer>
      <header>
        <MyRow className="justify-content-md-center" style={{flex: "0 0 100%"}}>
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
        </MyRow>
      </header>
      {user.tasks.length > 0 && (
        <MyRow className="justify-content-md-center">
          <Col xss="0" xs="0" sm="0" md="1" lg="1" />
          <Col>
            <MyRow>
              <Col xss="12" xs="12" sm="12">
                <MyCard>
                  <Card.Title className="card-title">Task Completed</Card.Title>
                </MyCard>
              </Col>
              <Col xss="12" xs="12" sm="12">
                <MyCard>
                  <Card.Title className="card-title">
                    Latest Created Tasks
                  </Card.Title>
                </MyCard>
              </Col>
              <Col xss="12" xs="12" sm="12">
                <MyCard>Graph</MyCard>
              </Col>
            </MyRow>
          </Col>
          <Col xss="0" xs="0" sm="0" md="1" lg="1" />
        </MyRow>
      )}

      {user.tasks.length > 0 &&
        user.tasks.map((task, index) => {
          return <MyCard key={index}>{task}</MyCard>;
        })}
      {user.tasks.length === 0 && (
        <Col xs="12" md="4" lg="4" style={{alignSelf: "baseline"}}>
          <MyCard>
            <Card.Title className="card-title text-center">
              You have no tasks.
            </Card.Title>
            <MyButton
              style={{ maxWidth: "124px", alignSelf: "center" }}
              onClick={handleAddTask}
            >
              + New Task
            </MyButton>
          </MyCard>
        </Col>
      )}
    </MyContainer>
  );
};

export default DashboardPage;
