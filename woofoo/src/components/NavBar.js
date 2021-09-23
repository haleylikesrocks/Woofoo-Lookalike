import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

const NavBar = ({
  createForm
}) => {
  const createNewFormClickHandler = () => {
    const newId = uniqid();
    createForm(newId);
  }

  return (
    <div >
        <h2>Woofoo Lookalike</h2>
        <Link to="/savedforms">
          <button type="button">Saved forms</button>
          </Link>
        <button>Edit Forms</button>
        <Link to="/">
          <button type="button" onClick={createNewFormClickHandler}>New Form</button>
        </Link>
    </div>
  );
}

export default NavBar;
