import { useEffect, useState } from "react";
import HabitElement from "../components/habit";

export default function HabitsPage() {
  // Récupérer toutes les habitudes
  const [habits, setHabits] = useState([]);

  // Charger les habitudes
  const fetchHabits = async () => {
    try {
      const req = await fetch("http://localhost:3000/api/v1/habits");
      if (!req.ok) throw new Error("Erreur de chargement des données");

      const datas = await req.json();
      setHabits(datas);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const deleteHabit = async (id) => {
    try {
      const reqHabit = await fetch(
        `http://localhost:3000/api/v1/habits/${id}`,
        { method: "DELETE" }
      );
      if (!reqHabit) throw new Error("Erreur de suppression de l'habitude");

      const reqEntries = await fetch(
        `http://localhost:3000/api/v1/entries/habit/${id}`,
        { method: "DELETE" }
      );
      if (!reqEntries) throw new Error("Erreur de suppression des entrées");
      setHabits((prev) => prev.filter((habit) => habit._id !== id));
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <h1>Gestion d'habitudes</h1>

      <ul>
        {habits?.map((habit) => (
          <HabitElement
            key={habit._id}
            id={habit._id}
            name={habit.name}
            onDelete={() => deleteHabit(habit._id)}
          />
        ))}
      </ul>
    </>
  );
}
