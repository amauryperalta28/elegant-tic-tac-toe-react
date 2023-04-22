import { useNavigate } from 'react-router-dom';
import './Home.css';


export const Home = () => {
  const navigate = useNavigate();

  const goToGame = ()=>{
    navigate('game');
  }
  
  return (
    <>
      <h1 className="game-title">Elegant Tic Tac Toe</h1>
      <a className="start-game" onClick={goToGame}>
        Iniciar
      </a>
    </>
  );
};
