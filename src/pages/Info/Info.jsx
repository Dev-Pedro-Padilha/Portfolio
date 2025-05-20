import { useEffect } from "react";
import "./Info.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faPython, faReact, faNodeJs, faMicrosoft, faJs, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faKey, faCode, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import perfil from '../../assets/perfil.png';


const Info = () => {
    useEffect(() => {
        document.body.classList.add("body-info-page");

        return () => {
            document.body.classList.remove("body-info-page");
        };
    }, []);

    return(
        <div className="container">
            <motion.div initial={{ opacity: 0, y: 30}} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.6 }}>
                <section className="apresentacao">
                    <div className="perfil">
                        <img src={perfil} alt="Foto do usuario" className="foto-perfil"></img>
                        <h1 className="nome">Pedro Gabriel Nunes Padilha</h1>
                        <h2 className="cargo">Desenvolvedor de Software - Cachoeirinha/RS</h2>
                        <div className="social-icons">
                            <a href="https://github.com/Dev-Pedro-Padilha" target="_blank" rel="noopener noreferrer" className="icon">
                                <FontAwesomeIcon icon={faGithub} size="4x" />
                            </a>
                            <a href="https://www.linkedin.com/in/pedro-padilha-48030316a/" target="_blank" rel="noopener noreferrer" className="icon">
                                <FontAwesomeIcon icon={faLinkedin} size="4x" />
                            </a>
                        </div>
                    </div>
                    <div className="desenvolvimento">
                        <h1 className="titulo-h1">Sobre Mim</h1>
                        <div className="desenvolvimento-texto">
                            <div className="card">
                                <p>
                                    Sou desenvolvedor de software com forte atuação em projetos de automação industrial, testes de hardware e desenvolvimento de sistemas internos, com foco em qualidade e confiabilidade de produtos. Tenho experiência prática em backend e frontend, com destaque para desenvolvimento de APIs REST utilizando Django e NestJS, além de interfaces modernas com React.
                                    Trabalho no setor de Engenharia da Confiabilidade e Qualidade, onde desenvolvo soluções que integram hardware e software para testes de placas, subconjuntos e equipamentos industriais. Tenho sólida vivência com banco de dados SQL Server, integração com sistemas legados, uso de JWT para autenticação, e automação de pipelines de CI/CD com Azure DevOps.
                                    Sou autodidata, colaborativo e orientado à resolução de problemas reais. Em meus projetos, costumo assumir responsabilidades amplas, desde levantamento de requisitos até documentação técnica e suporte à operação.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="stacks">
                        <h1 className="titulo-h1">Stack Tecnologica</h1>
                        <p>
                            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="icon">
                                <FontAwesomeIcon icon={faPython} size="4x" />
                            </a>
                            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="icon">
                                <FontAwesomeIcon icon={faReact} size="4x" />
                            </a>
                            <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer" className="icon">
                                <FontAwesomeIcon icon={faNodeJs} size="4x" />
                            </a>
                            <a href="https://dotnet.microsoft.com/pt-br/languages/csharp" target="_blank" rel="noopener noreferrer" className="icon">
                                <FontAwesomeIcon icon={faMicrosoft} size="4x" />
                            </a>
                            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="icon">
                                <FontAwesomeIcon icon={faJs} size="4x" />
                            </a>
                            <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="icon">
                                <FontAwesomeIcon icon={faHtml5} size="4x" />
                            </a>
                            <a href="https://www.microsoft.com/pt-br/sql-server" target="_blank" rel="noopener noreferrer" className="icon">
                                <FontAwesomeIcon icon={faDatabase} size="4x" />
                            </a>
                            <a href="https://docs.nestjs.com/security/authentication" target="_blank" rel="noopener noreferrer" className="icon">
                                <FontAwesomeIcon icon={faKey} size="4x" />
                            </a>
                        </p>
                    </div>
                    <div className="experiences">
                        <h1 className="titulo-h1">Experiência Profissional</h1>
                        <div className="card">
                            <ul>
                                <li>
                                    <strong>Perto SA - Desenvolvedor de Software</strong>
                                    <p>
                                        Desenvolvimento de aplicações para testar o hardware e firmware desenvolvidos pela empresa, garantindo a qualidade e confiabilidade dos produtos.
                                        Manter todo o sistema de produção da empresa.
                                        Desenvolvendo um sistema para substituir o sistema legado da empresa.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    )
}
export default Info;
