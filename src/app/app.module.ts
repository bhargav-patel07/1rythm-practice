import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { ManageSPService } from './studio/manage-studio-profile/service profile/manage-sp.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ManageSPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
