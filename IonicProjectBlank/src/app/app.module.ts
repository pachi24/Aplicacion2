import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http'
import { NewAddPage } from '../pages/addPage/addPage';
import { NewReadPage } from '../pages/readPage/readPage';
import { NewReadAllPage } from '../pages/readAllPage/readAllPage';
import { NewUpdatePage } from '../pages/updatePage/updatePage';
import { NewDeletePage } from '../pages/deletePage/deletePage';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewAddPage,
    NewReadPage,
    NewReadAllPage,
    NewUpdatePage,
    NewDeletePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewAddPage,
    NewReadPage,
    NewReadAllPage,
    NewUpdatePage,
    NewDeletePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
