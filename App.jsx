function Header() {
  return <header></header>;
}

function Button(props) {
  /* 
  Esse componente pode receber algumas propriedades
  <button>Nome do botão</button>
  O corpo do elemento, no React é chamado de elemento filho
  ou melhor dizendo, de children que é um atributo dentro do objeto props
   */
  return <button>{props.children}</button>;
}

function App() {
  return (
    /* React.Fragment é um conceito para eu englobar mais de um elemento no 
    retorno do meu componente */
    <React.Fragment>
      <Header />
      <Button>Entrar</Button>{" "}
      {/* Button é pai e o corpo desse componente é filho */}
      <Button>Sair</Button>
      {/* Vou criar um botao com o Corpo 'Sair'
      Assim, eu estou passando um filho para o componente Button
      e dentro desse componente eu consigo recuperar o valor e usar como o nome
      do meu botão
       */}
      <Button>Curtir</Button>
      <Button>Amei</Button>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
/* Função render, responsavel pela renderização das 'coisas'
na minha pagina, nessa funcao render, o primeiro parametro é o conteudo que 
quero exibir, no caso vou exibir o componente <App /> e o segundo parametro
é onde eu vou exibir, em qual parte do html, qual o id que vou procurar
nesse caso vou procurar algum elemento do meu HTML com o id root
 */
