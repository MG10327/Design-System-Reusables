import { render, fireEvent, screen } from '@testing-library/react';
import Collapsible from './CommandBar';

test('collapsible toggles content visibility when clicked', () => {
  render(
    <Collapsible>
      <div>Collapsible Content</div>
    </Collapsible>
  );

  const button = screen.getByRole('button');
  const content = screen.getByText('Collapsible Content');


  expect(content).not.toBeVisible(); // Initially content should not be visible


  fireEvent.click(button); // Simulate button click to expand
  expect(content).toBeVisible();


  fireEvent.click(button);
  expect(content).not.toBeVisible(); // Simulate button click to collapse again
});

test('calls onToggle when collapsed/expanded', () => {
  const onToggle = jest.fn();
  render(
    <Collapsible onToggle={onToggle}>
      <div>Collapsible Content</div>
    </Collapsible>
  );

  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(onToggle).toHaveBeenCalledTimes(1);

  fireEvent.click(button);
  expect(onToggle).toHaveBeenCalledTimes(2);
});
