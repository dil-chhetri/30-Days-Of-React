import React from "react";
import ReactDOM from "react-dom";
import ProfilePage from "./App";

const App = () => {
  return (
    <div>
      <ProfilePage />
    </div>
  )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)