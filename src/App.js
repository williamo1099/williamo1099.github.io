// STYLING
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// COMPONENT
import createRoutes from "./routes/Routes";
import Header from "./components/Header";

function App() {
  const routes = createRoutes();

  return (
    <div className="overflow-hidden">
      <Header />
      {routes}
    </div>
  );
}

export default App;
