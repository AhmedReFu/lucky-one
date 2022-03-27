
import './App.css';
import Ques from './Component/Ques/Ques';
import Shop from './Component/Shop/Shop';



function App() {
  return (
    <div className="App" >

      <h1 className='heading' > Stylish Shoes Shopping</h1>
      <h1 className='heading'>Choose 4 shoes</h1>
      <Shop>
      </Shop>
      <Ques> </Ques>
    </div>
  );
}

export default App;
