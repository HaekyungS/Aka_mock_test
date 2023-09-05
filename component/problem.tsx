interface problems {
  number: String;
  problem: String;
  ex: Array<String>;
}

export const Ex = (problem: problems) => {
  const exNum = [];
  for (let i = 0; i < problem.ex.length; i++) {
    const random = Math.floor(Math.random() * problem.ex.length);
    if (exNum.find((e) => e === random)) {
      i--;
    } else {
      exNum.push(random);
    }
  }
  console.log(exNum);

  return (
    <>
      <div>{problem.number}</div>
      <div>{problem.problem}</div>
      <ol>
        {exNum.map((e, index) => {
          return <li key={index}>{problem.ex[e]}</li>;
        })}
      </ol>
    </>
  );
};
