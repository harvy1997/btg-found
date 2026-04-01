import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Layout } from './layout/components/layout/layout';
import { List } from './pages/list/list';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {
        path: 'home', component: Layout, children: [
            { path: '', component: Home },
            { path: 'list', component: List },
        ]
    }, {
        path: 'login', component: Login
    }, {
        path: '', component: Login
    }
];
