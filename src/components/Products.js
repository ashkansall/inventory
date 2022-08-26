import { useState } from "react";

const ProductForm = ({categories, setProducts, productsFormDate, setProductsFormData}) => {


    const addNewProduct = (e) => {
        e.preventDefault();
        setProducts((prevState) => [...prevState, {...productsFormDate, createdAt: new Date().toISOString(), id: new Date().getTime()}]);
        setProductsFormData({title: "", categoryId: "", quantity: ""});
    }

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setProductsFormData({...productsFormDate, [name] : value});
    }

    return ( 
        
        <div className="mb-6">
            <h2 className="text-xl text-slate-300 font-bold mb-6">Add New product</h2>
            <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
                <div>
                    <label htmlFor="product-title" className="block mb-1 text-slate-400">title</label>
                    <input onChange={changeHandler} value={productsFormDate.title} type="text" name="title" id="product-title" className="bg-transparent rounded-xl border border-slate-500 text-slate-400"/>
                </div>
                <div>
                    <label htmlFor="product-quantity" className="block mb-1 text-slate-400">quantity</label>
                    <input onChange={changeHandler} value={productsFormDate.quantity} type="number" name="quantity" id="product-quantity" className="bg-transparent rounded-xl border border-slate-500 text-slate-400" />
                </div>
                <div>
                    <label htmlFor="product-catagory" className="block mb-1 text-slate-400">category</label>
                    <select onChange={changeHandler} value={productsFormDate.categoryId} name="categoryId" id="product-catagory" className="bg-transparent rounded-xl w-full text-slate-400">
                        <option className="bg-slate-500 text-slate-400" value="0">select a catagory</option>
                        {
                            categories.map((cat) => {
                                return (
                                    <option key={cat.id} className="bg-slate-500 text-slate-400" value={cat.id}>{cat.title}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="flex items-center justify-between gap-x-4">
                    <button onClick={addNewProduct} id="add-new-product" className="w-full bg-slate-500 text-slate-200 rounded-xl p-2">Add New Product</button>
                </div>
            </form>
        </div>
     );
}
 
export default ProductForm;