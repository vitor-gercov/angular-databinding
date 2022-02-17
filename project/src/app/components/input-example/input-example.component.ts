import { Component, Input, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.scss']
})
export class InputExampleComponent implements OnInit {

  @Input() formControlValue: string = ''

  constructor(private snackbar: SnackbarService) { }

  ngOnInit(): void {
  }

}
