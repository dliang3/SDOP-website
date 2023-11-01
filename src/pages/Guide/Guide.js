import "./Guide.css"
import { Link } from "react-router-dom"

const Guide = () => {
  return (
    <div>
      <h1>Getting Started</h1>
      <Link to="/Download">To download the application, click here</Link>
      <h3>Downloading the app:</h3>
      <h3>Using the app:</h3>
    </div>
  );
}

export default Guide;