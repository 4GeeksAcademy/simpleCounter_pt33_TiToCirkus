//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

function myCallback() {
  counter++;
  ReactDOM.createRoot(document.getElementById("app")).render(
    <Home seconds={counter} />
  );
}

let intervalID = null;

let counter = 0;

function updateCounter() {
  counter++;
  root.render(<MainComponent />);
}

function reverseCounter() {
  if (counter <= 0) {
    clearInterval(intervalID);
    intervalID = null;
  } else {
    counter--;
  }
  root.render(<MainComponent />);
}

// botones de inicio / detener
const MainComponent = () => {
  return (
    <>
      <Home seconds={counter} />
      <div className="m-3">
        <div className="d-flex justify-content-center">
          <label>Iniciar desde</label>
          <input
            className="ms-1"
            type="number"
            onChange={(event) => {
              counter = event.target.value;
              root.render(<MainComponent />);
            }}
          />
        </div>
        <div className="d-flex my-3 justify-content-center">
          <label>Alerta en </label>
          <input
            className="ms-4"
            type="number"
            onChange={(event) => {
              counter = event.target.value;
              root.render(<MainComponent />);
            }}
          />
        </div>

        <div className="p-2 d-flex gap-2 d-flex justify-content-center">
          {intervalID == null && (
            <button
              onClick={() => {
                intervalID = setInterval(updateCounter, 1000);
              }}
              className="btn btn-success"
            >
              Start
            </button>
          )}

          <button
            onClick={() => {
              clearInterval(intervalID);
              intervalID = null;
              root.render(<MainComponent />);
            }}
            className="btn btn-danger"
          >
            Stop
          </button>

          <button
            onClick={() => {
              if (intervalID) {
                clearInterval(intervalID);
                counter = 0;
                root.render(<MainComponent />);
              } else {
                counter = 0;
                root.render(<MainComponent />);
              }
            }}
            className="btn btn-warning"
          >
            Reset
          </button>

          {intervalID == null && (
            <button
              onClick={() => {
                intervalID = setInterval(reverseCounter, 1000);
              }}
              className="btn btn-success"
            >
              Reverse
            </button>
          )}
        </div>
      </div>
    </>
  );
};

let root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<MainComponent />);
