import { useState } from "react";
import uuid from "react-uuid";

const HastaEkle = ({ hastalar, setHastalar, doktorlar, tikla }) => {
  const [hastaName, setHastaName] = useState("");
  const [hastaTarih, setTarih] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setHastalar([
      ...hastalar,
      {
        id: uuid(),
        text: hastaName,
        day: hastaTarih,
        isDone: false,
        myDoctor: doktorlar[0].doctorName,
      },
    ]);

    // setHastalar a gidildiğinde hemen altta console.log varsa çalışıverir ve biz useState nin yaptığı işi göremeyiz. bunun için log bu submit fonksiyonunun dışında olmalı.

    setHastaName("");
    setTarih("");
    // submit sonrası inputlardan value temizlemek için, hem üstteki işlemler yapılır, hemde inputlarda value={isim} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formControl">
          <label htmlFor="text">Hasta Bilgileri</label>
          <input
            type="text"
            id="text"
            value={hastaName}
            onChange={(e) => setHastaName(e.target.value)}
          />
        </div>

        <div className="formControl">
          <label htmlFor="day">Day & Time</label>
          <input
            type="datetime-local"
            id="day"
            value={hastaTarih}
            onChange={(e) => setTarih(e.target.value)}
          />
        </div>

        <button type="submit" className="kayit btn-submit">
          <span style={{ color: "#6a0707" }}>{doktorlar[0].doctorName}</span>{" "}
          icin kayit olustur
        </button>
      </form>
    </div>
  );
};

export default HastaEkle;
