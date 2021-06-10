import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  studentideas = [];
  ideas = [];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.homeService.getIdea().subscribe((response: any) => {
      this.studentideas = response;
      this.ideas = response;
    });
  }

  viewallideadetail(i, item) {
    // console.log('index:', i, item);
    this.router.navigate(['/idea/view-idea/' + item.id]);
  }
  statusClicked(status) {
    this.studentideas = this.ideas.filter((ele) => {
      return ele.status == status;
    });
  }
}
