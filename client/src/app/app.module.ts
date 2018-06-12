

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatButtonModule, MatCheckboxModule } from '@angular/material';
//import {MatSnackBarModule} from '@angular/material/snack-bar';
//import {MatDatepickerModule} from '@angular/material/datepicker';
//import {MatNativeDateModule} from '@angular/material';
//import {MatDialogModule} from '@angular/material/dialog';
//import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import 'hammerjs';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RolateCanvasComponent } from './components/rolate-canvas/rolate-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RolateCanvasComponent
  ],
 // entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
  //  MatButtonModule, 
  //  MatCheckboxModule,
    BrowserAnimationsModule,
  //  MatDatepickerModule,
  //  MatNativeDateModule,
  //  MatSnackBarModule,
  //  MatDialogModule,
  //  MatFormFieldModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
     /* {
        path: 'shop',
        component: ShoppingComponent,
        canActivate:[LoginGuard]
      },*/
    ])
  ],
  exports: [/*MatButtonModule, MatCheckboxModule*/],
  providers: [
    /*{ provide: HTTP_INTERCEPTORS,
    useClass:,// MyHttpInterceptor,
    multi: true}*/
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

