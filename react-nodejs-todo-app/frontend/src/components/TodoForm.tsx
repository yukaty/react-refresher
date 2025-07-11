import { useState } from "react";

// 型をインポートする
import type { FormEvent } from "react";

type Props = {
  onSubmit: (title: string) => void;
  initialTitle?: string;
  submitLabel?: string;
};

// ToDoの入力フォームコンポーネント
// 親コンポーネント（App.tsx）から onSubmit 関数を受け取る
function TodoForm({ onSubmit, initialTitle = '', submitLabel = '追加' }: Props) {
  const [title, setTitle] = useState(initialTitle);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // 入力値のバリデーション
    if (!title.trim()) {
      setError("ToDoを入力してください。");
      return;
    }
    if (title.length > 50) {
      setError("ToDoのタイトルは50文字以内で入力してください。");
      return;
    }

    onSubmit(title);
    setTitle("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="ToDoを入力"
        maxLength={500}
      />
      <button type="submit">{submitLabel}</button>
    </form>
  );
}

export default TodoForm;
