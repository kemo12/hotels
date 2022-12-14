import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Loadable } from '../components/Loadable/Loadable';

const Home = Loadable(lazy(() => import('../pages/Home')));
const Login = Loadable(lazy(() => import('../pages/Login')));
const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));
const AddNew = Loadable(lazy(() => import('../pages/AddNew')));
const Reserved = Loadable(lazy(() => import('../pages/Reserved')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));

export default function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AddNew" element={<AddNew />} />
        <Route path="/Reserved" element={<Reserved />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
