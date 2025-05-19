import { useState } from "react";
import "./MemoEdit.css";

function MemoEdit({ memo, onChangeMemo, onDeleteMemo, isLogin }) {
  const [content, setContent] = useState(memo.content);

  return (
    <div className="memo-editor">
      <textarea
        name="memoContent"
        className="editor-content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {isLogin && (
        <div className="btn-group">
          <button
            className="btn"
            onClick={() => onChangeMemo({ ...memo, content })}
          >
            更新
          </button>
          <button className="btn" onClick={() => onDeleteMemo(memo)}>
            削除
          </button>
        </div>
      )}
    </div>
  );
}

export default MemoEdit;
