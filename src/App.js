import { useEffect, useState } from 'react';
import './App.css';
import CategoryForm from './components/Category';
import Filter from './components/Filter';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductForm from './components/Products';

// const products = [
//   {
//       id: 1,
//       title: "react.js",
//       category: "frontend",
//       createdAt: "2021-10-31T15:02:00.411Z",
      
//   },
//   {
//       id: 2,
//       title: "node.js",
//       category: "backend",
//       createdAt: "2021-10-31T15:03:23.556Z",
      
//   },
//   {
//       id: 3,
//       title: "vue.js",
//       category: "frontend",
//       createdAt: "2021-11-01T10:47:26.889Z",
      
//   },
  
// ]

// const catagories = [
//   {
//       id: 1,
//       title: "frontend",
//       description: "frontend of project",
//       createAt: "2021-11-01T10:47:26.889Z",
//   },
//   {
//       id: 2,
//       title: "backend",
//       description: "backend of project",
//       createAt: "2021-10-01T10:47:26.889Z",
//   },
// ]

function App() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  
  const [productsFormDate, setProductsFormData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
});


  useEffect(() => {

    let result = products;
    result = filterSearchTitle(result);
    result = filterSelectedCategory(result);
    result = sortDate(result);
    setFilteredProducts(result);

  }, [products, sort, searchValue, selectedCategory])


  const sortHandler = (e) => {
    setSort(e.target.value);
    
  }
  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  }

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  }
  const sortDate = (array) => {
    let sorttedProducts = [...array];
    return sorttedProducts.sort((a, b) => {
        if (sort === "latest") {
            return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
        } else if(sort === "earliest") {
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
        }
    })
  }
  const selectedCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  }
  const filterSelectedCategory = (array) => {
    if (!selectedCategory) return array;
      return array.filter((item) => item.categoryId == selectedCategory);

  }





  // localStorage
  useEffect(()=> {

   const savedProducts =  JSON.parse(localStorage.getItem('products')) || [];
   const savedCategories =  JSON.parse(localStorage.getItem('categories')) || [];

   setProducts(savedProducts);
   setCategories(savedCategories);

  }, [])

  // 

  useEffect(()=> {
    if (products.length) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products])

  useEffect(()=> {
    if (categories.length) {
      localStorage.setItem('categories', JSON.stringify(categories));
    }
  }, [categories])


  return (
    <div className="">
      <div className="bg-slate-800 min-h-screen">
        <NavBar products={products}/>
        <div className="container max-w-screen-sm mx-auto">
          <CategoryForm setCategories={setCategories}/>
          <ProductForm setProductsFormData={setProductsFormData} productsFormDate={productsFormDate} categories={categories} setProducts={setProducts}/>
          <Filter selectedCategory={selectedCategory} onSelectCategory={selectedCategoryHandler} categories={categories} sort={sort} searchValue={searchValue} onSort={sortHandler} onSearch={searchHandler}/>
          <ProductList productsFormDate={productsFormDate} products={filteredProducts} categories={categories} setProducts={setProducts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
