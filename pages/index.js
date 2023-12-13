import { useState } from 'react';
import Pessoa from '../components/Pessoa';
import comAutorizacao from '@/hoc/comAutorizacao';

function Home() {
  var [idadeYara, setIdadeYara] = useState(15);
  const pessoas = [
    {
      nomePessoa: 'Camila',
      idadePessoa: 27
    },
    {
      nomePessoa: 'Felipe',
      idadePessoa: 32
    },
    {
      nomePessoa: 'Ricardo',
      idadePessoa: 35
    }
  ];

  const incrementaIdadeYara = () => {
    setIdadeYara(++idadeYara);
  }

  return (
    <>
      <h1>Olá Mundo! Projeto novo na área! {process.env.NEXT_PUBLIC_TESTE}</h1>
      <Pessoa nome='Yara' idade={idadeYara} />
      <Pessoa nome='Rafa' idade={32} />

      {pessoas.map(({ nomePessoa, idadePessoa }, index) => {
        return <Pessoa 
          nome={nomePessoa} 
          idade={idadePessoa}
          key={index}
        />
      })}

      <button onClick={incrementaIdadeYara}>Incrementa a idade da Yara</button>
    </>
  )
}

export default comAutorizacao(Home);