
import './App.css';
import Index from './components/Index';
import Catalog from './components/pages/Catalog';
import Basket from './components/Basket';
import Product from './components/pages/Product';
import Registration from './components/Registration';


function App() {
    return ( 
        <div className="App" >
            <Index />
            <Catalog />
            <Basket />
            <Product />
            <Registration />
        </div>
    );
}

export default App;