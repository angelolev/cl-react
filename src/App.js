import React from "react";
import "./styles.scss";
import Layout from "./components/Layout";
import CourseCard from "./components/CourseCard";
import JoinUs from "./components/JoinUs";
import Intro from "./components/Intro";

function App() {
  const courses = [
    {
      id: 0,
      image: "web-dev.png",
      title: "Curso de diseño y desarrollo web",
      description:
        "Aprende desde cero, cómo crear un sitio web utilizando HTML y CSS.",
      link: "https://forms.gle/iTzZGiZTst71CCwU7",
    },
    {
      id: 1,
      image: "responsive-design.png",
      title: "Curso de Responsive Design",
      description:
        "Aprende a hacer que tu sitio web se adapte a cualquier dispositivo o resolución",
      link: "https://forms.gle/ANFfLjsGAWmeERQJ8",
    },
    {
      id: 2,
      image: "javascript.png",
      title: "Fundamentos de Javascript",
      description:
        "Aprende las bases del lenguaje más popular y demandado del momento",
      link: "https://forms.gle/1fcuyD6BtJ5WpoqU9",
    },
  ];

  return (
    <Layout>
      <main>
        <Intro />
        <div className="courses">
          <div className="courses__content">
            <div class="courses__intro">
              <h2 id="description">¿Qué es lo que hacemos?</h2>
              <p>
                Compartimos conocimiento(talleres, workshops, cursos, etc)
                apoyando a los profesionales que inician en el mundo del
                desarrollo web.
              </p>
            </div>
            {courses.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </div>
        </div>
        <section className="banner" id="join">
          <h2>¿Cómo me uno?</h2>
          <p>En Coding Latam tienes 2 maneras de ser parte de la comunidad:</p>
          <JoinUs />
        </section>
      </main>
    </Layout>
  );
}

export default App;
