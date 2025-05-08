import { useState, useReducer } from "react";
import MemoEdit from "./MemoEdit.jsx";
import memosReducer from "./memosReducer.jsx";

let nextId = 0;

function MemoList() {
  const [selectedId, setSelectedId] = useState(null);
  const [memos, dispatch] = useReducer(memosReducer, []);
  const selectedMemo = memos.find((memo) => memo.id === selectedId);

  function handleAddMemo() {
    const newId = nextId++;
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
              <a
                href=""
                className={selectedId === memo.id ? "selected" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedId(memo.id);
                }}
              >
                {memo.content.split("\n")[0]}
              </a>
            </li>
          ))}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              handleAddMemo();
            }}
          >
            +
          </a>
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
