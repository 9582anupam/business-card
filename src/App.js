import "./App.css";
import Home from "./components/Home";
import CardDetails from "./components/CardDetails";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Camera from "./components/Camera";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/CardDetails/:id" element={<CardDetails />} />
                    <Route path="/Camera" element={<Camera />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
