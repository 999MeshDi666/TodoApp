import { useState } from "react";
import AddTodoForm from "./addTodoForm";
import Container from "react-bootstrap/Container";
const AdminPanel = () => {
  return (
    <Container>
      <AddTodoForm />
    </Container>
  );
};

export default AdminPanel;
