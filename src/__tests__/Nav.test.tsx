import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Nav from '../components/Nav';

describe('Nav Component', () => {
  test('can navigate to home, work and contact sections', () => {
    const history = createMemoryHistory();

    // mock push function
    history.push = jest.fn();

    render(
      <Router history={history}>
        <Nav />
      </Router>,
    );

    const about = screen.getByText(/about us/i);
    const work = screen.getByText(/our work/i);
    const contact = screen.getByText(/contact us/i);

    expect(about).toBeInTheDocument();
    expect(work).toBeInTheDocument();
    expect(contact).toBeInTheDocument();

    fireEvent.click(about);
    // spy on push calls, assert on url (parameter)
    expect(history.push).toHaveBeenCalledWith('/');

    fireEvent.click(work);
    expect(history.push).toHaveBeenCalledWith('/work');

    fireEvent.click(contact);
    expect(history.push).toHaveBeenCalledWith('/contact');
  });
});
