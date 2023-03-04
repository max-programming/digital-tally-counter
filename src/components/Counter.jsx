const Counter = ({ count, increment }) => {
  return (
    <div className='counter' onClick={increment}>
      <div className='circle'>
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default Counter;
