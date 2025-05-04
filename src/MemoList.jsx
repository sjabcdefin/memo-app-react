function MemoList({ memos }) {
  return (
    <div className="wrapper">
      <h1>一覧</h1>
      <div className="container">
        <ul className="memo-list">
          {memos.map((memo) => (
            <li key={memo.id}>
              <a href="">{memo.content.split("\n")[0]}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MemoList;
