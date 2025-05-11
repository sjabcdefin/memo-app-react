import { useState, useReducer, useEffect } from "react";
import MemoEdit from "./MemoEdit.jsx";
import memosReducer from "./memosReducer.jsx";

function MemoList() {
  const savedMemos = localStorage.getItem("memos");
  const loadedMemos = savedMemos ? JSON.parse(savedMemos) : [];

  const [selectedId, setSelectedId] = useState(null);
  const [memos, dispatch] = useReducer(memosReducer, loadedMemos);
  const selectedMemo = memos.find((memo) => memo.id === selectedId);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  function handleAddMemo() {
    const maxId = memos.reduce((max, memo) => Math.max(max, memo.id), 0);
    const newId = maxId + 1;
    setSelectedId(newId);
    dispatch({
      type: "added",
      id: newId,
      content: "新規メモ",
    });
  }

  function handleChangeMemo(updatedMemo) {
    dispatch({
      type: "changed",
      memo: updatedMemo,
    });
  }

  function handleDeleteMemo(memoId) {
    dispatch({
      type: "deleted",
      id: memoId,
    });
  }

  return (
    <div className="wrapper">
      <h1>{selectedMemo ? "編集" : "一覧"} </h1>
      <div className="container">
        <ul className="memo-list">
          {memos.map((memo) => (
            <li key={memo.id}>
              <button
                className={
                  selectedId === memo.id ? undefined : "link-style-btn"
                }
                onClick={() => setSelectedId(memo.id)}
              >
                {memo.content.split("\n")[0]}
              </button>
            </li>
          ))}
          <button className="link-style-btn" onClick={() => handleAddMemo()}>
            +
          </button>
        </ul>
        {selectedMemo && (
          <MemoEdit
            key={selectedMemo.id}
            memo={selectedMemo}
            onChangeMemo={handleChangeMemo}
            onDeleteMemo={handleDeleteMemo}
          />
        )}
      </div>
    </div>
  );
}

export default MemoList;
