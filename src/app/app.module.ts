import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeDeAt from "@angular/common/locales/de-AT";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { environment } from "@env/environment";
import { AppComponent } from "./app.component";

import { NgcCookieConsentConfig, NgcCookieConsentModule } from "ngx-cookieconsent";

registerLocaleData(localeDeAt);

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.cookieDomain,
    expiryDays: 30,
    secure: true
  },
  position: "bottom-right",
  theme: "classic",
  palette: {
    popup: {
      background: "#2195f3",
      text: "#ffffff",
      link: "#ffffff"
    },
    button: {
      background: "#ffffff",
      text: "#2195f3",
      border: "transparent"
    }
  },
  type: "info",
  content: {
    message: "Diese Website verwendet Cookies um ihnen die bestmögliche Nutzererfahrung zu bieten.",
    dismiss: "Verstanden",
    deny: "Refuse cookies",
    link: "Mehr erfahren",
    href: "/legal/data-protection",
    policy: "Cookie Policy"
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "de-at" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
