const Greeting = (para) => {
  const show = () => {
    alert(para.uname);
  };
  return (
    <div>
      <h1 style={{}}>
        hi {para.uname} and clg is
        {para.profile.clg}
      </h1>
      <h2 style={{ color: para.color }}> hello </h2>
      <button onClick={show}> submit</button>
    </div>
  );
};
export default Greeting;
