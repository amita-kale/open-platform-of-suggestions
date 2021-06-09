import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ideaService } from '../idea.service';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css'],
})
export class NewIdeaComponent implements OnInit {
  studentidea = {
    id: null,
    title: '',
    description: '',
    benefits: '',
    department: '',
    createdon: null,
    authorname: '',
  };

  constructor(
    private ideaservice: ideaService,
    private router: Router,
    private routeParam: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  submitClicked() {
    this.ideaservice.postIdea(this.studentidea).subscribe(() => {
      this.router.navigate(['./idea/view-all-ideas']);
    });
  }
}
