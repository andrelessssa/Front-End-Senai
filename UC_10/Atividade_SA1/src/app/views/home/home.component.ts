import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { User } from 'src/app/models/user';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private noticiasServices: NoticiasService) { }
  listaNoticia = [] as Noticia[]

  ngOnInit(): void {
    this.carredarNoticias()
  }
  carredarNoticias(){
    this.noticiasServices.getNoticias().subscribe((noticiaRecebidas: Noticia[]) => {
     this.listaNoticia = noticiaRecebidas;
     console.log(this.listaNoticia);
    })

  }
  

 

}
