import { useHistory } from 'react-router-dom';
import List from "../components/list";

function Listar() {
    const history = useHistory();
  return (
    <div>
      <div>
        <h1>LISTAR USUÁRIOS</h1>

        <button onClick={() => history.push('/')}>
          Voltar Home
        </button>
      </div>

      <List />
    </div>
  );
}

export default Listar;
