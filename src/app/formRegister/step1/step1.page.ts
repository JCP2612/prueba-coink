import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Step1Page {

  constructor(private  router: Router) { }

  formulariodos(){
    this.router.navigate(['/step2']);
  }

  retroceder(){
    this.router.navigate(['/login'])
  }

}
