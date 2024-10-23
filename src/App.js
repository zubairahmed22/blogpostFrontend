import Post from './Post';
import './App.css';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/loginPage';
import EditPage from './pages/editPage';

import { Route, Routes } from "react-router-dom"
import Layout from './Layout';
import RegisterPage from './pages/registerPage';
import { UserContextProvider } from './Usercontext';
import CreatePost from './pages/createPost';
import PostPage from './pages/postPage';

function App() {
  return (
     <UserContextProvider>

    
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={
          <IndexPage />
        } />

        <Route path={'/login'} element={
          <LoginPage />
        } />
        <Route path={'/register'} element={
        <RegisterPage/>  
        }/>
        
        <Route path={'/create'} element={
          <CreatePost/>
        }/>

       <Route path='/post/:id' element={
        <PostPage/>
      }/>
      <Route path='/editPage/:id' element={
        <EditPage/>
      }/>
      
      </Route>
     
    </Routes>
    </UserContextProvider>
  );
}

export default App;
