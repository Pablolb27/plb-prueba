import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from '../../services/api.service';
import { nasaObject } from '../../shared/nasaObject.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public nasaObjects: nasaObject[] = [];

  constructor(private apiService: ApiService, private router: Router) {
    this.getInfoDays();
  }

  private getInfoDays(): void {
    for (let index = 0; index < 6; index++) {
      let date: string = this.calcDate(index);

      this.apiService.getInfo(date).subscribe((data: nasaObject) => {
        this.nasaObjects.push(data);
      });
    }
  }

  private calcDate(rest: number): string {
    const date = moment().subtract(rest, 'days');
    return date.format('YYYY-MM-DD');
  }

  public showDetalle(element: nasaObject): void {
    this.router.navigate(['detalle'], { state: { element } });
  }
}
