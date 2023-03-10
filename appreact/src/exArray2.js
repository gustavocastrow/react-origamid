import React from 'react';

const App = () => {
  const produtos = ['Notebook', 'Tablet', 'Smartphone'];

  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  
  return (
    <React.Fragment>
      <ul>
        {produtos.map((produto) => (
          <li key={produto}> {produto} </li>
        ))}
      </ul>

      <ul>
        {livros
          .filter(({ano}) => ano >= 1998)
          .map(({nome, ano}) => (
          <li key={nome}> 
            {nome}, 
            {ano}
          </li>
        ))}

      </ul>

      

    </React.Fragment>
  )
}

export default App