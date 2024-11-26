import React, { useState } from 'react';
import ProductList from './ProductList';

const FilteredProductList = () => {
	const [sortOrder, setSortOrder] = useState('');
	const [filterValue, setFilterValue] = useState('');

	// Função para atualizar os filtros
	const handleSortChange = (e) => {
		setSortOrder(e.target.value);
	};

	// Função para atualizar os filtros 
	const handleFilterChange = (e) => {
		setFilterValue(e.target.value);
	};

	return (
		<div className="flex">			
			<aside className="w-80 p-4 bg-white border border-gray-200 ml-11 mt-6 mb-12"> 
				<div>
					<h2 className="text-lg font-semibold text-dark-gray-2 mb-2">Filtrar por</h2>
					<hr className="mb-4 border-light-gray-2" />
					<div className="space-y-2">
						<label className="flex items-center text-dark-gray-2">
							<input
								type="radio"
								name="filter"
								value="discount"
								onChange={handleFilterChange}
								className="w-5 h-5 text-primary mr-2"
							/>
							Com desconto
						</label>
						<label className="flex items-center text-dark-gray-2">
							<input
								type="radio"
								name="filter"
								value="no-discount"
								onChange={handleFilterChange}
								className="w-5 h-5 text-primary mr-2"
							/>
							Sem desconto
						</label>
					</div>
				</div>
			</aside>

			<main className="flex-1 mt-6 mr-6">
				<div className="mb-6 flex justify-end">
					<label className="block text-lg font-semibold text-dark-gray-2 mb-2 mr-4">Ordenar por</label>
					<select className="p-2 border border-gray-300 rounded-md text-dark-gray-2 w-72 mr-28" value={sortOrder} onChange={handleSortChange}>
						<option value="">Selecione</option>
						<option value="asc">Menor preço</option>
						<option value="desc">Maior preço</option>
					</select>
				</div>

				<ProductList sortOrder={sortOrder} filterValue={filterValue} />
			</main>
		</div>
	);
};

export default FilteredProductList;
