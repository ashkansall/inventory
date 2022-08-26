import { useState } from "react";

const Filter = ({onSort, onSearch, sort, searchValue, categories, selectedCategory, onSelectCategory}) => {

    return ( 
        <div>
            {/* search bar */}
            <div className="flex items-center justify-between mb-6">
                <label htmlFor="search-input" className="text-slate-500 text-lg">search</label>
                <input onChange={onSearch} value={searchValue} id="search-input" type="text" className="bg-transparent rounded-xl border border-slate-500 text-slate-400"/>
            </div>
            {/* sort */}
            <div className="flex items-center justify-between mb-6">
                <label htmlFor="sort-products" className="text-slate-500 text-lg">Sort</label>
                <select onChange={onSort} value={sort} name="sort-products" id="sort-products" className="bg-transparent rounded-xl text-slate-400">
                    <option className="bg-slate-500 text-slate-300" value="latest" >Latest</option>
                    <option className="bg-slate-500 text-slate-300" value="earliest">Earliest</option>
                </select>
            </div>
            {/* category */}
            <div className="flex items-center justify-between mb-6">
                <label htmlFor="sort-products" className="text-slate-500 text-lg">Category</label>
                <select onChange={onSelectCategory} value={selectedCategory} name="sort-products" id="sort-products" className="bg-transparent rounded-xl text-slate-400">
                    <option className="bg-slate-500 text-slate-300" value="" >All</option>
                    {
                        categories.map((category) => {
                            return (
                                <option className="bg-slate-500 text-slate-300" value={category.id} key={category.id}>{category.title}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
     );
}
 
export default Filter;