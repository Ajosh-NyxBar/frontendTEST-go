import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

test('renders TaskForm and handles input changes', () => {
  const handleSave = jest.fn();
  const { getByPlaceholderText, getByText } = render(<TaskForm onSave={handleSave} onCancel={() => {}} />);
  
  fireEvent.change(getByPlaceholderText(/Title/i), { target: { value: 'New Task' } });
  fireEvent.change(getByPlaceholderText(/Description/i), { target: { value: 'Task description' } });
  
  fireEvent.click(getByText(/Save/i));
  
  expect(handleSave).toHaveBeenCalledWith({ title: 'New Task', description: 'Task description' });
});
