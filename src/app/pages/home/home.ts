import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
imports: [RouterLink]

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
