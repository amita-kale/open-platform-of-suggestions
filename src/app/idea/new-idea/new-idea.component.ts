
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentideaService } from '../studentidea.service';



@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {

  studentidea =
    {
      title: '',
      description: '',
      benefites: '',
      department: '',
    }



  constructor(private studentideaService: StudentideaService, private router: Router) { }

  ngOnInit(): void {
  }
  submitClicked() {
    const studentidea =
    {
      title: this.studentidea.title,
      description: this.studentidea.description,
      benefites: this.studentidea.benefites,
      department: this.studentidea.department,
    }

    this.studentideaService.addidea(studentidea);
    this.router.navigate(['view-all-ideas']);



  }
}
