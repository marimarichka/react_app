import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';

function App() {
  return (
    <div className={s.appWrapper}>
      <Header />
      <div className={s.mainPart}>
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
