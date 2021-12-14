import Header from 'components/header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import NotFound from 'components/NotFound';
//import PeopleList from 'features/PeopleList';

// Lazy load - Code splitting
const MovieList = React.lazy(() => import('./features/MovieList'));
const PeopleList = React.lazy(() => import('./features/PeopleList'));

function App() {
  return (

    <div className="App" >
      <BrowserRouter>
        <Header></Header>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/films" />} />
            <Route path="/films/*" element={<MovieList />} />
            <Route path="/people/*" element={<PeopleList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div >
  );
}

export default App;
