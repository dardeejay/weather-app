import React, { useRef, useState } from "react";

export default function Search() {
  const [location, setLocation] = useState(null);
  const search = useRef();
  const handleOnClick = () => {
    setLocation(search.current.value);
  };
  console.log(location);
  return (
    <div>
      <input type="text" name="location" id="location" ref={search} />
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
}
