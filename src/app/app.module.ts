import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { FulfillmentPlanViewerComponent } from './fulfillment-plan-viewer/fulfillment-plan-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OMFServiceService } from './omfservice.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HomeComponent,
    OrderComponent,
    FulfillmentPlanViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [OMFServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
