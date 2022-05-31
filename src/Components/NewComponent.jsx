import React, { useState } from "react";
import FooterComponent from "./Footer";
import axios from "axios";

export default function NewComponent() {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <h1>new Function test</h1>
      <button onClick={onClick}>불러오기</button>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
      <br />
      <br />
      <FooterComponent />
    </div>
  );
}
