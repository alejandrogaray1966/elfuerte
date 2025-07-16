import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Tobuy } from './tobuy/tobuy';
import { Page404 } from './page404/page404';

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
    {
        path: '**',
        component: Page404,
    },
];
