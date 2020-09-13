import {Component, OnInit} from '@angular/core';
import {SideNavService} from '../services/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  isOpen = true;

  constructor(private siedeNavService: SideNavService) {
    this.siedeNavService.isOpen.subscribe(data => {
      this.isOpen = data;
    });
  }

  onClickButton(): void {
    this.siedeNavService.toggleNavBar();
    // this.isOpen = this.siedeNavService.isNavOpen;
    console.log(this.siedeNavService.isNavOpen);
  }

  ngOnInit(): void {
  }

}
