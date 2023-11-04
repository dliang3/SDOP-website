import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div style={{ height: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginBottom: '20px'}}>Sorry </h2>
      <p>That page cannot be found. </p>
      <Link to="/">Back to Home.</Link>
    </div>
  );
}

export default NotFound;