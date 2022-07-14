import { Injectable } from '@angular/core';
import { IStudent } from './studentlist';

@Injectable({
  providedIn:'root'
})
export class StudentlistService{
  getStudent() : IStudent[]{
    return[
      {id:'stu01',name:'pp',gender:'Female',dateOfBirth:'16/12/1997'},
      {id:'stu02',name:'kk',gender:'Male',dateOfBirth:'30/07/1997'},
      {id:'stu03',name:'nn',gender:'Male',dateOfBirth:'17/04/2000'},
      {id:'stu04',name:'cc',gender:'Female',dateOfBirth:'26/05/2000'},
    ]
  }
  constructor(){}
}