import React, { useState } from "react";
// Imoprting Elements
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import UserCard from "./UserCard";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationMenu() {
  // UseState Hooks
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // onClick Functionality
  const apiGet = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTimeout(() => {
          setUsers(json.data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Fetch User Cards</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>

        <Button onClick={apiGet} variant="outline-info">
          Get Users
        </Button>
      </Navbar>

      <UserCard users={users} loading={loading} />
    </div>
  );
}

export default NavigationMenu;