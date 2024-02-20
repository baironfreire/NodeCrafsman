import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {path: '', redirectTo: '/pages/skill', pathMatch: 'full'},
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
