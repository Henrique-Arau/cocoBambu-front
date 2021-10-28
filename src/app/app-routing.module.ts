import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { UsuarioReadAllComponent } from './components/views/usuario/usuario-read-all/usuario-read-all.component';
import { UsuarioUpdateComponent } from './components/views/usuario/usuario-update/usuario-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },
  {
    path: 'categorias/delete/:id',
    component: CategoriaDeleteComponent
  },
  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },
  {
    path: 'categorias/:id_cat/usuarios',
    component: UsuarioReadAllComponent
  },
  {
    path: 'categorias/:id_cat/usuarios/create',
    component: UsuarioCreateComponent
  },
  {
    path: 'categorias/:id_cat/usuarios/:id/update',
    component: UsuarioUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
