import { useEffect, useState } from "react";

export default function HabitElement({ id, name, onDelete, setError }) {
  // Récupérer toutes les entrées de l'habitude
  const [entries, setEntries] = useState([]);

  // Fetch les entrées de l'habitude
  const fetchEntries = async () => {
    try {
      const req = await fetch(`http://localhost:3000/api/v1/entries/${id}`);
      if (!req.ok) throw new Error("Erreur de récupération des données");

      const datas = await req.json();
      setEntries(datas);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteEntry = async (id) => {
    try {
      const req = await fetch(`http://localhost:3000/api/v1/entries/${id}`, {
        method: "DELETE",
      });
      if (!req.ok) throw new Error("Impossible de supprimer l'entrée");
      setEntries((prev) => prev.filter((entry) => entry._id !== id));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <li key={id}>
        {name} -{" "}
        <span style={{ color: "red" }} onClick={onDelete}>
          Suppression
        </span>
      </li>
      {entries.length > 0 ? (
        <ul>
          {entries?.map((entry) => {
            const date = new Date(entry.date);
            const newdate = date
              .toLocaleString("fr-FR", { timezone: "UTC" })
              .split(" ");
            return (
              <li key={entry._id}>
                Realisé le {newdate[0]} à {newdate[1]} -{" "}
                <span
                  style={{ color: "red" }}
                  onClick={() => deleteEntry(entry._id)}
                >
                  Supprimer l'entrée
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
