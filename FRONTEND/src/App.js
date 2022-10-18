import './App.css';
import IncreaseNum from './Components/IncreaseNumber'
import ChangeColor from './Components/ChangeColor'
import ChangeContent from './Components/ChangeContent';
import Content from './Components/Content';


function App() {
  return (
    <div className="App">
      <h1>Bài tập về nhà Buổi 3</h1>
      <IncreaseNum />
      <ChangeColor />
      <ChangeContent />
      <Content />
    </div>
  );
}

export default App;
