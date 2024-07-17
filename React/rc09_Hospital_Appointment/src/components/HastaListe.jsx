import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const HastaListe = ({ hastalar, setHastalar, doktorlar }) => {
  return (
    <div>
      {hastalar.map((hasta) => (
        <div key={hasta.id}>
          {doktorlar.map(
            (a) =>
              a.doctorName === hasta.myDoctor && (
                <div
                  className={hasta.isDone ? "trueStil" : "falseStyle"}
                  onDoubleClick={() =>
                    setHastalar(
                      hastalar.map((h) =>
                        h.id === hasta.id ? { ...h, isDone: !h.isDone } : h
                      )
                    )
                  }
                  key={a.doctorName}
                >
                  <div>
                    <h2>{hasta.text}</h2>
                    <h4>{hasta.day}</h4>
                    <h3>{hasta.myDoctor}</h3>
                  </div>
                  <div>
                    <FaTimesCircle
                      style={{ color: "red" }}
                      onClick={() =>
                        setHastalar(hastalar.filter((h) => h.id !== hasta.id))
                      }
                    />
                  </div>
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default HastaListe;
