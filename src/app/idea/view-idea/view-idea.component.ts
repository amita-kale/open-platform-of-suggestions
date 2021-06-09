import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentideaService } from '../studentidea.service';

@Component({
  selector: 'app-view-idea',
  templateUrl: './view-idea.component.html',
  styleUrls: ['./view-idea.component.css'],
})
export class ViewIdeaComponent implements OnInit {
  rejectvar = false;

  ideainfo = {
    title: '',
    description: '',
    benefits: '',
    createdon: null,
    department: '',
    authorname: '',
  };

  constructor(
    private route: ActivatedRoute,
    private studentideaService: StudentideaService
  ) {}

  ngOnInit(): void {
    // console.log();
    const id = this.route.snapshot.params.id;
    // this.ideainfo = this.studentideaService.getSpecificStudentByIndex(id);
    // this.ideainfo = this.studentideaService.getSpecificStudentByIndex(id);
    this.studentideaService.getIdeaById(id).subscribe((response: any) => {
      this.ideainfo = response;
    });
    console.log(this.ideainfo);
  }

  rejectClicked() {
    this.rejectvar = true;
    console.log(this.rejectvar);
  }
}
