import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TabContainer from "./pages/TabContainer";
import Auth from "./components/Auth";
import { GlobalStyle } from "./style/style";
import AccesRoute from "./pages/AccessPrivate";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/ToDo" element={<TabContainer />} />
          <Route path="/PrivateRoute" element={<PrivateRoute />}>
            <Route path="" element={<AccesRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
