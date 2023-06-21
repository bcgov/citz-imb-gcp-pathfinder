import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home'

export default function ViewRouter() {
    return (
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    );
  }