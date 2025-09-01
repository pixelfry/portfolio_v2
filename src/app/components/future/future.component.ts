import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-future',
  imports: [ RouterLink, NgOptimizedImage ],
  templateUrl: './future.component.html',
  styleUrl: './future.component.css'
})
export class FutureComponent {

}
