import {useState} from 'react';

function App(){
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a Conta de Luz',
    'Estudar React'
  ]);

  function handleRegister(e){
    e.preventDefault();
    if(input!==''){
       setTarefas([...tarefas, input]);
      setInput('');
    }
  }
  return (
    <div>
      <h1>Cadastro de Usuario</h1>
    <form onSubmit={handleRegister}>
      <label>Nome da Tarefa:</label><br />
      <input value={input} onChange={(e)=>setInput(e.target.value)}/>
      
      <button type='submit'>Registrar</button>
    </form>
    <br /><br />
     <div>
      {tarefas.map(tarefa=>(
        <li key={tarefa}>
          {tarefa}
        </li>
      ))}
     </div>
    </div>
  );
}

export default App;
