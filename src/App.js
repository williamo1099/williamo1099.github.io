// STYLING
import "bootstrap/dist/css/bootstrap.css";

// COMPONENT
import createRoutes from "./routes/Routes";
import Header from "./components/Header";

function App() {
  const routes = createRoutes();

  return (
    <div className="vh-100">
      <Header />
      {routes}
    </div>
  );
}

export default App;
