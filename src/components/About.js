export default function About(props) {
  const aboutJsStyle = {
    backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "dark" ? "Aqua" : "black",
  };
  return (
    <div className="container py-3" style={aboutJsStyle}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={aboutJsStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Developed By
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={aboutJsStyle}>
              <strong>Harshavardhan</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={aboutJsStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Technologies Used
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={aboutJsStyle}>
              <strong>HTML5 CSS3 </strong>
              <br />
              <strong>React.Js</strong>
              <br />
              <strong>Node.Js</strong>
              <br />
              <strong>BootStrap CDN</strong>
              <br />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={aboutJsStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How It's Made
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={aboutJsStyle}>
              <strong>
                This application is built using reusable components such as
                Navbar.js, TextForm.js, About.js, and Alert.js. It leverages
                React's props and state variables to manage data flow and user
                interactions smoothly. The components are rendered dynamically
                using React Router for a seamless user experience.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
