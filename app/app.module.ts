import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { CoursesComponent } from './courses.component'
import { AutoGrowDirective } from './auto-grow.directive'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    CoursesComponent,
    AutoGrowDirective
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
