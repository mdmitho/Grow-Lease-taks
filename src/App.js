
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import Sidebar from './Components/Sidebar-Nav/Sidebar';
import Deals from './Components/Deals/Deals';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
     <SearchBar></SearchBar>

      <Routes>
        <Route path="/sidebar" element={<Sidebar />}>
          <Route path="deals" element={<Deals></Deals>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
