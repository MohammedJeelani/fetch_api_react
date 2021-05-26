import React from "react";

//Importing Elements
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as ReactBootStrap from "react-bootstrap";

function UserCard({ user, users, loading }) {
  return (
    <>
      {/* User card */}
      <div>
        <Row>
          {users &&
            users.map((user) => {
              return (
                <Col
                  className="FlexBox"
                  style={{ padding: "10px" }}
                  key={user.id}
                  xs={4}
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={user.avatar} />
                    <Card.Body>
                      <Card.Title>{user.first_name}</Card.Title>
                      <Card.Text>{user.last_name}</Card.Text>
                      <Card.Text>{user.email}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>

      {/* Ternary operator */}

      {loading ? (
        <ReactBootStrap.Spinner className="spinner" animation="border" />
      ) : null}
    </>
  );
}

export default UserCard;
