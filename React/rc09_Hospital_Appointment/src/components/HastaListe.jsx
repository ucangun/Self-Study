import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const HastaListe = ({ hastalar, setHastalar, doktorlar }) => {
  return (
    <div>
      {hastalar.map((hasta) => (
        <div key={hasta.id}>
          <div>
            <div>
              <h2>{hasta.text}</h2>
              <h4>{hasta.day}</h4>
              <h3>{hasta.myDoctor}</h3>
            </div>
            <div>
              <FaTimesCircle style={{ color: "red" }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HastaListe;
