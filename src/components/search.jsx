import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Search({ setLocation }) {
  const search = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(search.current.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        name="location"
        id="location"
        ref={search}
        placeholder="Location ex. Olongapo City"
      />
      <button onClick={handleSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />
      </button>
    </div>
  );
}
