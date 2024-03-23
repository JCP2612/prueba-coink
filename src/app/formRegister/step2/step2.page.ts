import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonImg, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonContent, IonImg, IonText]
})
export class Step2Page {

  constructor() { }

}
