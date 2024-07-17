import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";

const AddToDo = () => {
    const {onSubmitHandler} = useContext(ToDoContext)
  const {formValue,onChangeHandler,onSubmit} = useForm({text: ""}, onSubmitHandler)

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ToDo Title</Form.Label>
        <Form.Control
          type="text"
          name="text"
          value={formValue.name}
          onChange={onChangeHandler}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Add ToDo</Button>{" "}
    </Form>
  );
};
export default AddToDo;
