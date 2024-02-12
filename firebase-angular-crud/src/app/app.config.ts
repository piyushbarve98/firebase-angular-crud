import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"angular-firebase-crud-565d0","appId":"1:329197232491:web:b8b0721ef04c3a87dcac2e","storageBucket":"angular-firebase-crud-565d0.appspot.com","apiKey":"AIzaSyBDJ3Mad3iPB6Uc4uY1zdZAFmEzR31PFxg","authDomain":"angular-firebase-crud-565d0.firebaseapp.com","messagingSenderId":"329197232491"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
