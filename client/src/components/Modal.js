const Modal = () => {
  const mode = "edit";

  const handleChange = () => {
    console.log("Changing...");
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="formTitleContainer">
          <h3>Let's {mode} you a task.</h3>
          <button>X</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="Your task goes here..."
            name="title"
            value={""}
            onChange={handleChange}
          />
          <br />
          <input
            type="range"
            required
            min="0"
            max="100"
            name="progress"
            value={""}
            onChange={handleChange}
          />
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Modal;
