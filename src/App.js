
import './App.css';
import ProfilePhoto from './component/Profil/ProfilePhoto';
import FullName from './component/Profil/FullName';
import Address from './component/Profil/Address';

function App() {
  return (
    <div className="App">
        <FullName/>
        <Address/>
        <ProfilePhoto/>
    </div>
  );
}

export default App;
