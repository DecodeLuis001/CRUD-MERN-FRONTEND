import logo from './logo.svg';
import './App.css';

//importamos los componentes:
import CompShowBlogs from './blog/ShowBlog';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import CompDelBlog from './blog/DeleteBlog';

//Importamos lo necesario para operar el enrutador.
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowBlogs /> }> </Route>
          <Route path='/create' element={ <CompCreateBlog /> }> </Route>
          <Route path='/edit/:id' element={ <CompEditBlog /> }> </Route>
          <Route path='/delete/:id' element={ <CompDelBlog /> }> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
