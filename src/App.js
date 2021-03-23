import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import VideosRecomendados from "./components/Videosrecomendados/videosrecomendados";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" component={Navbar} />
        <div className="app_page">
          <Route path="/" component={Sidebar} />
          <Route path="/" component={VideosRecomendados} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
