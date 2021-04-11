import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentideaService } from '../studentidea.service';

@Component({
  selector: 'app-view-all-ideas',
  templateUrl: './view-all-ideas.component.html',
  styleUrls: ['./view-all-ideas.component.css']
})
export class ViewAllIdeasComponent implements OnInit {


  studentideas =
    {
      // title: '',
      // description: '',
      // benefits: '',
      // department: '',
    }


  constructor(private studentideaService: StudentideaService, private router: Router) { }

  ngOnInit(): void {
    this.studentideas = this.studentideaService.getStudents();
  }

}
