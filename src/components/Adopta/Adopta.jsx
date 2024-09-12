import "./Adopta.css";

const Adopta = () => {
  return (
    <div className="div-padre">
      <img className="img-a" src="/src/assets/AdoptaImg/Rectangle 47.png" alt="imgRectangle" />
      <section className="img-b-container">
        <img className="img-b" src="/src/assets/AdoptaImg/image 2.png" alt="ImgPerrito" />
        <h2>
          Encontrá a tu mejor <br /> amigo
        </h2>
      </section>
      <img className="img-c" src="/src/assets/AdoptaImg/Rectangle 47.png" alt="imgRectangle" />
      <section className="section-mascota">
        <h2 className="h2-mascota">
          Cual va a ser tu <br /> futura <span>mascota</span>?
        </h2>
      </section>
      <section className="section-mascota2">
        <div className="section-p"><p>Perros</p></div>
        <div className="section-p"><p>Gatos</p></div>
      
      </section>
    </div>
  );
};

export default Adopta;
