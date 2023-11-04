import React, { useState } from 'react';
import ImagePreview from '../../components/ImagePreview/imagePreview.js';
import "./Download.css"

const Download = () => {
  // logic for handling image preview
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="download">
      <h1>Download</h1>
      <div className="SystemDownloadBlock">

        {/* Download links */}
        <h2>Windows</h2>
        <h3>64-bit</h3>
        <a href={require("../../test/SDOP.msi")} alt="SDOP app">
          <button className="mainButton">
            Download Version 1.0
          </button>
        </a>
        <h2>Mac</h2>
        <button className="mainButton">
          Download Version 1.0
        </button>
        <h2>Linux</h2>
        <button className="mainButton">
          Download Version 1.0
        </button>
      </div>

      {/* Download Guide */}
      <div className="downloadGuide">
        <div className="downloadTextBlock">
          <h2 className="line">Download Guide</h2>
          <div className="line"> 1. Choose the corresponding download for your operating system. <br /> </div>
          <div className="line"> 2. Once the installer is downloaded, open it and follow the instructions for setting up the app. <br /> </div>
          <div className="line"> Note: Remember where you installed the app so that you can create a shortcut for it! <br /> </div>

          <div className="imageLayout">

            <img src={require("../../images/download/setup_wizard.png")} alt="setup wizard" onClick={() => handleImageClick(require("../../images/download/setup_wizard.png"))} />
            <div className="arrow" />
            <img src={require("../../images/download/setup2.png")} alt="setup 2" onClick={() => handleImageClick(require("../../images/download/setup2.png"))} />
            <div className="arrow" />
            <img src={require("../../images/download/setup3.png")} alt="setup 3" onClick={() => handleImageClick(require("../../images/download/setup3.png"))} />
            <div className="arrow" />
            <img src={require("../../images/download/setup4.png")} alt="setup 4" onClick={() => handleImageClick(require("../../images/download/setup4.png"))} />
          </div>

          <div className="line">
            3. To create a shortcut, go to the directory where SDOP was downloaded, right click on main.exe, and create a shortcut.
          </div>

          <img src={require("../../images/download/create_shortcut.png")} alt="shortcut" onClick={() => handleImageClick(require("../../images/download/create_shortcut.png"))} />

          <div className="line">
            4. Double-click your shortcut or main.exe to run the application.
          </div>
        </div>
      </div>

      {/* Handle enlarged image preview */}
      {selectedImage && (
        <ImagePreview
          handleCloseImage={handleCloseImage}
          handleImageClick={handleImageClick}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}

export default Download;