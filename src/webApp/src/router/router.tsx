import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home'
import Info from '../views/Info'
import ReturnURL from '../views/ReturnURL';

export default function ViewRouter() {
    return (
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Info" Component={Info} />
        <Route path="/ReturnURL" Component={ReturnURL}/>
      </Routes>
    );
  }
  