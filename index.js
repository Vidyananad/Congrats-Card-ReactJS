const element = (
  // Write your code here.
  <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="person-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="logo-image"
      />
      <p>Kiran V</p>
      <p>Vishnu Institute of Computer Education and Technology, Bhimavaram.</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="logo-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
