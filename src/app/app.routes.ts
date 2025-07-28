import { Routes } from '@angular/router';
import { ProductFeedbackDashboardComponent } from './layout/product-feedback-dashboard/product-feedback-dashboard.component';

export const routes: Routes = [
  {
    path:'',
    component: ProductFeedbackDashboardComponent,
    title: 'Product Feedback app',
    children: [
      {
        path: '',
        loadChildren: () => import('@features/suggestions').then(s => s.SUGGESTIONS_ROUTES)
      }
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '', // use a 404 component later;
  }
];
