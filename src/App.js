
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar-Nav/Sidebar';
import Deals from './Components/Deals/Deals';
import SearchBar from './Components/SearchBar/SearchBar';
import AddNewDeal from './Components/AddNewDeal/AddNewDeal';
import Zomato from './Components/Zomato/Zomato';


function App() {
  return (
    <div className="App bg-secondary">
     <SearchBar></SearchBar>

      <Routes>
        <Route path='/' element={<Sidebar/>}/>
        <Route path="/sidebar" element={<Sidebar />}>
          <Route path="deals" element={<Deals></Deals>}></Route>
          <Route path="addnewdeal" element={<AddNewDeal></AddNewDeal>}></Route>
          <Route path="zomato" element={<Zomato></Zomato>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
