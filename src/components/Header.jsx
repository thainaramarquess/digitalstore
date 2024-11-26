import React from 'react';
import { Search } from 'lucide-react';
import Logo from './Logo';
import MiniCart from '../assets/mini-cart.svg';
import NavBar from './Navbar';

const Header = () => (
	<>
		<header className="flex items-center justify-between p-4">
			<Logo />
			<div className="flex items-center space-x-4 mr-12">
				<div className="relative flex w-[800px]">
					<input type="text" placeholder="Pesquisar Produto..." className="block w-full pr-12 rounded bg-light-gray-3 px-3 py-2 text-base font-normal text-gray-800 outline-none transition duration-200 ease-in-out"/>
					<span className="absolute inset-y-0 right-3 flex items-center text-neutral-500">
						<Search className="h-6 w-6 text-gray-600" />
					</span>
				</div>

				<a href="#" className="text-dark-gray-2 text-[16px] underline hover:text-dark-gray-3 mr-4">
					Cadastre-se
				</a>

				<button type="button" className="text-white bg-primary hover:bg-tertiary transition duration-200 font-bold rounded-md text-sm px-5 py-2 w-[114px] h-[40px]">
					Entrar
				</button>

				<button type="button" className="relative">
					<img src={MiniCart} alt="Mini Cart" />
					<div className="absolute top-[-10px] right-[-12px] bg-error text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
						2
					</div>
				</button>
			</div>
		</header>
		<NavBar />
	</>
);

export default Header;
