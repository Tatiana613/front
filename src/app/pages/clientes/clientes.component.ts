import { Component, OnInit } from "@angular/core";
import { holdReady } from "jquery";
import { ClienteModel } from "src/app/models/cliente.dto";
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  listaClientes: ClienteModel[] = [];
  lala="hola";

  constructor(private httpService: HttpService) { }

  ngOnInit() {

    this.consultaClientes();

  }

  consultaClientes(){
    this.listaClientes=[];
    this.httpService.peticionGet("clientes").subscribe((respuesta: any) => {
      respuesta.forEach(cliente => {
        this.listaClientes.push(cliente);
      });
    });
  }

  editarCliente(cliente: ClienteModel){
    this.lala=cliente.cedula;
    console.log("Cliente a editar:", cliente);
    alert("El cliente a editar es:"+ cliente.cedula);
  }

  eliminarCliente(cliente: ClienteModel){
    this.httpService.peticionDelete("clientes", cliente.cedula).subscribe( (respuesta: any)=>{
      console.log("Respuesta: ", respuesta);
      //console.log("Se eliminó el cliente: ", cliente.cedula);

    } );
    console.log("Cliente a eliminar:", cliente);
    alert("El cliente a eliminar es:"+ cliente.cedula);
  }

}
