import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [taskCategories, setTaskCategories] = useState({
    backlog: ['Task 1', 'Task 2', 'Task 3'],
    todo: ['Task 4', 'Task 5', 'Task 6'],
    inProgress: ['Task 7', 'Task 8'],
    completed: ['Task 9', 'Task 10'],
  });

 
  const moveTask = (task, fromCat, toCat) => {
    const fromList = [...taskCategories[fromCat]];
    const toList = [...taskCategories[toCat]];

    const index = fromList.indexOf(task);
    if (index !== -1) {
      fromList.splice(index, 1);
      toList.push(task);
      setTaskCategories({
        ...taskCategories,
        [fromCat]: fromList,
        [toCat]: toList,
      });
    }
  };


  const renderCard = (category, leftCat, rightCat) => {
    const labels = {
      backlog: 'Backlog',
      todo: 'To Do',
      inProgress: 'Ongoing',
      completed: 'Done'
    };

    return (
      <div className="card bg-white shadow-lg p-4 rounded-lg w-full max-w-xs m-2 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-4">{labels[category]}</h2>
        {taskCategories[category].map((task, idx) => (
          <div key={idx} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded-md transition-shadow shadow-sm hover:shadow-md">
            <button
              className="btn-nav text-green-600 font-bold disabled:text-gray-400 transition-colors hover:text-green-800"
              onClick={() => moveTask(task, category, leftCat)}
              disabled={!leftCat}
            >
              ←
            </button>
            <span className="text-sm">{task}</span>
            <button
              className="btn-nav text-green-600 font-bold disabled:text-gray-400 transition-colors hover:text-green-800"
              onClick={() => moveTask(task, category, rightCat)}
              disabled={!rightCat}
            >
              →
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-center items-start min-h-screen bg-gray-100 p-4">
      {renderCard('backlog', null, 'todo')}
      {renderCard('todo', 'backlog', 'inProgress')}
      {renderCard('inProgress', 'todo', 'completed')}
      {renderCard('completed', 'inProgress', null)}
    </div>
  );
}

export default App;
