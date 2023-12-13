import { useState } from 'react';
import Pessoa from '../components/Pessoa';

export default function Home() {
  var [idadeYara, setIdadeYara] = useState(25);

  const incrementaIdadeYara = () => {
    // setIdadeYara(++idadeYara);
    console.log(++idadeYara);
  }

  return (
    <>
      <h1>Olá Mundo! Projeto novo na área!</h1>
      <Pessoa nome='Yara' idade={idadeYara} />
      <Pessoa nome='Rafa' idade={32} />
      <button onClick={incrementaIdadeYara}>Incrementa idade da Yara</button>
    </>
  )
}
