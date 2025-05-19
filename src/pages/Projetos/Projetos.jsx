import "./Projetos.css";
const Projetos = () => {
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
    {
        title: "Este Portfolio",
        techs: ["React", "Vite", "Javascript"],
        link: "https://github.com/Dev-Pedro-Padilha/Portfolio",
    },
    {
        title: "Api Rest com NESTJS",
        techs: ["Node", "Nest", "Typescript"],
        link: "https://github.com/Dev-Pedro-Padilha/api-rest-nestjs",
    },
    ]

    return(
        <div className="container">
            <section className="card-grid">
                {projects.map((project, index) => (
                    <div key={index} className="card-home">
                        <h2>{project.title}</h2>
                        <ul>
                            {project.techs.map((tech, idx) => (
                            <li key={idx}>{tech}</li>
                            ))}
                        </ul>
                        <div className="card-footer">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-footer"
                            >
                                Ver no GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
export default Projetos;
