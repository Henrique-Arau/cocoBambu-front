import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario-read-all/usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  id_cat: String = ''

  usuario: Usuario = {
    id: '',
    titulo: '',
    nome_autor: '',
    texto: ''

  }

  titulo = new FormControl("", [Validators.minLength(3)]);
  nome_autor = new FormControl("", [Validators.minLength(3)]);
  texto = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
  }
  
    create():void {
      this.service.create(this.usuario, this.id_cat).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.id_cat}/usuarios`]);
      this.service.mensagem("Usuario criado com sucesso!");
      }, err =>{
        this.router.navigate([`categorias/${this.id_cat}/usuarios`]);
        this.service.mensagem("Erro ao criar novo usuario! Tente mais tarde");
      });
    }  

     cancel(): void {
      this.router.navigate([`categorias/${this.id_cat}/usuarios`]);
     }

    getMessage() {
      if (this.titulo.invalid) {
        return "O campo Titulo deve conter entre 3 e 100 caracteres";
      }

      if (this.nome_autor.invalid) {
        return "O campo NOME DO USUARIO deve conter entre 3 e 100 caracteres";
      }

      if (this.texto.invalid) {
        return "O campo Texto deve conter entre 10 e 2.000.000 caracteres";
      }
      return false;
    }
  }
  
