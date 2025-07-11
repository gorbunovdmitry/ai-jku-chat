import React from "react";

export default function LimitPage() {
  return (
    <div style={{
      height: "100dvh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Roboto, Arial, sans-serif",
      margin: 10,
      background: "#fff",
      boxSizing: "border-box"
    }}>
      <span style={{ fontSize: 120 }}>🚀</span>
      <h1 style={{ margin: "32px 0 8px 0" }}>Ещё чуть-чуть</h1>
      <div style={{ fontSize: 20, textAlign: "center", maxWidth: 400 }}>
        И мы это запустим! Добавляем последние штрихи, чтобы все работало идеально.
      </div>
    </div>
  );
} 