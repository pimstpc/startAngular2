import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test/test.component';
import { SimpleComponent } from './hooks/simple.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HomeComponent } from './home/home.component';
import { NopagetodisplayComponent } from './nopagetodisplay/nopagetodisplay.component';

import { Router, RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'home', component: HomeConponent },
  { path: 'students', component: StudentlistComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NopagetodisplayComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponent,
    SimpleComponent,
    StudentlistComponent,
    HomeConponent,
    NopagetodisplayComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
