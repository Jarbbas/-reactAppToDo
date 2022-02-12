import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button
          text={showAdd ? 'Fechar' : 'Adicionar'}
          color={showAdd ? 'red' : 'green'}
          onClick={onAdd} 
        />
    </header>
  );
}

Header.defaultProps = {
    title: "My First React App",
}


export default Header;


