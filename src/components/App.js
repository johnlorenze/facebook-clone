import '../styles/App.css';
import '../styles/responsive.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import Login from '../components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
