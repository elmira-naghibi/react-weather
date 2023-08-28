import React from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

function App() {
  return (
    <div>
      <Route
        exact={true}
        path="/"
        render={() => (
          <div className="App">
            <Weather city="lisbon" />
          </div>
        )}
      />
      <Route
        exact={true}
        path="/paris"
        render={() => (
          <div className="App">
            <Weather city="Paris" />
          </div>
        )}
      />
      <Route
        exact={true}
        path="/sydney"
        render={() => (
          <div className="App">
            <Weather city="Sydney" />
          </div>
        )}
      />
      <Route
        exact={true}
        path="/san-francisco"
        render={() => (
          <div className="App">
            <Weather city="San Francisco" />
          </div>
        )}
      />
    </div>
  );
}

export default App;
