// ContentItem.jsx
import React, { useState } from "react";

export default function ContentItem({ title, content, isOne }) {
  const [dropDown, setDropDown] = useState(isOne);
  function isDropDown() {
    setDropDown(!dropDown);
  }

  return (
    <div className="content con1">
      <h2 onClick={isDropDown} style={{ cursor: 'pointer' }}>
        {title}
        <i
          onClick={isDropDown}
          className="fa-solid fa-thumbtack fa-rotate-by"
          style={{ fontSize: "30px", rotate: "45deg", color: '#488dc7' }}
        ></i>
      </h2>
      {dropDown && (
        <ul className="infor_ul">
          {content.map((item, idx) => {
            const value = Object.values(item)[0];
            return <li key={idx}>{value}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
