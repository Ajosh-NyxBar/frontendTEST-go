import React, { useState, useEffect } from 'react';
import { Box, Button, Input, Textarea, Stack } from '@chakra-ui/react';

const TaskForm = ({ task, onSave, onCancel }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...task, title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
      <Stack spacing={3}>
        <Input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button type="submit" colorScheme="teal">
          {task ? 'Update Task' : 'Add Task'}
        </Button>
        {task && <Button onClick={onCancel} colorScheme="red">Cancel</Button>}
      </Stack>
    </Box>
  );
};

export default TaskForm;
