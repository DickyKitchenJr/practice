import { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

/**
 * List all users
 * display name, email and website as clickable link
 *
 * add filtering by name and email that is case insensitive
 */

function App() {
  const [initialData, setInitialData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const returnedData = await fetch(API_URL);
        const processedData = await returnedData.json();
        console.log(processedData);
        setInitialData(processedData);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };

    fetchData();
  }, []);

  const handleFilteredData = (e) => {
    const input = e.target.value;
    const entry = [];
    for (let i = 0; i < initialData.length; i++) {
      console.log(i);
      console.log(initialData.length);
      const inputUpper = input.toUpperCase();
      const nameUpper = initialData[i].name.toUpperCase();
      const emailUpper = initialData[i].email.toUpperCase();
      if (nameUpper.includes(inputUpper) || emailUpper.includes(inputUpper)) {
        entry.push(initialData[i]);
      }
    }
    setFilteredData(entry);
  };

  return (
    <>
      <main>
        <div className="div1">
          <h1>Users:</h1>
          <br />
          <label htmlFor="search">Search</label>
          <input type="text" name="search" onChange={handleFilteredData} />
          <br />
          {initialData.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <>
              {filteredData.length !== 0 ? (
                <>
                  {filteredData.map((user) => (
                    <>
                      <p>User: {user.name}</p>
                      <p>Email: {user.email}</p>
                      <a href={`https://${user.website}`}>{user.website}</a>
                      <br />
                    </>
                  ))}
                </>
              ) : (
                <>
                  {initialData.map((user) => (
                    <>
                      <p>User: {user.name}</p>
                      <p>Email: {user.email}</p>
                      <a href={`https://${user.website}`}>{user.website}</a>
                      <br />
                    </>
                  ))}{" "}
                </>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
