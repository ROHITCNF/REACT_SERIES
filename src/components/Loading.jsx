import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "6px solid #ccc",
          borderTop: "6px solid #3498db",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>
      <p
        style={{
          marginTop: "20px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#555",
        }}
      >
        Loading, please wait...
      </p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
