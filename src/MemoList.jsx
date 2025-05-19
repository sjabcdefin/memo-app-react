import { useState, useReducer, useEffect } from "react";
import MemoEdit from "./MemoEdit.jsx";
import memosReducer from "./memosReducer.jsx";
import "./MemoList.css";

function MemoList() {
  const savedMemos = localStorage.getItem("memos");
  const loadedMemos = savedMemos ? JSON.parse(savedMemos) : [];

  const [selectedMemo, setSelectedMemo] = useState(null);
  const [memos, dispatch] = useReducer(memosReducer, loadedMemos);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  function handleAddMemo() {
    const maxId = memos.reduce((max, memo) => Math.max(max, memo.id), 0);
    const newMemo = { id: maxId + 1, content: "新規メモ" };
    setSelectedMemo(newMemo);
    dispatch({
      type: "added",
      memo: newMemo,
    });
  }

  function handleChangeMemo(updatedMemo) {
    dispatch({
      type: "changed",
      memo: updatedMemo,
    });
  }

  function handleDeleteMemo(memo) {
    setSelectedMemo(null);
    dispatch({
      type: "deleted",
      memo,
    });
  }

  return (
    <div className="memo-page">
      <div className="memo-header">
        <h1>{selectedMemo ? "編集" : "一覧"} </h1>
        <button className="btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "ログアウト" : "ログイン"}
        </button>
      </div>
      <div className="memo-layout">
        <ul className="memo-list">
          {memos.map((memo) => (
            <li key={memo.id}>
              <button
                className={
                  selectedMemo?.id === memo.id ? undefined : "link-btn"
                }
                onClick={() => setSelectedMemo(memo)}
              >
                {memo.content.split("\n")[0]}
              </button>
            </li>
          ))}
          <button className="link-btn" onClick={() => handleAddMemo()}>
            +
          </button>
        </ul>
        {selectedMemo && (
          <MemoEdit
            key={selectedMemo.id}
            memo={selectedMemo}
            onChangeMemo={handleChangeMemo}
            onDeleteMemo={handleDeleteMemo}
            isLogin={isLogin}
          />
        )}
      </div>
    </div>
  );
}

export default MemoList;
