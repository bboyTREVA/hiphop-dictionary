import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quiz from './Quiz';

test('renders question and choices', () => {
  const mockQuestion = {
    question: 'What does "lit" mean?',
    choices: ['Angry', 'Tired', 'Excited', 'Sad'],
    correctAnswer: 'Excited',
  };

  const { getByText } = render(<Quiz {...mockQuestion} />);

  expect(getByText(mockQuestion.question)).toBeInTheDocument();
  mockQuestion.choices.forEach(choice => {
    expect(getByText(choice)).toBeInTheDocument();
  });
});

test('calls onCorrectAnswer when correct choice is clicked', () => {
  const mockQuestion = {
    question: 'What does "lit" mean?',
    choices: ['Angry', 'Tired', 'Excited', 'Sad'],
    correctAnswer: 'Excited',
  };
  const mockOnCorrectAnswer = jest.fn();

  const { getByText } = render(<Quiz {...mockQuestion} onCorrectAnswer={mockOnCorrectAnswer} />);

  fireEvent.click(getByText(mockQuestion.correctAnswer));

  expect(mockOnCorrectAnswer).toHaveBeenCalled();
});
