import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Calendar from './components/Calendar';
import Form from './components/Form'
import Entry from './components/Entry'

function App() {
  return (
    <div>
      <header>
        <h2>My Calendar Journal</h2>
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Calendar/>}/>
          <Route exact path="/new" element={<Form/>}/>
          <Route path="/view/:date" element={<Entry />} />
        </Routes>
      </Router>
      <footer>
        <p>Copyright ⓒ {new Date().getFullYear()} by Samantha Burak</p>
      </footer>
    </div>
  );
}

export default App;
