import AddToDo from "../form/AddToDo";
import ToDoCard from "./card/Card";

const CardContainer = ({ todos }) => {
  return (
    <div
      style={{
        margin: "10px",
        display: "inline-flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div style={{display:'flex', flexDirection:'row', flexWrap: "wrap" }}>
        {todos.map((item) => (
          <ToDoCard key={item._id} {...item} />
        ))}
      </div>
      <div>
        <AddToDo style={{display: 'block'}}/>
      </div>
    </div>
  );
};

export default CardContainer;
