import React from "react"
import CodeRun from "./CodeRun";

function App() {
  return (
    <div className="App" style={{ textAlign:"center", marginTop: "2rem"}}>
     <div style={{ color: "gray",paddingBottom: "2rem" }}>Code Compiler</div>
     <CodeRun />
    </div>
  );
}

export default App;
