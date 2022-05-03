import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Routes from "./routes";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Menu/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
