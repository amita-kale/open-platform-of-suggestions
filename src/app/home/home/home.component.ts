import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentideaService } from 'src/app/idea/studentidea.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  studentideas = [];
  ideas = [];

  constructor(
    private studentideaService: StudentideaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentideaService.getIdea().subscribe((response: any) => {
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
