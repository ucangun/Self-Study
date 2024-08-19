import React from "react";

const HoverandFocus = () => {
  return (
    <div>
      <button className="w-40 bg-slate-400 rounded-md m-4 p-4 text-slate-50 hover:bg-red-200 hover:shadow-lg  transition-all duration-700 hover:text-slate-700 ">
        Save
      </button>
      <input
        type="text"
        placeholder="Focus"
        className="border border-gray-400 rounded-lg px-1 focus:outline-red-600  w-30 focus:w-96 transition-all duration-700  "
      />
      <br />
      <input
        type="email"
        placeholder="Focus"
        className="border border-gray-400 rounded-lg px-1 focus:outline-red-600  w-30 focus:w-96 transition-all duration-700 peer "
      />
      <p className="text-red-600 invisible peer-invalid:visible">invalid</p>
    </div>
  );
};

export default HoverandFocus;
