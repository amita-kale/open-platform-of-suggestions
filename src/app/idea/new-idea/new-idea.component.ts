import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentideaService } from '../studentidea.service';

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
    authorname: '',
  };

  constructor(
    private studentideaService: StudentideaService,
    private router: Router,
    private routeParam: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.routeParam.snapshot.params.ui) {
      this.isEdit = true;
      const stud = this.studentideaService.getSpecificStudentByIndex(
        this.routeParam.snapshot.params.ui
      );
      this.studentidea = {
        title: stud.title,
        description: stud.description,
        benefits: stud.benefits,
        department: stud.department,
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
      authorname: this.studentidea.authorname,
    };

    if (this.isEdit == false) {
      this.studentideaService.addidea(studentidea);
    } else {
      this.studentideaService.updateStudent(
        this.routeParam.snapshot.params.ui,
        studentidea
      );
    }

    this.router.navigate(['./idea/view-all-ideas']);
  }
}
