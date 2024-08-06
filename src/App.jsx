
import { BrowserRouter } from 'react-router-dom'
import './App.css'
// import Nav from './components/nav/Nav'
import Layout from './components/Layout'

function App() {
  
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>  
  )
}

export default App
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);