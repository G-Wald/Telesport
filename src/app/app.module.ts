import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OlympicComponent } from './pages/olympic/olympic.component';
import { ParticipationComponent } from './pages/participation/participation.component';
import { InformationboxComponent } from './informationbox/informationbox.component';
import { InformationBoxListComponent } from './information-box-list/information-box-list.component';
import { ChartsModule } from 'ng2-charts';
import { PiechartComponent } from './piechart/piechart.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, OlympicComponent, ParticipationComponent, InformationboxComponent, InformationBoxListComponent, PiechartComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
