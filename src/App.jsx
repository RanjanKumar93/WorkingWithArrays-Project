import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [nIndex, setNIndex] = useState(0);

  const hC = (e) => {
    setInput(e.target.value);
  };

  const hC2 = () => {
    setIsChange(true);
  };
  let p;
  let n;
  const hcg = (inpoo) => {
    p = array[inpoo];
    n = array.filter((x) => x !== array[inpoo]);
    n.splice(nIndex, 0, p);
    setArray(n);
    setIsChange(false);
  };
  const hS = (e) => {
    e.preventDefault();
    setArray([...array, input]);
    setInput("");
  };
  const hjjk = (e) => {
    setNIndex(e.target.value);
  };
  return (
    <>
      <form onSubmit={hS}>
        <section>
          <label htmlFor="inputItems">Input array Items: </label>
          <input name="inputItems" onChange={hC} value={input} />
          <button type="submit">Submit</button>
        </section>
      </form>
      <section>
        {array.map((x, i) => (
          <span style={{ margin: "10px" }} key={i}>
            <span>{x} </span>
            <span>({i}) </span>
            <button onClick={hC2}>changeIndex</button>
            {isChange && (
              <>
                <input value={nIndex} onChange={hjjk} />
                <button onClick={() => hcg(i)}>Submit</button>
              </>
            )}
          </span>
        ))}
      </section>
    </>
  );
}

export default App;
