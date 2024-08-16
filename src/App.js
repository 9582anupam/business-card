import "./App.css";
import Home from "./components/Home";
import CardDetails from "./components/CardDetails";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/CardDetails/:id" element={<CardDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
