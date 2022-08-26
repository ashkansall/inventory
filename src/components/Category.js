import { useState } from "react";

const CategoryForm = ({setCategories}) => {

    const [isShow, setIsShow] = useState(false);
    const [categoryFormData, setCategoryFormData] = useState({title: "", description: ""});
   


    const changeHandler = (e) => {
        const {name, value} = e.target;
        setCategoryFormData({...categoryFormData, [name]: value});
        // console.log(target.value);
    }
    const addNewCategoryHandler = (e) => {
        e.preventDefault();
        setCategories((prevState) => [...prevState, {...categoryFormData, createdAt: new Date().toISOString(), id: new Date().getTime()}]);
        setCategoryFormData({title: "", description: ""});
    }



    return ( 
            <section>
                <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
                    <h2 className="text-xl text-slate-300 font-bold mb-6">Add New Catagory</h2>
                    <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
                        <div>
                            <label htmlFor="catagory-title" className="block mb-1 text-slate-400">title</label>
                            <input onChange={changeHandler} type="text" name="title" id="catagory-title" value={categoryFormData.title} className="bg-transparent rounded-xl border border-slate-500 text-slate-400"/>
                        </div>
                        <div>
                            <label htmlFor="catagory-description" className="block mb-1 text-slate-400">description</label>
                            <textarea onChange={changeHandler} type="text" value={categoryFormData.description} name="description" id="catagory-description" className="w-full bg-transparent rounded-xl border border-slate-500 text-slate-400"></textarea>
                        </div>
                        <div className="flex items-center justify-between gap-x-4">
                            <button className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2" id="cancel-category" onClick={(e) => {
                                e.preventDefault();
                                setIsShow(false);
                            }}>Cancel</button>
                            <button onClick={addNewCategoryHandler} id="add-new-category" className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2">Add New Catagory</button>
                        </div>
                    </form>
                </div>
                <button onClick={() => setIsShow((prevState) => !prevState)} id="toggle-add-category" className={`text-slate-600 text-lg mb-4 font-medium hover:bg-white hover:p-3 transition-all duration-200 hover:text-slate-600 hover:rounded-xl ${isShow && "hidden"}`}>
                    Add New Category
                </button>
            </section>
     );
}
 
export default CategoryForm;