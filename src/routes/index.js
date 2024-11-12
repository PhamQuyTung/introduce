import Home from '~/pages/Home';
import About from '~/pages/About';
//Nếu muốn add thêm Router thì thêm vào đây, ví dụ: add thêm router Profile 
import PortFolio from '~/pages/PortFolio';
import Skills from '~/pages/Skills';
import Experience from '~/pages/Experience';
import Contact from '~/pages/Contact';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    // Nếu muốn add thêm Router thì thêm vào đây, ví dụ: add thêm router Products
    { path: '/portfolio', component: PortFolio },
    { path: '/skills', component: Skills },
    { path: '/experience', component: Experience },
    { path: '/contact', component: Contact },
];

const privateRoutes = [
    // Code...
];

export { publicRoutes, privateRoutes };
