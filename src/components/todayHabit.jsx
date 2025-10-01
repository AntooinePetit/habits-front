import { useEffect, useState } from "react";
const url = import.meta.env.VITE_URL

export default function TodayHabit({ name, id, date, setError }) {
  const [entries, setEntries] = useState([]);

  const getAllEntriesForToday = async () => {
    try {
      const req = await fetch(
        `${url}/api/v1/entries/${date}/${id}`
      );
      if (!req.ok) throw new Error("Erreur de chargement des entrées");

      const res = await req.json();
      setEntries(res);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllEntriesForToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addEntry = async (id) => {
    try {
      const req = await fetch(`${url}/api/v1/entries/${id}`, {
        method: "POST",
      });
      if (!req) throw new Error("Erreur de l'enregistrement de l'entrée");
      const res = await req.json();

      setEntries((prev) => [...prev, res]);
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteEntry = async (id) => {
    try {
      const req = await fetch(`${url}/api/v1/entries/${id}`, {
        method: "DELETE",
      });
      if (!req.ok) throw new Error("Impossible de supprimer l'entrée");
      setEntries((prev) => prev.filter((entry) => entry._id !== id));
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <li key={id}>
        {name}-{" "}
        {entries.length > 0 ? (
          <span style={{ color: "green" }}>Déjà réalisé</span>
        ) : (
          <span style={{ color: "green" }} onClick={() => addEntry(id)}>
            Ajouter une entrée
          </span>
        )}
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
