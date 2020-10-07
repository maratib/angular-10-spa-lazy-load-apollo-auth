import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent, children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
      { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) },
    ]
  },
  { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
      // useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
