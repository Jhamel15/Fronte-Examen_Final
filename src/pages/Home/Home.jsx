import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="section-title">HISTORIA</div>

      <div className="history-content">
        <h1>ANTECEDENTES HISTÓRICOS</h1>

        <img
          src="/src/assets/images/fundador.png"
          alt="Carlos Medinaceli"
          className="founder-img"
        />

        <h2>
          COLEGIO NACIONAL MIXTO <br />
          CARLOS MEDINACELI <br />
          FUNDADO EL 2 DE ABRIL DE 1952
        </h2>

        <p>
          El Colegio Nacional Mixto Carlos Medinaceli fue fundado el 2 de abril
          de 1952 en la ciudad de Potosí, Bolivia. Desde sus inicios, ha sido
          una institución dedicada a la formación académica, cultural y humana
          de la juventud potosina.
        </p>

        <p>
          El nombre del colegio rinde homenaje a Carlos Medinaceli, destacado
          escritor, intelectual y educador boliviano, reconocido por su aporte a
          la literatura nacional y a la formación del pensamiento crítico en
          Bolivia.
        </p>

        <p>
          A lo largo de los años, el colegio se ha caracterizado por promover la
          disciplina, la responsabilidad, el respeto y el compromiso con la
          sociedad. Sus aulas han formado generaciones de estudiantes que
          contribuyen al desarrollo de Potosí y del país.
        </p>

        <div className="gold-box">
          <h3>BODAS DE ORO</h3>
          <p>
            La institución celebra con orgullo sus años de servicio educativo,
            manteniendo viva su historia, sus valores y su compromiso con la
            educación.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;