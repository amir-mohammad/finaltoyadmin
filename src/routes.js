import DashbardPage from "./components/DashbardPage";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";


const routes = [
    {
        path:"/dashboard",
        name:"Dashbard",
        icon:'dashboard',
        component: DashbardPage,
        page:'/admin',
        show:true
    },
    {
        path:"/product",
        name:"Product",
        icon:'shop',
        component: Product,
        page:'/admin',
        show:true
    },
    {
        path:"/addproduct",
        name:"Add Product",
        icon:'shop',
        component:AddProduct,
        page:'/admin',
        show:false
    }
]

export default routes;