import {Component, OnInit} from '@angular/core';
import {SideNavService} from '../services/side-nav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isVisible = false;
  name: string;
  namesArray: string[] = [];

  constructor(private sideNavService: SideNavService) {
    // this.isVisible = this.sideNavService.isNavOpen;
    this.sideNavService.isOpen.subscribe(data => {
      this.isVisible = data;
    });
    console.log(this.isVisible, 'jestem z konstruktora');
  }

  onButtonClick(): void {
    // this.isVisible = !this.isVisible;
    console.log(this.sideNavService.isNavOpen, 'Jestem z serwisu');
    this.sideNavService.toggleNavBar();
  }

  ngOnInit(): void {
  }

  onSubmit(name): void {
    this.namesArray.push(name);
    this.name = '';
    console.log(this.namesArray);
  }

  onDeleteButtonClick(i): void {
    this.namesArray.splice(i, 1);
  }
}
