
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === '') return;

    const newTask = {
      id: uuidv4(),
      text: task,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, text: newText } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>To-Do Uygulaması</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Yeni görev ekle"
        />
        <button type="submit">Ekle</button>
      </form>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => deleteTask(t.id)}>Sil</button>
            <button
              onClick={() => {
                const newText = prompt('Yeni görevi giriniz:', t.text);
                if (newText !== null) {
                  editTask(t.id, newText);
                }
              }}
            >
              Düzenle
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
