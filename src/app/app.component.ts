import { Component, TemplateRef, Input, ElementRef } from '@angular/core';

interface Task{
 title: string,
 is_canceled: boolean
}

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 tasks: Array<Task> = [
   {
     title: "Proyecto 1",
     is_canceled: false
   }
 ];

 //funcion borrar todo
 //metodo splice para eliminar todos los elementos el array
 clearToDo(){
   let do_delete = confirm("Desea borrar todas las tareas");
   if (do_delete){
     this.tasks.splice(0);
   }
 }

 //funcion añadir tarea
 //se añade al array de tareas como false 
 addTask(input: any){
   let value = input.value;
   input.value = "";
   this.tasks.push(
     {
       title: value,
       is_canceled: false
     });
 }

 //funcion confirmar tarea realizada
 //condicion para activar o desactivar 
 cancelTask(idx: number){
   if (this.tasks[idx].is_canceled){
     this.tasks[idx].is_canceled = false;
   }else{
     this.tasks[idx].is_canceled = true; 
   }
 }

 //funcion para borrar una tarea especifica
 deleteTask(idx: number){
   let do_delete = confirm("Desea borrar la tarea"); 
   if (do_delete){
     this.tasks.splice(idx, 1);
   }
 }

 //funcion editar tarea
 editTask(idx: number){
   let title = this.tasks[idx].title;
   let result = prompt("Editar Tarea", title);
   if (result !== null && result !== ""){
     this.tasks[idx].title = result;
   }
 }
}
 