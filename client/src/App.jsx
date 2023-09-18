import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Register from './pages/Register';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/"  />
        <Route exact path="/login" />
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
