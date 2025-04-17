import "./App.css"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const projects = [
  {
    title: "Sistema de Visualização de Produção",
    techs: ["Django", "SQL Server"],
    link: "https://github.com/Dev-Pedro-Padilha/ViewProducao",
  },
  {
    title: "Projeto para a cadeira DAOC",
    techs: ["LARAVEL", "PHP", "MYSQL"],
    link: "https://github.com/Dev-Pedro-Padilha/DAOC",
  },
  {
    title: "Tela de Login e Home com Flutter",
    techs: ["Flutter", "Dart", "HTML"],
    link: "https://github.com/Dev-Pedro-Padilha/login-flutter",
  },
]

export default function Portfolio() {
  return (
    <div className="container-with-sidebar">
      <Sidebar />
      <main className="main-content">
        <Header />

        <section className="projects">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h2>{project.title}</h2>
              <ul>
                {project.techs.map((tech, idx) => (
                  <li key={idx}>• {tech}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button>Ver no GitHub</button>
              </a>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
