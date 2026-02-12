import React from "react";
import "./CardGrid.css";

const data = [
  { id: 1, title: "Cyber Security", desc: "Ethical hacking & pentesting" },
  { id: 2, title: "React", desc: "Frontend development" },
  { id: 3, title: "Django", desc: "Python backend framework" },
  { id: 4, title: "Cloud", desc: "AWS & DevOps" },
  { id: 5, title: "Docker", desc: "Containerization" },
  { id: 6, title: "GraphQL", desc: "API optimization" },
  { id: 7, title: "Node.js", desc: "Backend JS runtime" },
  { id: 8, title: "TypeScript", desc: "Typed JS superset" },
];

export default function CardsGrid() {
  return (
    <div className="cards-page">
      <h1 className="page-title">Advanced Grid Layout</h1>
      <div className="cards-grid">
        {data.map((item, index) => (
          <div key={item.id} className="card">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
