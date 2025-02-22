import { Component } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate = new Date;

  saveUser(){
    this.user.birthDate = this.birthDate.getTime()
    console.log('This user is' , this.user);
  }

}
