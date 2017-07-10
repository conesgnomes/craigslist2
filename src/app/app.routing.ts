import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { HousingComponent } from './housing/housing.component';
import { ForSaleDetailComponent } from './for-sale-detail/for-sale-detail.component';
import { HousingDetailComponent } from './housing-detail/housing-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'for-sale',
    component: ForSaleComponent
  },
  {
    path: 'housing',
    component: HousingComponent
  },
  {
    path: 'posts/:id',
    component: ForSaleDetailComponent
  },
  {
    path: 'posts/:id',
    component: HousingDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
