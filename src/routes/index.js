import Home from "~/components/pages/Home";
import CatAccessories from "~/components/pages/CatAccessories";
import CatFood from "~/components/pages/CatFood";
import CatFurniture from "~/components/pages/CatFurniture";
import Blogs from "~/components/pages/Blogs";
import SignUp from "~/components/pages/SignUP";
import LogIn from "~/components/pages/LogIn";
import ShopPet from "~/components/pages/ShopPet";


// Home - Shop Pet - Cat Food - Cat Accessories - Cat Furniture - Blog


const publicRouters = [
    { path: '/', component: Home },
    { path: '/cat-food', component: CatFood }, 
    { path: '/shop-pet', component: ShopPet }, 
    { path: '/cat-accessories', component: CatAccessories },
    { path: '/cat-furniture', component: CatFurniture },
    { path: '/blog', component: Blogs },
    { path: '/signup', component: SignUp, layout: null },
    { path: '/login', component: LogIn, layout: null },
]
const privateRouters = [

]


export { publicRouters, privateRouters }
