import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { nasaObject } from '../../shared/nasaObject.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent {
  public element: nasaObject | null = null;

  constructor(private router: Router) {
    const extras = this.router.getCurrentNavigation()?.extras;
    if (extras && extras.state && extras.state!['element']) {
      this.element = this.router.getCurrentNavigation()?.extras.state!['element'];
    } else {
      this.router.navigate(['dashboard']);
    }
  }

  public goBack(): void {
    this.router.navigate(['dashboard']);
  }
}
