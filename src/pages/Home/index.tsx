import { Link } from 'react-router-dom';
import './style.css';
const Home = () => {
  return (
    <main className="home container">
      <h1>Escolha o Grupo de Hoje</h1>
      <div className="group-menu">
        <Link to="/a">A</Link>
        <Link to="/b">B</Link>
        <Link to="/c">C</Link>
        <Link to="/d">D</Link>
      </div>
    </main>
  )
}

export default Home;