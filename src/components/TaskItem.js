import React from 'react';
import { Box, Button, Checkbox, Stack, Text } from '@chakra-ui/react';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} mb={2} bg={task.completed ? 'green.100' : 'gray.100'}>
    <Stack direction="row" justify="space-between" align="center">
      <Box>
        <Checkbox isChecked={task.completed} onChange={() => onToggleComplete(task.id)} mr={2} />
        <Text color="black" as={task.completed ? 's' : undefined}>{task.title}</Text>
        <Text fontSize="sm" color="gray.500">{task.description}</Text>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button size="sm" colorScheme="blue" onClick={() => onEdit(task)}>Edit</Button>
        <Button size="sm" colorScheme="red" onClick={() => onDelete(task.id)}>Delete</Button>
      </Stack>
    </Stack>
  </Box>
);

export default TaskItem;
