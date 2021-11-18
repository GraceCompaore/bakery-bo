import { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import './Header.css';

function Header() {
  const { username, logout } = useContext(AuthContext);

  return (
    <header>
      <div className="font-serif w-full bg-black	flex flex-row p-8 text-white text-xl">
        <nav className="space-x-4">
          <NavLink
            activeClassName="underline"
            exact
            to="/home"
            className="text-white text-opacity-50 hover:text-white active:text-white focus:text-white visited:text-white"
          >
            YASOMA-BO
          </NavLink>
          <NavLink
            activeClassName="underline"
            to="/products"
            className="text-white text-opacity-50 hover:text-white focus:text-white"
          >
            NOS PRODUITS
          </NavLink>
          <NavLink
            activeClassName="underline"
            to="/booking"
            className="text-white text-opacity-50 hover:text-white focus:text-white"
          >
            RESERVATIONS
          </NavLink>
          <NavLink
            activeClassName="underline"
            to="/categories"
            className="text-white text-opacity-50 hover:text-white focus:text-white"
          >
            CATEGORIES
          </NavLink>
        </nav>

        <div className="spacer"></div>

        <div className="px-8 space-x-4">
          <div>
            <span>{username}</span>
            <button
              className="bg-white text-black px-8 rounded-lg ring  hover:bg-blue-200"
              onClick={() => {
                logout();
              }}
            >
              Deconnexion
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
