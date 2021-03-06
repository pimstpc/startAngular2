import { Component, OnInit } from '@angular/core';
import { StudentlistService } from './studentlist.service';
import { IStudent } from './studentlist';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  providers: [StudentlistService],
})
export class StudentlistComponent implements OnInit {
  students: IStudent[];
  constructor(private _studentlistService: StudentlistService) {
    console.log(this._studentlistService.getStudent());
    this.students = this._studentlistService.getStudent();
  }

  ngOnInit() {}
}
