import { Component, OnInit } from "@angular/core";
import { ClienteModel } from "src/app/models/cliente.dto";
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  listaClientes: ClienteModel[] = [];

  list={
  cedula:"",
  nombreCliente:"",
  telefono:"",
  direccion:"",
  correoElec:""}

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
    this.list.cedula=cliente.cedula;
    this.list.nombreCliente=cliente.nombreCompleto;
    this.list.telefono=cliente.telefono;
    this.list.direccion=cliente.direccion;
    this.list.correoElec=cliente.correoElectronico;

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
