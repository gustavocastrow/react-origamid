import React from 'react';
//import Header from './Header';
//import Footer from './Footer';
//import Form from './Form/Form';

const Titulo = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo texto="Meu Primeiro Título" cor="blue" />
      <Titulo texto="Meu Segundo Título" cor="red" />
    </section>
  );
};

// const App = () => {
//   return(
//     <div>
//       <Header />
//       <Form />
//       <Titulo texto="Minha primeira props" />
//       <Footer />
//     </div>
//   )
// }
export default App;