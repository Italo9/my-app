import { useHistory } from 'react-router-dom';
import  AuxiliaryNewUser from "../components/auxiliaryNewUser"


function Cadastro() {
  const history = useHistory();
  return (
    <div>
      <div>
        <h1>CADASTRAR USUÁRIO</h1>

        <button onClick={() => history.push('/')}>
          Voltar Home
        </button>
      </div>
      <div>
        <AuxiliaryNewUser />
      </div>
    </div>
  );
}

export default Cadastro;
