import { useState } from "react";
import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteItem = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="listItem">
      <div className="infoContainer">
        <TickIcon />
        <p className="taskTitle">{task.title}</p>
        <ProgressBar />
      </div>

      <div className="buttonContainer">
        <button className="edit" onClick={() => setShowModal(true)}>
          EDIT
        </button>
        <button className="delete" onClick={deleteItem}>
          DELETE
        </button>
      </div>
      {showModal && (
        <Modal
          mode={"edit"}
          setShowModal={setShowModal}
          getData={getData}
          task={task}
        />
      )}
    </li>
  );
};

export default ListItem;
