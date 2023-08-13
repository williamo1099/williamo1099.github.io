// STYLING
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// COMPONENT
import createRoutes from "./routes/Routes";
import NavigationBar from "./components/NavigationBar";

function App() {
  const routes = createRoutes();

  return (
    <div>
      <NavigationBar />
      {routes}
    </div>
  );
}

export default App;
