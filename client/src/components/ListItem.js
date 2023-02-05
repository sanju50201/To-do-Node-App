import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";

const ListItem = ({ task }) => {
  return (
    <li className="listItem">
      <div className="infoContainer">
        <TickIcon />
        <p className="taskTitle">{task.title}</p>
        <ProgressBar />
      </div>

      <div className="buttonContainer">
        <button className="edit">EDIT</button>
        <button className="delete">DELETE</button>
      </div>
    </li>
  );
};

export default ListItem;
