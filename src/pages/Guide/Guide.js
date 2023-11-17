import "./Guide.css"
import "../../components/buttons.css"
import { Link } from "react-router-dom"

const Guide = () => {

  const handleOnClick = () => {
    window.location.href = '/Download';
  }

  return (
    <div className="guide">
      <h1>Getting Started</h1>

      <body className="guideBody">
        <button className="mainButton" onClick={handleOnClick}>To access the download, click here</button>
        <br></br><br></br><br></br><br></br>

        <h3>Creating a package:</h3>
        <body>1. Open the application.<br></br>
          2. Select "File" - "New" to create a default package. <br></br>
        </body>
        <br></br><br></br>

        <h3>Opening a package:</h3>
        <body>1. Open the application.<br></br>
          2. Select "File" - "Open" to enter your file system and open a preexisting package. <br></br>
        </body>
        <br></br><br></br>

        <h3>Editing a package:</h3>
        <body>1. You can alter the attributes of a package as shown in the picture.<br></br>
          -- Add a name or description in the text boxes.<br></br>
          -- Add attribute data in the date table, changing the data type using the dropdown.<br></br>
          -- Add pictures of the asset in the image table, any of which you can set to default. <br></br>
          2. Select "File" - "Save as" to save the package.<br></br>
          3. When you are done, select "File" - "Quit" to exit the application.<br></br><br></br>
        </body>
        <br></br><br></br>

      </body>
    </div>
  );
}
export default Guide;