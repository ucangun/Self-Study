import React, { useState } from "react";
import { doctorData, hastaData } from "../helper/Data";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";

const Home = () => {
  const [doktorlar, setDoktorlar] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);
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
                  style={{ backgroundColor: "aqua" }}
                />
                <h4
                  style={{
                    backgroundColor: "aqua",
                    borderLeft: "10px solid blue",
                  }}
                >
                  {doc.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>
        <HastaEkle hastalar={hastalar} setHastalar={setHastalar} />
      </div>
      <HastaListe
        hastalar={hastalar}
        setHastalar={setHastalar}
        doktorlar={doktorlar}
        setDoktorlar={setDoktorlar}
      />
    </div>
  );
};

export default Home;
