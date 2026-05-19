import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AlertComponent } from './_components/alert.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AlertComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}