import "./Download.css"

import setup_wizard from "../../images/download/setup_wizard.png"

const Download = () => {
  return (
    <div className="download">
      <h1>Download</h1>
      <div className="SystemDownloadBlock">
        <h2>Windows</h2>
        <h3>64-bit</h3>
        {/* <div id={downloadButton}> */}
        <a href={require("../../test/SDOP.msi")} alt="SDOP app">
          <button className="mainButton">
            Download Version 1.0
          </button>
          {/* </div> */}
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

      <div className="downloadGuide">
        <div className="downloadTextBlock">
          <h2>Download Guide</h2>
          <div> 1. Choose the corresponding download for your operating system. <br />
            2. Once the installer is downloaded, open it and follow the instructions for setting up the app.
          </div>
        </div>
        <div className="image_layout">
          <img src={setup_wizard} alt="setup wizard" />
        </div>

      </div>
    </div>
  );
}

export default Download;