import { Fade, AttentionSeeker } from "react-awesome-reveal";

// STYLING
import "index.css";

// COMPONENTS
import PageHeader from "components/PageHeader";

// ASSETS
import Anya from "assets/images/sleeping-anya.gif";

function About() {
  return (
    <Fade>
      <div className="container-fluid one-page">
        <PageHeader
          title="Know More About Me"
          subtitle="A little story about me as a programmer."
        />

        <div className="container my-3">
          <img src={Anya} className="img-fluid mx-auto d-block" />

          {/* BIO */}
          <div className="container border-start border-secondary">
            <h5 className="h5 my-2">
              Ever since I was a kid, I was always fascinated by how my dad's
              computer could be really <em>smart</em> and curious about how
              people made it that <em>smart</em>. Long story short, I made it as
              a bachelor majoring in computer science at{" "}
              <a href="https://unpar.ac.id" target="_blank">
                Parahyangan Catholic University
              </a>
              . There I learnt lots of stuffs about programming and how people
              actually make a computer <em>smart</em>. I built a number of
              softwares for many projects and various objectives. Along with
              that, I took a few bit of knowledge about data science. Therefore
              for my thesis, I built a software with an objective of clustering
              a bunch of documents by their contents using a clustering
              algorithm.
            </h5>

            <h5 className="h5 my-2">
              &hellip;And it did <em>not</em> stop there. It continues with me
              learning lots of new stuffs about some of the latest programming
              tools and technologies. Over time I learn and to conclude my study
              about one thing, I build a personal project as a pass for myself.
              Speaking of my programming habits, I always keep my codes{" "}
              <em>clean</em> and organized as well as safely store them in my
              GitHub. Well, that's all for this little story about me as a
              junior programmer and how it all started. And I hope this is going
              to be a new and fun beginning to my journey as a programmer.
            </h5>
          </div>

          {/* SOCIAL */}
          <AttentionSeeker effect="pulse">
            <div className="container text-center my-3">
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/williamo1099" target="_blank">
                <button className="btn btn-secondary btn-lg rounded-0 mx-1">
                  See me on LinkedIn
                </button>
              </a>

              {/* GitHub */}
              <a href="https://github.com/williamo1099" target="_blank">
                <button className="btn btn-secondary btn-lg rounded-0 mx-1">
                  See me on GitHub
                </button>
              </a>
            </div>
          </AttentionSeeker>
        </div>
      </div>
    </Fade>
  );
}

export default About;
