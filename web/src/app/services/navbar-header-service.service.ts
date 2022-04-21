import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

export interface INavHeader {
  title: string;
  isSubScreen: boolean;
  previousUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavbarHeaderService {
  constructor() { }

  public navHeaderSource = new BehaviorSubject<INavHeader>({} as INavHeader);
  private resizeChartDB: Subject<any> = new Subject<any>();

  changeHeader(header: INavHeader) {
    this.navHeaderSource.next({...header});
  }

  getHeader(): Observable<INavHeader> {
    return this.navHeaderSource.asObservable();
  }

  onToggleMenu() {
    if (!this.resizeChartDB) {
      this.resizeChartDB = new Subject<any>();
    }
    return this.resizeChartDB.asObservable();
  }

  resizeChartDashboard() {
    if (this.resizeChartDB) {
      this.resizeChartDB.next('');
    }
  }

}
