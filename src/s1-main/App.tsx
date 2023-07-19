import s from "./App.module.css";
import HW5 from "../s2-homeworks/hw05/HW5";

function App() {
  return (
    <div className={s.App}>
      {/*     <div className={s.hw}><HW1 /></div>
      <div className={s.hw}><HW2 /></div>
      <div className={s.hw}><HW3 /></div>
      <div className={s.hw}><HW4 /></div> */}
      <div className={s.hw}>
        <HW5 />
      </div>
    </div>
  );
}

export default App;
