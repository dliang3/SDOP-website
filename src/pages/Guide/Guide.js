import React, { useState } from 'react';
import ImagePreview from '../../components/ImagePreview/imagePreview.js';
import "./Guide.css"
import "../../components/buttons.css"
import { Link } from "react-router-dom"

const Guide = () => {

  const handleOnClick = () => {
    window.location.href = '/Download';
  }

    // logic for handling image preview
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
      setSelectedImage(imageSrc);
    };
  
    const handleCloseImage = () => {
      setSelectedImage(null);
    };


  return (
    <div className="guide">
      <h1>Getting Started</h1>

      <body className="guideBody">
        <button className="mainButton" onClick={handleOnClick}>To access the download, click here</button>
        <br></br><br></br><br></br><br></br>

        <h3>Creating a package:</h3>
        <body>1. Open the application.<br></br>
          2. Select "File" - "New" to create a default package. <br></br><br></br>

          <div className="imageLayout">

            <img src={require("../../images/guide/open.PNG")} alt="open" onClick={() => handleImageClick(require("../../images/guide/open.PNG"))} />
            <div className="arrow" />
            <img src={require("../../images/guide/select_new.PNG")} alt="select new" onClick={() => handleImageClick(require("../../images/guide/select_new.PNG"))} />
            <div className="arrow" />
            <img src={require("../../images/guide/default.PNG")} alt="default" onClick={() => handleImageClick(require("../../images/guide/default.PNG"))} />
            
          </div>

        </body>
        <br></br><br></br>

        <h3>Opening a package:</h3>
        <body>1. Open the application.<br></br>
          2. Select "File" - "Open" to enter your file system and open a preexisting package. <br></br>
        
          <div className="imageLayout">

          <img src={require("../../images/guide/open.PNG")} alt="open" onClick={() => handleImageClick(require("../../images/guide/open.PNG"))} />
          <div className="arrow" />
          <img src={require("../../images/guide/select_open.PNG")} alt="select open" onClick={() => handleImageClick(require("../../images/guide/select_open.PNG"))} />
          <div className="arrow" />
          <img src={require("../../images/guide/open_file.PNG")} alt="open file" onClick={() => handleImageClick(require("../../images/guide/open_file.PNG"))} />
          <div className="arrow" />
          <img src={require("../../images/guide/opened_file.PNG")} alt="opened file" onClick={() => handleImageClick(require("../../images/guide/opened_file.PNG"))} />
          <div className="arrow" />
          <img src={require("../../images/guide/edit.PNG")} alt="edit" onClick={() => handleImageClick(require("../../images/guide/edit.PNG"))} />
          </div>
        
        </body>
        <br></br><br></br>

        <h3>Editing a package:</h3>
        <body>1. You can alter the attributes of a package as shown in the picture above.<br></br>
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