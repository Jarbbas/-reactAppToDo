import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {

  const location = useLocation();

  return (
    <header className='header'>
        <h1>{title}</h1>
        { location.pathname === '/' && (<Button /* validação se estamos na página inicial para mostrar o btn */
          text={showAdd ? 'Fechar' : 'Adicionar'}
          color={showAdd ? 'red' : 'green'}
          onClick={onAdd} 
        />)}
    </header>
  );
}

export default Header;


