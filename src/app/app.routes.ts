import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Tobuy } from './tobuy/tobuy';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'about',
        component: About,
    },
    {
        path: 'tobuy',
        component: Tobuy,
    },
    // { path: '**', component: NotFound },
    // para crear un set default
    // crear el componente not found
    // importarlo
    // y luego poner este path
];
