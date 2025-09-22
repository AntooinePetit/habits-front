import { useEffect, useState } from "react";

export default function HabitElement({ id, name }) {
  // Récupérer toutes les entrées de l'habitude
  const [entries, setEntries] = useState([]);

  // Fetch les entrées de l'habitude
  const fetchEntries = async () => {
    try {
      const req = await fetch(`http://localhost:3000/api/v1/entries/id/${id}`);
      if (!req.ok) throw new Error("Erreur de récupération des données");

      const datas = await req.json();
      setEntries(datas);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <li key={id}>{name}</li>
      {entries.length > 0 ? (
        <ul>
          {entries?.map((entry) => {
            const date = new Date(entry.date);
            const newdate = date.toLocaleString("fr-FR", { timezone: "UTC" }).split(' ');
            return <li key={entry._id}>Realisé le {newdate[0]} à {newdate[1]}</li>;
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
