import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ideaService } from '../idea.service';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css'],
})
export class NewIdeaComponent implements OnInit {
  isEdit = false;
  studentidea = {
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

  ngOnInit(): void {
    if (this.routeParam.snapshot.params.ui) {
      this.isEdit = true;
      const stud = this.ideaservice.getSpecificStudentByIndex(
        this.routeParam.snapshot.params.ui
      );
      this.studentidea = {
        title: stud.title,
        description: stud.description,
        benefits: stud.benefits,
        department: stud.department,
        createdon: stud.createdon,
        authorname: stud.authorname,
      };
    }
  }
  submitClicked() {
    const studentidea = {
      title: this.studentidea.title,
      description: this.studentidea.description,
      benefits: this.studentidea.benefits,
      department: this.studentidea.department,
      createdon: this.studentidea.createdon,
      authorname: this.studentidea.authorname,
    };

    if (this.isEdit == false) {
      this.ideaservice.addidea(studentidea);
    } else {
      this.ideaservice.updateStudent(
        this.routeParam.snapshot.params.ui,
        studentidea
      );
    }

    this.router.navigate(['./idea/view-all-ideas']);
  }
}
