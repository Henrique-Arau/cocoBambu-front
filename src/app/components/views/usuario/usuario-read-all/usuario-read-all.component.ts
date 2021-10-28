import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-usuario-read-all',
  templateUrl: './usuario-read-all.component.html',
  styleUrls: ['./usuario-read-all.component.css']
})
export class UsuarioReadAllComponent implements OnInit {

displayedColumns: string[] = ["id", "titulo", "usuarios", "acoes"];
  
  id_cat: String = ''

  usuarios: Usuario[] = []

  constructor(private service: UsuarioService,
     private route: ActivatedRoute,
     private router: Router
     ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.usuarios = resposta;
      console.log(this.usuarios);
    });
  }

  navegarParaCriarUsuario(): void {
    this.router.navigate([`categorias/${this.id_cat}/usuarios/create`]);
  }

}
