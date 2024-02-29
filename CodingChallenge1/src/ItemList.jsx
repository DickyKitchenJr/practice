import { useState } from "react";
import "./ItemList.css";

function ItemList() {
  const [items, setItems] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    const input = e.target.value;
    setUserInput(input);
  };

  const handleAddButton = (e) => {
    e.preventDefault();
    setItems([...items, userInput]);
    setUserInput("");
  };

  return (
    <>
      <form onSubmit={handleAddButton}>
        <label htmlFor="items">Add An Item</label>
        <input
          type="text"
          name="items"
          id="items"
          value={userInput}
          onChange={handleUserInput}
        />
        <button>Add</button>
      </form>
      {items.length === 0 ? (
        <p>No Items In The List</p>
      ) : (
        <>
          <p>Items:</p>
          <ul>
            {" "}
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}{" "}
          </ul>
        </>
      )}
    </>
  );
}

export default ItemList;
