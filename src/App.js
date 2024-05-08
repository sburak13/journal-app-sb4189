import './App.css';
import Calendar from './components/Calendar';

function App() {
  return (
    <div>
      <header>
        <h2>My Calendar Journal</h2>
      </header>
      <Calendar />
      <footer>
        <p>Copyright ⓒ {new Date().getFullYear()} by Samantha Burak</p>
      </footer>
    </div>
  );
}

export default App;
