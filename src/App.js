import { useState } from "react";
import "./App.css";

function App() {
  const [journalEntry, setJournalEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [visibleJournalEntry, setVisibleJournalEntry] = useState("");

  return (
    <main>
      <h1>My Journal</h1>
      <textarea
        placeholder="Click here to start typing..."
        value={journalEntry}
        onChange={function (evt) {
          setJournalEntry(evt.target.value);
        }}
      />
      <button
        id="submit"
        onClick={function () {
          setEntries([...entries, journalEntry]);
          setJournalEntry("");
        }}
      >
        Submit
      </button>
      <section id="entries">
        <div id="entries-nav">
          {entries.map(function (entry, index) {
            return (
              <button
                className={entry === visibleJournalEntry ? "selected" : ""}
                key={index}
                onClick={function () {
                  setVisibleJournalEntry(entry);
                }}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <p id="single-entry">{visibleJournalEntry}</p>
      </section>
    </main>
  );
}

export default App;
