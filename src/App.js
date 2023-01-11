import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div>
        <Login />
        {/* other components */}
      </div>
    </Router>
  );
}

export default App;
