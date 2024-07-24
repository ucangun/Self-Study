import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CardDetails = () => {
  const navigate = useNavigate();

  const {
    state: { data },
  } = useLocation();
  return (
    <div className="container text-center mt-4">
      <div>
        <h3>{data.name}</h3>
        <img src={data.img} alt="logo" width="400px" />
        <h3 className="mt-4">{data.text}</h3>
        <h4 className="text-danger">{data.yorum}</h4>
      </div>
      <div>
        <button onClick={() => navigate(-1)} className="btn btn-primary">
          GO BACK
        </button>
        <button onClick={() => navigate("/")} className="btn btn-warning">
          GO HOME
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
