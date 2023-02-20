import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OlympicComponent } from './pages/olympic/olympic.component';
import { ChartsModule } from 'ng2-charts';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, OlympicComponent, CountryDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
