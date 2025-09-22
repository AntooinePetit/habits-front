import { useState } from "react";

export default function AddHabit({ onAdd }) {
  const [habitInput, setHabitInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitInput.trim()) return;
    onAdd(habitInput);
    setHabitInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une habitude..."
        value={habitInput}
        onChange={(e) => setHabitInput(e.target.value)}
      />
      <button type="submit">Enregistrer</button>
    </form>
  );
}
