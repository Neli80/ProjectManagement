import React from "react";

const PageContent = ({ title, sections }) => {
  return (
    <div style={containerStyle}>
      <h2>{title}</h2>
      {sections.map((section, index) => (
        <div key={index} style={sectionStyle}>
          <h3>{section.title}</h3>
          <ul style={listStyle}>
            {section.content.split("\n").map((item, i) => (
              <li key={i} style={i % 2 === 0 ? leftItemStyle : rightItemStyle}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "1em",
};

const sectionStyle = {
  marginBottom: "2em",
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
};

const leftItemStyle = {
  padding: "0.5em",
  margin: "0.5em 0",
  backgroundColor: "#e0f7fa",
  textAlign: "left",
  borderRadius: "4px",
  border: "1px solid #00acc1",
};

const rightItemStyle = {
  padding: "0.5em",
  margin: "0.5em 0",
  backgroundColor: "#b2dfdb",
  textAlign: "right",
  borderRadius: "4px",
  border: "1px solid #009688",
};

export default PageContent;
