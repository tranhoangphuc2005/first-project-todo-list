import React from "react";
import { Container, Table, Button } from "reactstrap";

const TodoList = ({ todos, deteleTodo }) => {
  const handleDelete = () => {
    deteleTodo(todos.id);
  };
  return (
    <Container className="themed-container">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status (Done/ Not Done)</th>
            <th>End Date (Time)</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.name}</td>
                <td>{todo.isDone === true ? "Complted" : "Not complete"}</td>
                <td>{todo.endDate}</td>
                <td>
                  <Button outline color="danger" onClick={handleDelete}>
                    Delete
                  </Button>{" "}
                </td>
                <td>
                  <Button outline color="primary">
                    Edit
                  </Button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TodoList;
