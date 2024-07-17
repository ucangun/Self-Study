import React, { useState } from "react";
import { doctorData, hastaData } from "../helper/Data";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";

const Home = () => {
  const [doktorlar, setDoktorlar] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);
  const [tikla, setTikla] = useState(true);

  const doctorClick = (id) => {
    //tıkla yı değiştir

    setTikla(!tikla);
    //doktorlar dizisini tıklanan doktorla tek elemanlı yap

    setDoktorlar(tikla ? doktorlar.filter((doc) => doc.id === id) : doctorData);
  };

  return (
    <div>
      <div>
        <header className="header">
          <h1>HOSPITAL</h1>

          <div className="dr">
            {doktorlar.map((doc) => (
              <div key={doc.id}>
                <img
                  src={doc.doctorImg}
                  alt={doc.doctorName}
                  width="180px"
                  height="150px"
                  className="btn"
                  style={{ backgroundColor: tikla ? "aqua" : "lightgreen" }}
                  onClick={() => doctorClick(doc.id)}
                />
                <h4
                  style={{
                    backgroundColor: tikla ? "aqua" : "lightgreen",
                    borderLeft: `10px solid ${tikla ? "blue" : "green"}`,
                  }}
                >
                  {doc.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>
        {!tikla && <HastaEkle hastalar={hastalar} setHastalar={setHastalar} />}
      </div>
      {tikla && (
        <HastaListe
          hastalar={hastalar}
          setHastalar={setHastalar}
          doktorlar={doktorlar}
          setDoktorlar={setDoktorlar}
        />
      )}
    </div>
  );
};

export default Home;
