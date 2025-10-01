import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodayHabit from "../components/todayHabit";
const url = import.meta.env.VITE_URL

export default function Today() {
  const [habits, setHabits] = useState([]);
  const [error, setError] = useState("");

  const todayDate = new Date()
    .toLocaleString("fr-FR", { timezone: "UTC" })
    .split(" ")[0];
  document.title = `Habitude du ${todayDate}`;

  const dateToSend = `${todayDate.split("/")[2]}-${todayDate.split("/")[1]}-${
    todayDate.split("/")[0]
  }`;

  const getAllHabits = async () => {
    try {
      const req = await fetch(`${url}/api/v1/habits/`);
      if (!req.ok) throw new Error("Erreur de récupération des données");

      const res = await req.json();
      setHabits(res);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllHabits();
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <h1>Gestion d'habitude</h1>
      <h2>Habitudes du {todayDate}</h2>

      <ul>
        {habits?.map((habit) => (
          <TodayHabit
            key={habit._id}
            name={habit.name}
            id={habit._id}
            date={dateToSend}
            setError={setError}
          />
        ))}
      </ul>

      <Link to="/">Retour à l'accueil</Link>
    </>
  );
}
