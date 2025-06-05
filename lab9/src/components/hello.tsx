import React from 'react';


type HelloProps = {
  name?: string; 
};


const Hello: React.FC<HelloProps> = ({ name }) => {
  const greeting = `Hello ${name || 'World'}`;
  return <h1>{greeting}</h1>;
};

export default Hello;
