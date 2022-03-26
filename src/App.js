import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div >
      <Header></Header>
      <Shop></Shop>
      {/* <Product></Product> */}
      <QuestionAnswer></QuestionAnswer>

    </div>
  );
}

export default App;
