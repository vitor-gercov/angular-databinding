import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputComponentFormControl: FormControl = this.formBuilder.control('', [Validators.required])

  constructor(private formBuilder: FormBuilder) { }
}
