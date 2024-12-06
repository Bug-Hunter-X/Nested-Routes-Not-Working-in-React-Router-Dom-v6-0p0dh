import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return (
    <>
      <h1>Home</h1>
      <Outlet/>
    </>
  );
}

function About() {  return <h1>About</h1>;}

function NotFound() {  return <h1>404 Not Found</h1>;}

import { Outlet } from 'react-router-dom';
export default App; 