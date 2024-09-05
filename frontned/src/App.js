import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loadUser } from './actions/user';
import AdminPanel from './components/admin/AdminPanel';
import TimeLine from './components/admin/TimeLine';
import Projects from './components/admin/Project';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>; // Enhanced loading indicator

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home timelines={user?.timelines || []} skills={user?.skills || []} />}
        />
        <Route
          path="/about"
          element={<About about={user?.about || ''} />}
        />
        <Route
          path="/projects"
          element={<Project projects={user?.projects || []} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/account"
          element={isAuthenticated ? <AdminPanel /> : <Login />}
        />
        <Route
          path="/admin/timeline"
          element={isAuthenticated ? <TimeLine /> : <Login />}
        />
        <Route
          path="/admin/project"
          element={isAuthenticated ? <Projects /> : <Login />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
