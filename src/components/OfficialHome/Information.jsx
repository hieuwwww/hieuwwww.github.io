// Infor.jsx
import React from "react";
import { noidung } from "./data1";
import "./Information.css";
import ContentItem from "./content_item";

export default function Infor() {
  return (
    <div className="container_information" style={{ paddingBottom: '150px' }}>
      {noidung.map((item, index) => (
        <ContentItem
          key={index}
          title={item.title}
          content={item.content}
          isOne={index === 0}
        />
      ))}
    </div>
  );
}
