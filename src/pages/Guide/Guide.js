import "./Guide.css"
import { Link } from "react-router-dom"

const Guide = () => {
  return (
    <div className="guide">
      <h1>Getting Started</h1>
      
      <body className="guideBody">
        
        <Link to="/Download">To download the application, click here</Link> 
        <br></br><br></br><br></br><br></br>

      <h3>Creating an asset:</h3>
      <body>1. Open the application.<br></br> 
            2. Select "File" - "New" to create a default asset. <br></br>
            </body>
      <br></br><br></br>

      <h3>Opening an asset:</h3>
      <body>1. Open the application.<br></br> 
            2. Select "File" - "Open" to enter your file system and open a preexisting asset. <br></br>
            </body>
      <br></br><br></br>

      <h3>Editing an asset:</h3>
      <body>1. You can alter the attributes of an asset as shown in the picture.<br></br>
            -- Add a name or description in the text boxes.<br></br>
            -- Add attribute data in the date table, changing the data type using the dropdown.<br></br>
            -- Add pictures of the asset in the image table, any of which you can set to default. <br></br>
            2. Select "File" - "Save as" to save the asset.<br></br>
            3. When you are done, select "File" - "Quit" to exit the application.<br></br><br></br> 
            </body>
      <br></br><br></br>
      
      </body>
    </div>
  );
}
export default Guide;