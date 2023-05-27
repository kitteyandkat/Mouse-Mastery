import React, { useState, useEffect } from "react";
import LoadingPage from "./components/LoadingPage";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="content">
          <h1 className="logo">Mouse Mastery</h1>
          <p></p>
        </div>
      )}
    </div>
  );
}

export default App;