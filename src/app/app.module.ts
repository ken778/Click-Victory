import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPagePipe } from './pages/landing-page.pipe';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './services/auth.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule} from '@angular/forms'; 
import {AddproductsComponent} from '../app/components/addproducts/addproducts.component';
import {ProductspageComponent} from '../app/components/productspage/productspage.component';
import {AdditionalproductsComponent} from '../app/components/additionalproducts/additionalproducts.component';
import {FundspageComponent} from './components/fundspage/fundspage.component';
import {ProfileComponent} from './components/profile/profile.component';

import { FundsOutComponent } from './components/funds-out/funds-out.component';
import { RegistrationViewModule } from './modules/registration-view-module';
import { LoginPipe } from './pages/login.pipe';

 
 

@NgModule({
  
  declarations: [AppComponent,ProfileComponent,AdditionalproductsComponent,LandingPagePipe,AddproductsComponent,ProductspageComponent, FundspageComponent, FundsOutComponent, LoginPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    MatStepperModule,
    
    MatButtonModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },RegistrationViewModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
