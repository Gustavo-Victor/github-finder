import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";
import styles from "../styles/modules/Search.module.scss";

type Search = {
  loadUser: (userName: string) => Promise<void>;
};

function Search({ loadUser }: Search) {
  const [username, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      if (username != "") {
        loadUser(username);
        setUserName("");
      }
    }
  };

  const handleClick = () => {
    loadUser(username);
  };

  return (
    <div className={styles.search_div}>
      <h2>Search for a user</h2>
      <p>Know your best repositories</p>
      <div className={styles.form_group}>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Enter username"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
