import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario-read-all/usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  id_cat: String = ''

  usuario: Usuario = {
    id: '',
    titulo: '',
    nome_autor: '',
    texto: ''

  }

  constructor(
    private service: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.usuario.id = this.route.snapshot.paramMap.get("id")!;
    this.findById()
  }
 
    

     cancel(): void {
      this.router.navigate([`categorias/${this.id_cat}/usuarios`]);
     }

     findById(): void {
       this.service.findById(this.usuario.id!).subscribe((resposta) => {
         this.usuario = resposta
       })
     }

}
