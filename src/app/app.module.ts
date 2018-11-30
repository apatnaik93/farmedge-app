import {NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HttpClientModule} from "@angular/common/http";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SMS} from '@ionic-native/sms';
import {NativeStorage} from "@ionic-native/native-storage";

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {UsagePage} from "../pages/usage/usage";
import {Usage1weekPage} from "../pages/usage1week/usage1week";
import {Usage2weekPage} from "../pages/usage2week/usage2week";
import {Usage1monthPage} from "../pages/usage1month/usage1month";
import {Usage3monthPage} from "../pages/usage3month/usage3month";
import {NewsPage} from "../pages/news/news";
import {MorePage} from "../pages/more/more";
import {EnterOtpPage} from "../pages/enter-otp/enter-otp";
import {RegisteredDevicesPage} from "../pages/registered-devices/registered-devices";
import {RegisterDevicePage} from "../pages/register-device/register-device";


import {HttpService} from "../services/http-service";
import {FirmsService} from "../services/firms-service";
import {UserService} from "../services/user.service";
import {ProfilePage} from "../pages/profile/profile";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UsagePage,
    Usage1weekPage,
    Usage2weekPage,
    Usage1monthPage,
    Usage3monthPage,
    NewsPage,
    MorePage,
    EnterOtpPage,
    RegisteredDevicesPage,
    RegisterDevicePage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UsagePage,
    Usage1weekPage,
    Usage2weekPage,
    Usage1monthPage,
    Usage3monthPage,
    NewsPage,
    MorePage,
    EnterOtpPage,
    RegisteredDevicesPage,
    RegisterDevicePage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    FirmsService,
    UserService,
    SMS,
    NativeStorage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
