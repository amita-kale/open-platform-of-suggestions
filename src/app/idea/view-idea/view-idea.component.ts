import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Idea } from 'src/app/shared/models/idea.model';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-view-idea',
  templateUrl: './view-idea.component.html',
  styleUrls: ['./view-idea.component.css'],
})
export class ViewIdeaComponent implements OnInit {
  idea: Idea;

  constructor(
    private route: ActivatedRoute,
    private ideaService: IdeaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.ideaService.getIdeaById(id).subscribe((response: any) => {
      this.idea = response;
    });
  }

  goBack() {
    history.back();
  }
}
