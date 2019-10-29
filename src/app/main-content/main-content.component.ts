import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}
@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAddButton = false;
  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Tom',
        lastName: 'Brady',
        course: 'Swimming',
        editMode: false
      },
      {
        id: 2,
        firstName: 'Kevin',
        lastName: 'Lopez',
        course: 'Running',
        editMode: false
      },
      {
        id: 3,
        firstName: 'Pao',
        lastName: 'Rock',
        course: 'Walking',
        editMode: false
      },
      {
        id: 4,
        firstName: 'Homer',
        lastName: 'Tintin',
        course: 'Flying',
        editMode: false
      }
    ];
  }
  addStudent() {
    this.studentArray.unshift({
      id: null,
      firstName: null,
      lastName: null,
      course: null,
      editMode: true
    });
    this.disableAddButton = true;
  }
  removeStudent(index: number) {
    this.studentArray.splice(index, 1);
  }
  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAddButton = false;
    this.sort('asc');
  }

  sort(direction: string) {

    this.studentArray.sort((a: IStudent, b: IStudent) => {
      if (a.id < b.id) {
        if (direction === 'asc') {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (direction === 'asc') {
          return 1;
        } else {
          return -1;
        }
      }
      // return a.id > b.id ? -1 : 1;
    });
  }
}







