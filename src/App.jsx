import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/navbar';
import AdminPanel from './components/admin-panel/adminPanel';
import TodoPage from './components/todo-page/todoPage';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation/>}>
            <Route index element={<TodoPage />} />
            <Route path="panel" element={<AdminPanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
