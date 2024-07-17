import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ToDoCard = ({
  text,
  isCompleted
}) => {
  return (
    <Card style={{ width: "18rem", margin: '5px' }}>
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text>State: {isCompleted ? 'Completed' : 'In-Progress'}
        </Card.Text>
        <Button variant="primary">Change State</Button>
      </Card.Body>
    </Card>
  );
};

export default ToDoCard;
