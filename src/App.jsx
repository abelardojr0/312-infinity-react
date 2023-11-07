import perfil from "./assets/perfil.png"
function App() {
  return (
    <>
     <main >
      <div className="header">
      <img src={perfil}/>
      <div className="dados_header">
          <h1>Abelardo Júnior</h1>
          <p>Desenvolvedor FullStack</p>
          <img/>
        </div>
      </div>
        <ul className="dados_pessoais">
          <li>Fortaleza-CE</li>
          <li>28 Anos</li>
          <li>(85) 99999-9999</li>
          <li>teste.teste@gmail.com</li>
        </ul>
        <div className="apresentacao_pessoal">
          <h1 className="titulo">Sobre</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem recusandae, amet itaque neque corporis nostrum, fugiat, doloremque fuga animi porro? Excepturi optio aperiam nam distinctio quod! Delectus, porro autem.</p>
        </div>
        <h1 className="titulo">Experiências</h1>
        <div className="experiencias">
          <div className="experiencia">
            <h2>Desenvolvedor Front-End</h2>
            <span>SENAI</span>
            <p>06/2023 - Atual</p>
          </div>
          <div className="experiencia">
            <h2>Professor FullStack</h2>
            <span>Infinity School</span>
            <p>06/2023 - Atual</p>
          </div>
          <div className="experiencia">
            <h2>Desenvolvedor Front-End</h2>
            <span>GoUspan Digital</span>
            <p>06/2023 - 07/2023</p>
          </div>
          <div className="experiencia">
            <h2>Desenvolvedor Front-End</h2>
            <span>Sou Júnior</span>
            <p>01/2023 - 06/2023</p>
          </div>
        </div>


    </main>

    </>
  )
}

export default App
