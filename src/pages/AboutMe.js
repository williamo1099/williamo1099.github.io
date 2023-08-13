import { Fade } from "react-awesome-reveal";

// STYLING
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function AboutMe() {
  return (
    <Fade>
      <div className="container-fluid mt-3">
        <div className="text-center">
          <h1>Know More About Me</h1>
        </div>
        <hr />

        <div className="w-50 mx-auto my-3">
          <div className="my-1">
            Ever since I was a kid, I was always fascinated by how my dad's
            computer could be really 'smart' and curious about how people made
            it that 'smart'. Therefore years later, I graduated as a bachelor
            majoring in computer science at Parahyangan Catholic University.
            During my college years, I have a learned a lot about programming
            such as developing OOP softwares and its concepts using Java,
            developing web and mobile softwares, database management, version
            controls and typesetting with LaTeX are well learned. Besides I also
            have an understanding about the basic of data science.
          </div>

          <div className="my-1">
            After graduating from UNPAR, I made a decision of taking a break and
            during this break, I have also learned some new skills toward the
            mobile app development. While I lack of relevant work experience
            yet, I am eager to learn new things and I am highly motivated to
            write clean and well-documented codes. In addition, I have always
            been able to work under pressure and deadlines as well as
            experienced working independently or in a team.
          </div>

          <div className="text-center">
            <a href="https://linkedin.com/in/williamo1099">
              <i class="bi bi-linkedin h3"></i>
            </a>
            &nbsp;&nbsp;
            <a href="https://github.com/williamo1099">
              <i class="bi bi-github h3"></i>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default AboutMe;
