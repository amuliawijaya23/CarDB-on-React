import './styles/App.scss';

import Nav from './Nav';
import Header from './Header';

export default function App() {
  return (
    <main className="App">
      <Nav user={null} />
      <div className="component">
        <Header />
      </div>
    </main>
  );
};
