import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Error404Component } from './componentes/error404/error404.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LogoutComponent } from './componentes/logout/logout.component';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalSobreMiComponent } from './modal/sobre-mi-modal/modal-sobre-mi.component';
import { ModalExperienciaComponent } from './modal/experiencia-modal/modal-experiencia.component';
import { ModalEducacionComponent } from './modal/educacion-modal/modal-educacion.component';
import { ModalProyectoComponent } from './modal/proyecto-modal/modal-proyecto.component';
import { ModalNavbarComponent } from './modal/navbar-modal/modal-navbar.component';
import { RedesModalComponent } from './modal/redes-modal/redes-modal.component';
import { ModalRegistrateComponent } from './modal/registrate-modal/modal-registrate.component';
import { ModalPanelComponent } from './modal/panel--modal/modal-panel.component';

import { ModalHardSkillsComponent } from './modal/hard-skills-modal/modal-hard-skills.component';
import { InterceptorService } from './servicios/interceptor.service';
import { PersonaService } from './servicios/persona.service';






@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    EducacionComponent,
    ExperienciaComponent,
    HardSkillsComponent,
    ProyectosComponent,
    Error404Component,
    FooterComponent,
    PanelComponent,
    LoginComponent,
    IndexComponent,
    ModalComponent,
    ModalNavbarComponent,
    RegistrateComponent,
    LogoutComponent,
    BotonLoginComponent,
    ModalEducacionComponent,
    ModalExperienciaComponent,
  
    ModalHardSkillsComponent,
    ModalNavbarComponent,

ModalPanelComponent,
    ModalProyectoComponent,
    ModalRegistrateComponent,
    ModalSobreMiComponent,
    NavbarComponent,

    RedesModalComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
  providers: [PersonaService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
    bootstrap: [AppComponent]
   
})
export class AppModule { }
