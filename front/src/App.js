import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Edit from "./pages/edit/Edit";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>

    </div>
  );
}

export default App;
