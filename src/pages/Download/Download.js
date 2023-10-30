import "./Download.css"

const Download = () => {
  return (
    <div className="download">
      <h1>Download</h1>
      <div className="SystemDownloadBlock">
        <h2>Windows</h2>
        <h3>64-bit</h3>
        {/* <a href="../../appCode/SDOP_app.zip" download="SDOP_app.zip"> */}
        <a href={require("../../appCode/test_mareep.png")} download="test_mareep">
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
    </div>
  );
}

export default Download;