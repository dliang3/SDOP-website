import "./Download.css"

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
          <h2 className="line">Download Guide</h2>
          <div className="line"> 1. Choose the corresponding download for your operating system. <br />
            2. Once the installer is downloaded, open it and follow the instructions for setting up the app. <br/>
            Note: Remember where you installed the app so that you can create a shortcut for it! <br/>

          </div>

          <div className="image_layout">
            <img src={require("../../images/download/setup_wizard.png")} alt="setup wizard" />
            <div className="arrow" />
            <img src={require("../../images/download/setup2.png")} alt="setup 2" />
            <div className="arrow" />
            <img src={require("../../images/download/setup3.png")} alt="setup 3" />
            <div className="arrow" />
            <img src={require("../../images/download/setup4.png")} alt="setup 4" />
          </div>

          <div className="line">
            3. To create a shortcut, go to the directory where SDOP was downloaded, right click on main.exe, and create a shortcut.
          </div>
        </div>


      </div>
    </div>
  );
}

export default Download;