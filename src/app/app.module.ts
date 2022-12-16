import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterComponent } from './counter/counter.component';
import { ForLoopComponentComponent } from './for-loop-component/for-loop-component.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoListBaseModule } from './todo-list-base/todo-list-base.module';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { UsersBaseModule } from './users-base/users-base.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ForLoopComponentComponent,
    ClassBindingComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TodoListBaseModule,
    PokemonBaseModule,
    UsersBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
