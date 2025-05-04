import { useState } from "react";
//import "./App.css";
import MemoList from "./MemoList.jsx";
import MemoEdit from "./MemoEdit.jsx";

const initialMemos = [
  { id: 0, content: "メモ1\nおはよう" },
  { id: 1, content: "メモ2\nこんにちは" },
  { id: 2, content: "メモ3\nこんばんは" },
];

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [memos, setMemos] = useState(initialMemos);

  return (
    <>{isEditing ? <MemoEdit memos={memos} /> : <MemoList memos={memos} />}</>
  );
}

export default App;
