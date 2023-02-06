import { useState } from "react";
import { useCookies } from "react-cookie";
import { RxCross2 } from "react-icons/rx";
const Modal = ({ mode, setShowModal, getData, task }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const editMode = mode === "edit" ? true : false;
  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email,
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : 50,
    date: editMode ? task.date : new Date(),
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        console.log("Worked!!");
        setShowModal(false);
        getData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${task.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (response.status === 200) {
        setShowModal(false);
        getData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    console.log("Changing...", e);
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
    console.log(data);
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="formTitleContainer">
          <h3>Let's {mode} your task.</h3>
          <button onClick={() => setShowModal(false)}>
            <RxCross2 />
          </button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="Your task goes here..."
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <br />
          <label for="range">Drag to select your current progress</label>
          <input
            type="range"
            id="range"
            required
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          />
          <input
            className={mode}
            type="submit"
            onClick={editMode ? editData : postData}
          />
        </form>
      </div>
    </div>
  );
};
export default Modal;
