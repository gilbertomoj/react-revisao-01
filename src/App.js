import './App.css';
import ilhasgalapagos from './images/galapagos.jpg'
function App() {
  return (
    <div className="App">
      <div className="header">
      <p className="title">Galeria de Imagens</p>
      <p className="description">Aqui você encontra as imagens mais diversas</p>
      <div>
      </div>
        </div>
      <div className="body">
      <div className="card">
          <div className="card-image">
            <img src={ilhasgalapagos} alt="Imagem da ilha galapago"/>
          </div>
          <div className="card-content">
            <p className="card-title">Ilhas galapagos</p>
            <p className="card-description">As ilhas Galápagos são um arquipélago vulcânico do Oceano Pacífico. Elas são consideradas um dos destinos mais procurados do mundo para observação de vida selvagem.</p>
            <p className="card-link">Saiba mais.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={ilhasgalapagos} alt="Imagem da ilha galapago"/>
          </div>
          <div className="card-content">
            <p className="card-title">Ilhas galapagos</p>
            <p className="card-description">As ilhas Galápagos são um arquipélago vulcânico do Oceano Pacífico. Elas são consideradas um dos destinos mais procurados do mundo para observação de vida selvagem.</p>
            <p className="card-link">Saiba mais.</p>
          </div>
        </div>      <div className="card">
          <div className="card-image">
            <img src={ilhasgalapagos} alt="Imagem da ilha galapago"/>
          </div>
          <div className="card-content">
            <p className="card-title">Ilhas galapagos</p>
            <p className="card-description">As ilhas Galápagos são um arquipélago vulcânico do Oceano Pacífico. Elas são consideradas um dos destinos mais procurados do mundo para observação de vida selvagem.</p>
            <p className="card-link">Saiba mais.</p>
          </div>
        </div>
      </div>
      <div className='footer'>
        <p>As mais belas imagens</p>
        <p>Copyright gilberto 2021</p> 
      </div>
    </div>
  );
}

export default App;
