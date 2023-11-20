import "./Home.css"
import "../../components/buttons.css"
import appHomepage from "../../images/demoScreenshot1.png"
import appObjectPage from "../../images/demoScreenshot2.png"
import boxGraphic from "../../images/Graphic-Box.png"

const Home = () => {

  return (
    <div className="home">
      <div className="topRow">
        <div className="topLeft">
          <div className="stickyNote tagLine"> slayifying your development process... </div>
          <div className="topText">
            <p>SDOP stores everything about an object into one file. <br /> </p>
            <p>With a simple interface that allows you to add multiple image files, set attributes and package them all in one file, SDOP is a great option for those wanting an asset organization tool.</p>
          </div>
        </div>
        <div className="boxGraphic">
          <img src={boxGraphic} alt="box graphic"></img>
        </div>
      </div>

      <div className="body">
        <div className="middleText">
          <p>SDOP stores everything about an object into one file. <br /> </p>
          <p>With a simple interface that allows you to add multiple image files, set attributes and package them all in one file, SDOP is a great option for those wanting an asset organization tool.</p>
        </div>
        <div className="imageContainer">
          <img src={appHomepage} alt="application homepage" />
          <img src={appObjectPage} alt="application object page" />
        </div>
        <div className="bottomText">
          <p> Click here to access a tutorial for using the app: <br /> </p>
        </div>

        <button className="mainButton" onClick={() => window.location.href = '/Download'} style={{ marginBottom: '50px' }}>
          App Guide
        </button>

        <div className="bottomText" style={{ borderTop: '1px solid #333' }}>
          <p> We support downloading on Windows, macOS, and Linux. <br /> </p>
        </div>

        <button className="mainButton" onClick={() => window.location.href = '/Download'} >
          Download Here
        </button>
      </div>
    </div>
  );
}

export default Home;