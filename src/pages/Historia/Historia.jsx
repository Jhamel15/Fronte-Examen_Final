import "./Historia.css";

function Historia() {
  return (
    <div className="historia-page">
      <section className="historia-hero">
        <h1>Historia del Colegio Carlos Medinaceli</h1>
        <p>
          Unidad educativa ubicada en la ciudad de Potosí, Bolivia, reconocida
          por su aporte a la formación de estudiantes con valores, disciplina y
          compromiso con la sociedad.
        </p>
      </section>

      <section className="historia-content">
        <div className="historia-card">
          <h2>Nuestra historia</h2>
          <p>
            El Colegio Nacional Mixto Carlos Medinaceli nació como una respuesta
            a la necesidad de fortalecer la educación secundaria en la ciudad de
            Potosí. Desde sus inicios, la institución se destacó por abrir sus
            puertas a jóvenes estudiantes, promoviendo una educación integral y
            participativa.
          </p>
          <p>
            Según reseñas históricas, fue fundado el 11 de marzo de 1959 y
            comenzó sus actividades oficiales el 2 de abril del mismo año, bajo
            la dirección del profesor Tomás Delgadillo.
          </p>
        </div>

        <div className="historia-card">
          <h2>Nombre de la institución</h2>
          <p>
            La unidad educativa lleva el nombre de Carlos Medinaceli, escritor e
            intelectual boliviano relacionado con la vida cultural de Potosí. Su
            legado representa el amor por la literatura, la educación y la
            identidad boliviana.
          </p>
        </div>

        <div className="historia-card">
          <h2>Misión</h2>
          <p>
            Brindar una educación de calidad, formando estudiantes responsables,
            críticos, participativos y comprometidos con el desarrollo de su
            comunidad y del país.
          </p>
        </div>

        <div className="historia-card">
          <h2>Visión</h2>
          <p>
            Ser una institución educativa reconocida por su excelencia académica,
            sus valores humanos y su compromiso con la formación integral de la
            juventud potosina.
          </p>
        </div>

        <div className="historia-card valores">
          <h2>Valores institucionales</h2>
          <div className="valores-grid">
            <span>Respeto</span>
            <span>Responsabilidad</span>
            <span>Disciplina</span>
            <span>Solidaridad</span>
            <span>Honestidad</span>
            <span>Compromiso</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Historia;