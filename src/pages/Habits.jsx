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

      const datas = await req.json()
      setHabits(datas);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <>
      <h1>Gestion d'habitudes</h1>

      <ul>
        {habits?.map((habit) => (
          <HabitElement key={habit._id} id={habit._id} name={habit.name}/>
        ))}
      </ul>
    </>
  );
}
