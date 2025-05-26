import "./App.css";
import MemoList from "./MemoList.jsx";
import { LoginProvider } from "./login-hooks.jsx";

function App() {
  return (
    <LoginProvider>
      <MemoList />
    </LoginProvider>
  );
}

export default App;
