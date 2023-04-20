import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import io from "socket.io-client";
import "./App.css";
import Login from "./pages/auth/Login";
import Chat from "./pages/chat";
import Home from "./pages/home";

const socket = io.connect("http://localhost:4000"); // Add this -- our server will run on port 4000, so we connect to it from here

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />
            }
          />
          <Route
            path="/chat"
            element={<Chat username={username} room={room} socket={socket} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
