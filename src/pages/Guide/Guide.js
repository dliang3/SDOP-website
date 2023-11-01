import "./Guide.css"
import { Link } from "react-router-dom"

const Guide = () => {
  return (
    <div className="guide">
      <h1>Getting Started</h1>
      <body className="guideBody">Here we will provide the code library you can access to code with the files after packaging them. <br></br> 
      There will also be a tutorial for how to download and tutorial for using the app.

      <Link to="/Download">To download the application, click here</Link>
      <h3>Downloading the app:</h3>
      <h3>Using the app:</h3>
      
      </body>
    </div>
  );
}
export default Guide;