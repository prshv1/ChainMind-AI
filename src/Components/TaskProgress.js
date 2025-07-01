import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TaskProgress() {
  const [taskProgress, setTaskProgress] = useState({
    totalTasks: 5,
    completedTasks: 2,
    currentTask: 3,
    currentTaskName: 'Analyzing user requirements',
    status: 'in-progress' // 'idle', 'in-progress', 'completed', 'error'
  });

  const navigate = useNavigate();

  // Calculate progress percentage
  const progressPercentage = (taskProgress.completedTasks / taskProgress.totalTasks) * 100;

  // Placeholder handler for future task management
  const handleTaskAction = (action) => {
    // TODO: Add logic to handle task actions (pause, resume, etc.)
    console.log('Task action:', action);
  };

  const handleSelectSession = (sessionId) => {
    // Navigate to the session page
    navigate(`/session/${sessionId}`);
  };

  return (
    <div className="task-progress">
      <div className="task-header">
        <h3>Task Progress</h3>
        <div className="task-stats">
          <span className="task-counter">
            Task {taskProgress.currentTask} of {taskProgress.totalTasks}
          </span>
          <span className="task-status">
            Status: {taskProgress.status}
          </span>
        </div>
      </div>
      
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <span className="progress-text">{Math.round(progressPercentage)}%</span>
      </div>

      <div className="current-task-info">
        <h4>Current Task:</h4>
        <p className="task-name">{taskProgress.currentTaskName}</p>
      </div>

      <div className="task-actions">
        <button 
          className="task-action-button"
          onClick={() => handleTaskAction('pause')}
          disabled={taskProgress.status !== 'in-progress'}
        >
          Pause
        </button>
        <button 
          className="task-action-button"
          onClick={() => handleTaskAction('resume')}
          disabled={taskProgress.status !== 'paused'}
        >
          Resume
        </button>
        <button 
          className="task-action-button"
          onClick={() => handleTaskAction('skip')}
        >
          Skip
        </button>
      </div>
    </div>
  );
}

export default TaskProgress;
