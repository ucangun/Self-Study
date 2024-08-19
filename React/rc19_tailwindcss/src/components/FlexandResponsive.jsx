import React from "react";

const FlexandResponsive = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-wrap ">
        <div className="bg-red-100 basis-1/4 ">1</div>
        <div className="bg-red-200 basis-1/4 ">2</div>
        <div className="bg-red-300 basis-1/4">3</div>
        <div className="bg-red-400 basis-1/4">4</div>
        <div className="bg-red-500 basis-2/4">5</div>
        <div className="bg-red-600 basis-2/4">6</div>
      </div>

      <h3 className="mb-8">Grid</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="bg-red-100  ">1</div>
        <div className="bg-red-200  ">2</div>
        <div className="bg-red-300 ">3</div>
        <div className="bg-red-400 ">4</div>
        <div className="bg-red-500 ">5</div>
        <div className="bg-red-600 ">6</div>
      </div>

      <h1 className="m-8">Grid - Layer Components </h1>

      <div className="responsive-grid ">
        <div className="bg-red-100  ">1</div>
        <div className="bg-red-200  ">2</div>
        <div className="bg-red-300 ">3</div>
        <div className="bg-red-400 ">4</div>
        <div className="bg-red-500 ">5</div>
        <div className="bg-red-600 ">6</div>
      </div>

      <h1 className="m-8">Config </h1>

      <div className="bg-primary dark:bg-slate-500">
        <div className="dark:text-white dark:text-2xl">1</div>
        <div className="bg-blue-950 m-4">2</div>
        <div className=" ">3</div>
        <div className=" ">4</div>
        <div className=" ">5</div>
        <div className=" ">6</div>
      </div>
    </div>
  );
};

export default FlexandResponsive;
