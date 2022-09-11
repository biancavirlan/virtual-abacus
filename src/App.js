import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Abacus from './components/abacus/abacus';
import Home from './pages/home';
import Header from './components/header/header';
import LittleFriend from './pages/littleFriend';
import BigFriend from './pages/bigFriend';

function App() {
  const mainStyle = {
    backgroundImage: 'url(/images/kids.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    flex: 'auto'
  }

  return (
    <>
      <Router>
      <Header />
      <div className="d-flex justify-content-center p-2"><Abacus rowQty={9}/></div>
      <div style={mainStyle}>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/little-friend" element={<LittleFriend/>}/>
          <Route path="/big-friend" element={<BigFriend/>}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
