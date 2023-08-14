import { Fade, AttentionSeeker } from "react-awesome-reveal";

// STYLING
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// COMPONENTS
import PageHeader from "../components/PageHeader";

function AboutMe() {
  return (
    <Fade>
      <div className="container-fluid one-page">
        <PageHeader title="Know More About Me" />

        <div className="container w-75 my-3">
          <h5 className="h5 my-2">
            Ever since I was a kid, I was always fascinated by how my dad's
            computer could be really <em>smart</em> and curious about how people
            made it that <em>smart</em>. Long story short, I made it as a
            bachelor majoring in computer science at Parahyangan Catholic
            University. There I learnt a lot of new things about programming, a
            way of making a computer <em>smart</em>. I built a number of
            softwares and applications for several objectives. In addition, I
            learnt a few about data science. Therefore for my thesis, I built a
            software for clustering a bunch of documents by content using a
            clustering algorithm.
          </h5>

          <h5 className="h5 my-2">
            &hellip;And it did <em>not</em> stop there. I continue learning a
            lot of new stuffs that was never learnt during my college years.
            Over time, I learn and everytime I finish learning about one thing,
            I always build a new personal project as a pass for myself. Along
            with that, I always keep my codes <em>clean</em> and organized as
            well as safely store them in my GitHub. Well, that's all for this
            little story about me as a&nbsp;
            <span className="text-primary">junior programmer</span> and how it
            all started. And I hope this is going to be a new and fun beginning
            to my journey as a programmer.
          </h5>

          <AttentionSeeker effect="pulse">
            <div className="text-center h2 my-2">
              <a href="https://linkedin.com/in/williamo1099">
                <i class="bi bi-linkedin px-2" />
              </a>
              <a href="https://github.com/williamo1099">
                <i class="bi bi-github px-2" />
              </a>
            </div>
          </AttentionSeeker>
        </div>
      </div>
    </Fade>
  );
}

export default AboutMe;
