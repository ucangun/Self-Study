const Message = ({ isim, telefon }) => {
  return (
    <div style={{ color: "red" }}>
      <h1>Merhaba benim adim {isim}</h1>
      <h2>telefon numaram {telefon}</h2>
    </div>
  );
};

export default Message;
