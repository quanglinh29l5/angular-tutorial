import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent {
  roles: string[] = ['Admin', 'Editor', 'Viewer', 'User', 'Manager', 'Guest'];
  getRandomStyle() {
    return {
      width: '120px',
      height: '50px',
      backgroundColor: this.getRandomColor(),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '5px',
      color: '#fff',
      fontWeight: 'bold',
    };
  }
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem(item: string) {
    this.items.push(item);
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
  }
  onClickAdd() {
    this.addItem('New Item');
  }
  onClickRemove(index: number) {
    this.removeItem(index);
  }

  onSubmit(form: NgForm) {
    console.log('Form submitted', form.value);
  }
}
