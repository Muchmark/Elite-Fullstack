
import Sidebars from './Component/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Createadmin from './Component/Createadmin';
import Admintable from './Component/Admintable';
import Mainlightcategory from './Component/Mainlightcategory';
import Lightcategorytable from './Component/Lightcategorytable';
import Addlightseries from './Component/Addlightseries';
import Seriestable from './Component/Seriestable';
import Addproducts from './Component/Addproducts';
import Productstable from './Component/Productstable';
import Homepage from './Component/Homepage';
import Updatemainlightcategory from './Component/Updatemainlightcategory'
import Updatelightseries from './Component/Updatelightseries'
import Updateproduct from "./Component/Updateproduct"
// import Footer from './Component/Footer';

function App() {
  return (
    <div className="App flex">
      <BrowserRouter>
        <Sidebars />

        <Routes>
          <Route path="/" index element={<Dashboard />} />
          <Route path='/createadmin' element={<Createadmin />} />
          <Route path='/admintable' element={<Admintable />} />
          <Route path='/mainlight' element={<Mainlightcategory />} />
          <Route path='/lightcategorytable' element={<Lightcategorytable />} />
          <Route path='/addseries' element={<Addlightseries />} />
          <Route path='/seriestable' element={<Seriestable />} />
          <Route path='/addproducts' element={<Addproducts />} />
          <Route path='/productstable' element={<Productstable />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/updatemainlightcategory' element={<Updatemainlightcategory />} />
          <Route path='/updatelightseries' element={<Updatelightseries />} />
          <Route path='/updateproduct' element={<Updateproduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
