import { HttpClient } from "@angular/common/http";
import { signal, inject, OnInit, Component } from "@angular/core";
import { Router, ActivatedRoute, RouterLink } from "@angular/router";

import {ProvinciaInterface} from "../Models/ProvinciaInterface";

@Component({
  selector: 'app-provincia',
  imports: [RouterLink],
  templateUrl: './provincia.html',
  styleUrl: './provincia.css',
})
export class Provincia implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);
  private route = inject(ActivatedRoute);


  ListaProvincias = signal<ProvinciaInterface[]>([]);
  ngOnInit(): void {
    const codeComunidad = this.route.snapshot.paramMap.get('idCcaa');
    if (codeComunidad) {
      this.cargandoProvincias(codeComunidad);
    }
  }

  cargandoProvincias(code: string){
    const data = "../data/provincias.json";
    this.http.get<ProvinciaInterface[]>(data).subscribe({
      next: (provincias) => {
        const fitradas = provincias.filter(p => p.parent_code === code);
        this.ListaProvincias.set(fitradas);

      },
      error: (error) => {
        console.error("Error al cargar las provincias:", error);
      }
    });
  }


  onProvincias(event: Event) {
  const select = event.target as HTMLSelectElement;
  const codeProvincia = select.value;

  console.log('CHANGE', codeProvincia);

  if (!codeProvincia) return;

  console.log('Enviando a las poblaciones de la provincia', codeProvincia);
  this.router.navigate(['/poblaciones', codeProvincia]);
}

}

  
