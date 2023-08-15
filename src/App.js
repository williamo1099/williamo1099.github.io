// STYLING
import "bootstrap/dist/css/bootstrap.css";
import "scss/custom.scss";

import "App.css";

// COMPONENTS
import NavigationBar from "components/NavigationBar";

// ROUTES
import createRoutes from "routes/Routes";

function App() {
  // Create the route through views.
  const routes = createRoutes();

  return (
    <div className="vh-100 bg-primary">
      <NavigationBar />
      {routes}
    </div>
  );
}

export default App;
