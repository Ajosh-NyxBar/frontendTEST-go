import React from 'react';
import { Box, Button, Checkbox, Stack, Text } from '@chakra-ui/react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <Box>
      {tasks.length === 0 ? (
        <Text>No tasks available.</Text>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </Box>
  );
};

export default TaskList;
