import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ForLoopComponentComponent } from './for-loop-component/for-loop-component.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, ForLoopComponentComponent, ClassBindingComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
