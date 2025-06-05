import React, { useState } from 'react';


type GoodbyeProps = {
  name: string;
};

const Goodbye: React.FC<GoodbyeProps> = ({ name }) => {
  const [txtColor, setTxtColor] = useState('blue');

  const changeColor = () => setTxtColor('red');
  const revertColor = () => setTxtColor('blue');

  return (
    <>
      <h1
        onMouseEnter={changeColor}
        onMouseLeave={revertColor}
        style={{ color: txtColor }}
      >
        Goodbye {name}
      </h1>
      <h2>Current colour is: {txtColor}</h2>
    </>
  );
};

export default Goodbye;
