import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { ProductoModel } from "src/app/models/producto.dto";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  listaProductos: ProductoModel[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.peticionGet("productos").subscribe((respuesta: any) => {
      respuesta.forEach(producto => {
        this.listaProductos.push(producto);
      });
    });
  }

  editarProducto(producto: ProductoModel){
    console.log("Producto a editar:", producto);
  }

  eliminarProducto(producto: ProductoModel){
    console.log("Producto a eliminar:", producto);
  }

}
