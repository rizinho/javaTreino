'use client'

import styles from '@/app/page.module.css'
import Header from '@/components/Header/page';

import { useState } from 'react';

export default function Home() {

  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [showDisplay, setShowDisplay] = useState(false);

  const isVisible = () => {
    setShowDisplay(true)
  }

  const addNote = () => {
    if (newNote.trim() === '') return;
    setNotes([...notes, newNote]);
    setNewNote('')
    setShowDisplay(false)
  }

  const delNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index)
    setNotes(newNotes)
  }


  return (

    <div>
        {showDisplay && (

          <div className={styles.textNote}>

            <button className={styles.butAdd} onClick={() => setShowDisplay(false)}>Voltar</button>

              <textarea className={styles.textArea}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder='Sua Anotação'
              />
            <div className={styles.butContent}>
              <button className={styles.butAdd} onClick={addNote}> Adicionar</button>
            </div>
          </div>

        )}

    <div className={styles.main}>
      <div className={styles.mainContent}>

       <p className={styles.p1}>Suas Notas:</p>

        <div className={styles.noteContent}>
            
          <ul className={styles.notes}>

          {notes.map((note,index) => (
            <li key={index}>
              <div className={styles.note}>
                <span>{note}</span>
                <button className={styles.butExcluir} onClick={() => delNote(index)}>Excluir</button>
              </div>
            </li>
          ))}

          </ul>

        </div>

      </div>

      <button className={styles.butNew} onClick={isVisible}>+</button>

     </div>
    </div>
  );
}
