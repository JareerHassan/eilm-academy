"use client";
export default function Card({ title, author }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}
