import {useState} from 'react';

function App(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);
  const [user, setUser] = useState({});
  function handleRegister(e){
    e.preventDefault();
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }
  return (
    <div>
      <h1>Cadastro de Usuario</h1>
    <form onSubmit={handleRegister}>
      <label>Nome:</label><br />
      <input value={nome} onChange={(e)=>setNome(e.target.value)} 
        placeholder='Digite Seu Nome'/><br />
      
      <label>Email:</label><br />
      <input value={email} onChange={(e=>setEmail(e.target.value))} 
        placeholder='Digite seu e-mail'/><br />
      
      <label>Idade:</label><br />
      <input value={idade} onChange={(e=>setIdade(e.target.value))} 
        placeholder='Digite Sua Idade'/><br />
      <button type='submit'>Registrar</button>
    </form>
    <br /><br />
     <span>Bem Vindo: {user.nome}</span><br />
     <span>Idade: {user.idade}</span><br />
     <span>Email: {user.email}</span>
    </div>
  );
}

export default App;
