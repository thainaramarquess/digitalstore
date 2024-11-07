import React from 'react';
import Logo from './Logo';
import MiniCart from '../assets/mini-cart.svg';
import NavBar from './Navbar';

const Header = () => (
  <>
    <header className="flex items-center justify-between p-4">
      <Logo />

      <div className="flex items-center space-x-4 mr-12">
        <div className="relative flex w-[500px]">
          <input
            type="search"className="relative m-0 block w-full rounded border border-solid border-neutral-200 bg-transparent px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200"  placeholder="Search" aria-label="Search" id="exampleFormControlInput2"
            aria-describedby="button-addon2"
          />
          <span
            className="flex items-center px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
            id="button-addon2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
        </div>

        <a href="#" className="text-dark-gray-2 text-[16px] underline hover:text-dark-gray-3 mr-4">
          Cadastre-se
        </a>

        <button type="button" className="text-white bg-primary font-bold rounded-md text-sm px-5 py-2 w-[114px] h-[40px] hover:bg-primary-dark">
          Entrar
        </button>

        <button type="button">
          <img src={MiniCart} alt="Mini Cart" />
        </button>
      </div>
    </header>

    <NavBar />
  </>
);

export default Header;
