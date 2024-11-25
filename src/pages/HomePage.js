import React, { useState } from 'react';
import { Box, Heading, Container } from '@chakra-ui/react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div>
      <Container maxW="container.md" py={6}>
      <Heading mb={6} textAlign="center" color="teal.600">Task Tracker</Heading>
      <TaskForm task={editingTask} onSave={editingTask ? updateTask : addTask} onCancel={() => setEditingTask(null)} />
      <TaskList
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
      />
      </Container>
    </div>
  );
};

export default HomePage;
