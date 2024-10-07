const SpacingSizing = () => {
  return (
    <div>
      <h3>Spacing and Sizing</h3>
      <div>
        <button className="bg-blue-500 text-white inline-block m-1 px-4 py-1 rounded-md ">
          Tikla
        </button>
        <button className="bg-blue-500 text-white ml-1 p-4 ">Tikla</button>
        <button className="bg-blue-500 text-white ml-2 p-4  ">Tikla</button>
        <button className="bg-blue-500 text-white mx-1 my-2 px-4 py-2  ">
          Tikla
        </button>
      </div>
      <div>
        <button className="bg-blue-500 text-white inline-block m-1 p-4 border border-red-500 rounded-md ">
          Tikla
        </button>
        <button className="bg-blue-500 text-white ml-1 p-4 border-[4px] border-red-500 rounded-[1rem] ">
          Tikla
        </button>
        <button className="bg-blue-500 text-white m-1 p-4 h-20 w-20 rounded-full border-[5px] border-red-600 ">
          Tikla
        </button>
        <button className="bg-blue-500 text-white mx-1 my-2 px-4 py-2 hover:bg-slate-700 rounded-md transition-all duration-700  ">
          Tikla
        </button>
      </div>
    </div>
  );
};

export default SpacingSizing;
