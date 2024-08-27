
const Counter = () => {




  return (
    <div className="app">
      <h2 className="counter-header"> Counter with Redux</h2>
      <h1>{} </h1>
      <h2>{} </h2>
      <div>
        <button
          className="counter-button positive"
       
        >
          ARTTIR
        </button>

        <button className='counter-button zero'
>RESET</button>
<button className='counter-button negative'
>AZALT</button>
      </div>
    </div>
  );
}

export default Counter