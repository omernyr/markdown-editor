import './App.css';
import Markdown from './components/Markdown';
import Result from './components/Result';
import { TextProvider } from "./context/TextContext"

function App() {

  return (
    <div className="App">
      <TextProvider>
        <Markdown />
        <Result />
      </TextProvider>
    </div>
  );
}

export default App;
