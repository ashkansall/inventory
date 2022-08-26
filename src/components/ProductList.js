import { useState } from "react";

const ProductList = ({products, categories, setProducts, productsFormDate}) => {

    const [editProdcut, setEditProdcut] = useState(""); //keep track of the text that is changed
    const [editProdutId, setEditProductId] = useState(null); // the prodcut id that we are editing


    const findCategory = (categoryId) => {
        return categories.find((c) => c.id === parseInt(categoryId)).title;
    }
    const deleteProducts = (productId) => {
        const filteredProducts = products.filter((p) => p.id !== parseInt(productId));
        setProducts(filteredProducts);
    }
    const editProduct = (productEditId) => {
        
        const selectedProducts = [...products].map((prodcut) => {
            console.log(prodcut);
            if (prodcut.id === productEditId) {
                prodcut.title = editProdcut;
            }
            return prodcut;
        });
        setProducts(selectedProducts);
        setEditProductId(null);
        setEditProdcut("");
    }


    return ( 
        <div>
            <h2 className="text-xl text-slate-300 font-bold mb-3">ProductList</h2>
            <div className="overflow-x-auto">

            {
                products.map((product) => {
                    return (
                        <div className="flex justify-between items-center" key={product.id}>
                            {editProdutId === product.id ? (
                                <input value={editProdcut} onChange={(e) => setEditProdcut(e.target.value)} placeholder="Edit Your Product" type="text" className="bg-transparent rounded-xl border border-slate-500 text-slate-400"/>
                            ) : (
                                <div className="text-slate-400">{product.title}</div>
                            )}

                            <div className="flex items-center gap-x-3 mb-4">
                                <span className="text-slate-400" id="edit-title">{new Date(product.createdAt).toLocaleDateString('fa-Ir')}</span>
                                <span className="block px-3 py-0.5 border border-slate-400 rounded-xl text-slate-400 text-sm">{findCategory(product.categoryId)}</span>
                                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-slate-400 border-2">{product.quantity}</span>
                                <button onClick={() => deleteProducts(product.id)} className="delete-product border px-2 py-0.5 border-red-400 rounded-xl text-red-400 hover:bg-red-400 hover:text-white transition-all duration-100" id="delete-product">Delete</button>
                                {editProdutId === product.id ? (
                                    <button onClick={() => editProduct(product.id)} className="edit-product border px-2 py-0.5 border-blue-300 rounded-xl text-white hover:bg-blue-300 hover:text-white transition-all duration-100">Update</button>
                                ): (
                                    <button onClick={() => setEditProductId(product.id)} className="edit-product border px-2 py-0.5 border-yellow-300 rounded-xl text-yellow-400 hover:bg-yellow-300 hover:text-slate-800 transition-all duration-100">Edit</button>
                                )}
                                
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
     );
}
 
export default ProductList;