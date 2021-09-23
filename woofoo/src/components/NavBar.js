import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import { Styles } from '../style.ts'

const NavBar = ({
  createForm
}) => {
  const createNewFormClickHandler = () => {
    const newId = uniqid();
    createForm(newId);
  }

  return (
    <div id='nav' style={Styles.navBar} >
        <h1>Woofoo Lookalike</h1>
        <Link to="/savedforms">
          <button type="button">Saved forms</button>
          </Link>
        <Link to="/">
          <button type="button" onClick={createNewFormClickHandler}>New Form</button>
        </Link>
    </div>
  );
}

export default NavBar;
