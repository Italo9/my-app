import { useHistory } from 'react-router-dom';



export function Home() {
    const history = useHistory();
    const handleEditProfile = () => {
        const confirm = window.confirm('Gostaria de editar seu perfil?');
    
        if (confirm) history.push('/edit-profile');
      };
    const handleDeleteProfile = () => {
        const confirm = window.confirm('Gostaria de deletar seu perfil?');
    
        if (confirm) history.push('/dashboard');
      };
      
    return (
        <div>
            <h1>
              <span>Home </span>
            </h1>
            <button
              id="newUser"
              onClick={() =>  history.push('/registration')}
            >Cadastrar um Usuário </button>
            <button
              id="listAllUsers"
              onClick={() =>  history.push('/list-users')}
            >Listar Usuários </button>
            <button
              id="deleteUser"
              onClick={handleDeleteProfile}
            >Deletar Usuário </button>
            <button
              id="editUser"
              onClick={handleEditProfile}
            >Editar Usuário </button>
        </div>
    );
  }
  