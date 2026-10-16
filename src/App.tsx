import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import { About, AddProperty, AgentDetails, Agents, Auth, Compare, Wishlist } from './pages/Extras';
export default function App(){return <Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="properties" element={<Properties/>}/><Route path="properties/:id" element={<PropertyDetails/>}/><Route path="wishlist" element={<Wishlist/>}/><Route path="compare" element={<Compare/>}/><Route path="agents" element={<Agents/>}/><Route path="agents/:id" element={<AgentDetails/>}/><Route path="add-property" element={<AddProperty/>}/><Route path="login" element={<Auth mode="login"/>}/><Route path="register" element={<Auth mode="register"/>}/><Route path="about" element={<About/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes>}
