import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { FulfillmentPlanViewerComponent } from './fulfillment-plan-viewer/fulfillment-plan-viewer.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "order", component: OrderComponent },
  { path: "viewer", component: FulfillmentPlanViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomeComponent, OrderComponent, FulfillmentPlanViewerComponent];
