function memosReducer(memos, action) {
  switch (action.type) {
    case "added": {
      return [
        ...memos,
        {
          id: action.id,
          content: action.content,
        },
      ];
    }
    case "changed": {
      return memos.map((m) => (m.id === action.memo.id ? action.memo : m));
    }
    case "deleted": {
      return memos.filter((m) => m.id !== action.id);
    }
  }
}

export default memosReducer;
