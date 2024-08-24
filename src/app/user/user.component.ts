import { Component, computed, signal, Signal,Input,input, Output, EventEmitter } from '@angular/core';

import{User} from './user.model';
import { CardComponent } from '../Shared/card/card.component';
//import { DUMMY_USERS } from '../dummy-users';

//const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length);

///type User={
  //id:string;
 // avatar:string;
 // name:string;
//}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

//selectedUser=signal(DUMMY_USERS[randomIndex]);
//imagePath=computed(() => 'assets/users/'+this.selectedUser().avatar)

//get imagePath(){
 // return 'assets/users/'+this.selectedUser.avatar
//}

//onSelectUser()
//{
  //const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length); 
  //this.selectedUser.set(DUMMY_USERS[randomIndex]);
//}

//Decorator


//Type
@Input({required:true}) user!:User;

//To highlited the selected user button
@Input({required:true}) selected!:Boolean;

//@Input({required:true}) id!:string;
//@Input({required:true}) avatar!:string;
//@Input({required:true}) name!:string;

@Output() select=new EventEmitter();
 
//getter function
get imagePath(){
  return 'assets/users/'+this.user.avatar
 }

//Signals
//avatar=input<string>();

//avatar=input.required<string>();
//name=input.required<string>();

//select=output<string>();

//imagePath=computed(()=>{return 'assets/users/'+this.avatar});

onSelectUser(){
  this.select.emit(this.user.id);
}

}
