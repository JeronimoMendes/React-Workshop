import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import { BookPage } from "./pages/BookPage";
import { HomePage } from "./pages/HomePage";

// Comment

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/book/:id" element={<BookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
