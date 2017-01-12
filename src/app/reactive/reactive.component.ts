import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form: FormGroup;

  constructor(private fb:FormBuilder ) {
    this.form = fb.group({
      // name: 'Gafur',
      name: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(3)
      ])],
      address: ['',Validators.required],
      'contact': fb.group({
        email: '',
        phone:''
      })
    })
  }

  ngOnInit() {
  }

}
