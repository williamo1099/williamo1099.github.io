import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function NavigationBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto">
            {/* Home */}
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>

            {/* About Me */}
            <li class="nav-item active">
              <a class="nav-link" href="#">
                About
              </a>
            </li>

            {/* Skills */}
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Skills
              </a>
            </li>

            {/* Portfolio */}
            <li class="nav-item">
              <a class="nav-link" href="#">
                Portfolio
              </a>
            </li>

            {/* Contact */}
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/*  */}
      </nav>
    </>
  );
}

export default NavigationBar;
