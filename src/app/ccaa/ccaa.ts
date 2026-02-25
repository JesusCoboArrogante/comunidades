import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, signal, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {CcaaInterface} from "../Models/CcaaInterface";

@Component({
  selector: 'app-ccaa',
  imports: [CommonModule],
  templateUrl: './ccaa.html',
  styleUrl: './ccaa.css',
})
export class Ccaa implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);

  ListaComunidades = signal<CcaaInterface[]>([]);
  loadig = signal(true);

  ngOnInit(): void {
      this.cargandoComunidades();
  }

  cargandoComunidades() {
    const data = "../data/ccaa.json";
    this.http.get<CcaaInterface[]>(data).subscribe({
      next: (result) => {
        this.ListaComunidades.set(result);
        this.loadig.set(false); 
      },
      error : (err) => console.error('Error cargando comunidades', err)
   });
  }

  onComunidades(event: Event){
    const elemento = event.target as HTMLSelectElement;
    const code = elemento.value;

    if (code) {
      console.log('Enviando a las provincias de la comunidad', code);
      this.router.navigate(['/provincias', code]);
    }
  }
}
