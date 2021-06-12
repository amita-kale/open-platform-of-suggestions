import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Idea } from 'src/app/shared/models/idea.model';
import { ideaService } from '../idea.service';

@Component({
  selector: 'app-view-idea',
  templateUrl: './view-idea.component.html',
  styleUrls: ['./view-idea.component.css'],
})
export class ViewIdeaComponent implements OnInit {
  // rejectvar = false;
  idea: Idea;
  // ideainfo = {
  //   title: '',
  //   description: '',
  //   benefits: '',
  //   createdon: null,
  //   department: '',
  //   authorname: '',
  // };

  constructor(
    private route: ActivatedRoute,
    private ideaService: ideaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    // this.ideainfo = this.studentideaService.getSpecificStudentByIndex(id);
    this.ideaService.getIdeaById(id).subscribe((response: any) => {
      this.idea = response;
    });
    console.log(this.idea);
  }

  goBack() {
    history.back();
  }

  // rejectClicked() {
  //   // this.rejectvar = true;
  //   // console.log(this.rejectvar);
  // }
}
