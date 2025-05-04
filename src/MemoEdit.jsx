function MemoEdit({ memos }) {
  return (
    <div className="wrapper">
      <h1>編集</h1>
      <div className="container">
        <ul className="memo-list">
          {memos.map((memo) => (
            <li key={memo.id}>
              <a href="">{memo.content.split("\n")[0]}</a>
            </li>
          ))}
        </ul>
        <div className="editor">
          <textarea className="memo-content">{memos[0].content}</textarea>
          <div className="button-group">
            <button>更新</button>
            <button>削除</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoEdit;
