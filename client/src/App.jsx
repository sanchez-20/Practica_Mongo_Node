import { BrowserRouter, Routes, Route } from 'react-router-dom'


import RegisterPage from './pages/RegisterPage'
import LoginPages from './pages/LoginPages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1 className="text-4xl font-bold text-blue-500 text-center mt-10">Home page with Tailwind</h1>} />
        <Route path='/login' element={<LoginPages />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/tasks' element={<h1>Tasks page</h1>} />
        <Route path='/add-task' element={<h1>New task</h1>} />
        <Route path='/task/:id' element={<h1>Update task</h1>} />
        <Route path='/profile' element={<h1>Profile page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App