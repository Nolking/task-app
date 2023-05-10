/* eslint-disable react/prop-types */
import styled from "styled-components";
import StyledRow from "./StyledRow";
import avatar from "@/assets/donn-gabriel-baleva-U-Z4P2H3KFE-unsplash.png";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import { useUser } from "@/auth/useUser";
import { Skeleton, Space } from "antd";

const MyHeader = ({ className, loading }) => {
  const user = useUser();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
  };
  return (
    <header className={className}>
      <StyledRow
        className="justify-content-md-center"
        style={{ flex: "0 0 100%" }}
      >
        <Col xs="1" md="1" lg="1" />
        <Col xs="5" className="text-start user-col">
          {loading ? (
            <Space style={{ paddingTop: "0px" }}>
              <Skeleton.Avatar active shape="circle" size="48px" />
              <Skeleton.Input active style={{width: "80px"}}/>
            </Space>
          ) : (
            <>
              <a className="user-avatar"></a>
              <a className="user-name">{user.name}</a>
            </>
          )}
        </Col>
        <Col xs="5" className="text-end logout-col">
          {loading ? (
            <Skeleton.Input active />
          ) : (
            <NavLink to={"/login"} onClick={handleLogout}>
              Logout
            </NavLink>
          )}
        </Col>
        <Col xs="1" md="1" lg="1" />
      </StyledRow>
    </header>
  );
};

const StyledMyHeader = styled(MyHeader)`
box-shadow: 0px 3px 6px #00000029;
  .user-col {
    padding-left: 0;
  }
  .user-name {
    line-height: 70px;
    float: left;
    display: inline-block;
    margin-left: 16px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    color: #6d8187;
  }
  .user-avatar {
    float: left;
    display: inline-block;
    width: 48px;
    height: 48px;
    margin-top: 12px;
    background-image: url(${avatar});
    background-size: cover;
  }
  .logout-col {
    padding-right: 0;
    a {
      line-height: 72px;
      display: inline-block;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
      color: #6d8187;
    }
  }
`;

export default StyledMyHeader;
