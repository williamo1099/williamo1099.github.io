// STYLING
import "bootstrap/dist/css/bootstrap.css";
import "App.css";
import "scss/custom.scss";

// COMPONENTS
import NavigationBar from "./components/NavigationBar";

// ROUTES
import createRoutes from "./routes/Routes";

function App() {
  // Create the route through views.
  const routes = createRoutes();

  return (
    <div>
      <NavigationBar />
      {routes}
    </div>
  );
}

export default App;
