import './App.css'

function App() {
  return (
    <main className="resume">
      <header className="resume-header">
        <div>
          <p className="eyebrow">Currículo</p>
          <h1>José Thiago Ferreira Oliveira</h1>
          <p className="subtitle">Desenvolvedor Front-end | React, Vite, Tailwind CSS</p>
        </div>

        <section className="contact-card">
          <p><strong>Email:</strong> thiagofereeiraoliveira@gmail.com</p>
          <p><strong>Telefone:</strong> (83) 99109-9808</p>
          <p><strong>Localização:</strong> Paraíba, Brasil</p>
          <p><strong>Web:</strong> linkedin.com/in/seunome</p>
          <p><strong>GitHub:</strong> <a href='https://github.com/Azrael-Lotus'>github.com/Azrael-Lotus</a></p>
        </section>
      </header>

      <section className="section about">
        <h2>Resumo profissional</h2>
        <p>
          Profissional da área de tecnologia com experiência no desenvolvimento de projetos elétricos, atuando em ambientes de laboratório e colaborando bem em equipe. Possui forte habilidade na resolução de problemas, pensamento criativo e facilidade para aprender e se adaptar a novos desafios.
        </p>
      </section>

      <section className="section grid-columns">
        <div className="card">
          <h2>Experiência</h2>

          <article className="experience-item">
            <h3>Aprendiz nato</h3>
            <p className="small">Estágio laboratório Sertão Maker IFPB • 2024-2025 </p>
            <ul>
              <li>Desenvolvimento de projetos elétricos para eventos tecnologicos</li>
              <li>Cerca de 1 ano de experiência em impressão 3D</li>
              <li>Cerca de 1 ano de experiência em manuseio de CNC a laser</li>
            </ul>
          </article>

          <article className="experience-item">
            <h3>Experiência em grupo</h3>
            <p className="small">Estágio laboratório Sertão Maker IFPB • 2024-2025</p>
            <ul>
              <li>Manutenção de máquinas</li>
              <li>Experiência em resolução de problemas</li>
            </ul>
          </article>
        </div>

        <aside className="card sidebar">
          <div>
            <h2>Educação</h2>
            <p className="small">Ensino médio técnico em eletrotécnica</p>
            <p className="small">Universidade Exemplo • 2018 – 2022</p>
          </div>

          <div>
            <h2>Competências</h2>
            <ul className="skills-list">
              <li>impressão 3D</li>
              <li>Programação de Sistemas</li>
              <li>Manuseio de CNC</li>
              <li>Eletrotécnica</li>
              <li>Teatro</li>
            </ul>
          </div>

          <div>
            <h2>Ferramentas</h2>
            <ul className="skills-list">
              <li>Ultimaker Cura</li>
              <li>Figma</li>
              <li>VS Code</li>
              <li>RD works</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default App
