import { useEffect } from "react";
import "./Info.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Info = () => {
    useEffect(() => {
        document.body.classList.add("body-info-page");

        return () => {
            document.body.classList.remove("body-info-page");
        };
    }, []);

    return(
        <div className="container">
            <section className="apresentacao">
                <div className="titulo">
                    <img alt="Foto do usuario"></img>
                    <h2>“Criando soluções robustas que conectam software, hardware e confiabilidade.”</h2>
                    <p>Links para GitHub, LinkedIn e e-mail</p>
                    <a href="https://github.com/Dev-Pedro-Padilha" target="_blank" rel="noopener noreferrer" className="btn-github">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/pedro-padilha-48030316a/" target="_blank" rel="noopener noreferrer" className="btn-github">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    
                </div>
                <div className="desenvolvimento">
                    <h1>Sobre Mim</h1>
                    <p>
                        Sou desenvolvedor de software com forte atuação em projetos de automação industrial, testes de hardware e desenvolvimento de sistemas internos, com foco em qualidade e confiabilidade de produtos. Tenho experiência prática em backend e frontend, com destaque para desenvolvimento de APIs REST utilizando Django e NestJS, além de interfaces modernas com React.
                        Trabalho no setor de Engenharia da Confiabilidade e Qualidade, onde desenvolvo soluções que integram hardware e software para testes de placas, subconjuntos e equipamentos industriais. Tenho sólida vivência com banco de dados SQL Server, integração com sistemas legados, uso de JWT para autenticação, e automação de pipelines de CI/CD com Azure DevOps.
                        Sou autodidata, colaborativo e orientado à resolução de problemas reais. Em meus projetos, costumo assumir responsabilidades amplas, desde levantamento de requisitos até documentação técnica e suporte à operação.
                    </p>
                </div>
                <div className="stacks">
                    <h2>Stack Tecnologica</h2>
                    <p>Django, React, NestJS, SQL Server, Azure DevOps, C#, Windows Forms, JWT, Emgu CV, LabVIEW (legado)</p>
                </div>
            </section>
        </div>
    )
}
export default Info;
