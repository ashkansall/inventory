const NavBar = ({products}) => {
    return ( 

          <div className="h-12 items-center justify-center gap-x-4 bg-slate-700 flex mb-8">
              <h1 className="text-xl text-slate-300 font-bold">Inventory</h1>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-slate-400 border-2">{products.length}</span>
          </div>
     );
}
 
export default NavBar;