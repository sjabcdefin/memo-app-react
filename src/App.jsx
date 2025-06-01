import "./App.css";
import MemoList from "./MemoList.jsx";
import { LoginProvider } from "./hooks/useLogin.jsx";

function App() {
  return (
    <LoginProvider>
      <MemoList />
    </LoginProvider>
  );
}

export default App;
