import { useState } from "react";

function MemoEdit({ memo, onChangeMemo, onDeleteMemo }) {
  const [content, setContent] = useState(memo.content);

  return (
    <div className="editor">
      <textarea
        name="memoContent"
        className="memo-content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="button-group">
        <button onClick={() => onChangeMemo({ ...memo, content: content })}>
          更新
        </button>
        <button onClick={() => onDeleteMemo(memo.id)}>削除</button>
      </div>
    </div>
  );
}

export default MemoEdit;
