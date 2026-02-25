import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { PoblacionInterface } from "../Models/PoblacionInterface";

@Component({
  selector: 'app-poblacion',
  standalone: true,
  imports: [],
  templateUrl: './poblacion.html',
  styleUrl: './poblacion.css',
})
export class Poblacion implements OnInit {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);

  ListaPoblaciones = signal<PoblacionInterface[]>([]);

  ngOnInit(): void {
    const codeProvincia = this.route.snapshot.paramMap.get('idProvincia');
    if (codeProvincia) {
      this.cargandoPoblaciones(codeProvincia);
    } else {
      this.ListaPoblaciones.set([]);
    }
  }

  cargandoPoblaciones(codeProvincia: string) {
    // ✅ public/data/poblaciones.json -> /data/poblaciones.json
    const data = "data/poblaciones.json";

    this.http.get<PoblacionInterface[]>(data).subscribe({
      next: (poblaciones) => {
        const filtradas = poblaciones.filter(p => p.parent_code === codeProvincia);
        this.ListaPoblaciones.set(filtradas);
      },
      error: (error) => {
        console.error("Error al cargar las poblaciones:", error);
        this.ListaPoblaciones.set([]);
      }
    });
  }

  onPoblaciones(event: Event) {
    const codePoblacion = (event.target as HTMLSelectElement).value;
    if (!codePoblacion) return;

    console.log('Has seleccionado la población:', codePoblacion);
    // Si luego quieres ir a otra pantalla, aquí harías navigate(...)
  }
}
