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
    </div>
  );
}

export default Download;