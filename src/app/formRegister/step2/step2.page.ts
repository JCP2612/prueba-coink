import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Step2Page {

  constructor(private  router: Router) { }

  siguiente(){
    this.router.navigate(['/step3'])
  }

  retroceder(){
    this.router.navigate(['/step1'])
  }

}
