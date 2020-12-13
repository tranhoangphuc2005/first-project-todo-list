//rafce
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  FormText,
} from "reactstrap";

const FormTodo = ({ onSearch, onAddTodo }) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    onSearch(text);
    setText("");
  };

  return (
    <Container className="themed-container">
      <Row>
        <Col>
          <InputGroup>
            <Input value={text} onChange={(e) => setText(e.target.value)} />
            <InputGroupAddon addonType="append">
              <InputGroupText>Search</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <Button onClick={handleClick}>Submit</Button>
          <Button onClick={() => setIsOpen(true)}>Add</Button>
        </Col>
      </Row>
      <Modal isOpen={isOpen}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              onAddTodo(name);
              setName("");
              setIsOpen(false);
            }}
          >
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default FormTodo;
