import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  isNavOpen = new BehaviorSubject(false);
  isOpen = this.isNavOpen.asObservable();

  constructor() {
  }

  toggleNavBar(): void {
    // this.isNavOpen = !this.isNavOpen;
    this.isNavOpen.next(!this.isNavOpen.value);
    // console.log(this.isNavOpen, 'Jestem z serwisu');
  }
}


