import React, { useState } from 'react';
import ProductList from './ProductList';

const FilteredProductList = () => {
  const [sortOrder, setSortOrder] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="flex">
      {/* Sidebar de filtros */}
      <aside className="w-80 p-4 bg-white border-r border-gray-200">
        {/* Ordenar por */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-dark-gray-2 mb-2">Ordenar por</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md text-dark-gray-2"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="">Selecione</option>
            <option value="asc">Menor preço</option>
            <option value="desc">Maior preço</option>
          </select>
        </div>

        {/* Filtrar por */}
        <div>
          <h2 className="text-lg font-semibold text-dark-gray-2 mb-2">Filtrar por</h2>
          <hr className="mb-4 border-light-gray-2" />
          <div className="space-y-2">
            {/* Exemplo de filtros */}
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

      {/* Lista de produtos */}
      <main className="flex-1 p-6">
        <ProductList sortOrder={sortOrder} filterValue={filterValue} />
      </main>
    </div>
  );
};

export default FilteredProductList;
