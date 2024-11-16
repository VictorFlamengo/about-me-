import { Component } from '@angular/core';
import { InicioComponent } from "./components/inicio/inicio.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { CardProgComponent } from "./components/card-prog/card-prog.component";
import { SocialComponent } from "./components/social/social.component";
import { MidiaComponent } from "./components/midia/midia.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InicioComponent, SobreComponent, CardProgComponent, SocialComponent, MidiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angport';
}
