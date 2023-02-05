import Modal from "./Modal";

const ListHeader = ({ listName }) => {
  const signOut = () => {
    console.log("Sign out.");
  };
  return (
    <div className="listHeader">
      <h1>{listName}</h1>
      <div className="buttonContainer">
        <button className="create">ADD NEW</button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
      <Modal />
    </div>
  );
};
export default ListHeader;
