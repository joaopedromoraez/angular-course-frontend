import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../../services/courses.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) { }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe({
        next: () => this.onSucess(),
        error: () => this.onError()
      })
  }

  onCancel() {
    this.location.back()
  }

  private onSucess() {
    this.snackBar.open('Curso salvo com sucesso', '', { duration: 5000 })
    this.location.back()
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso', '', { duration: 5000 })
  }

}