import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Computer, NotifyService, emptyComputer } from '@ngrx-computers/core-data';
import { ComputersFacade } from '@ngrx-computers/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngrx-computers-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
  form: FormGroup;
  selectedComputer$: Observable<Computer> = this.computersFacade.selectedComputer$;
  computers$: Observable<Computer[]> = this.computersFacade.allComputers$;

  constructor(
    private computersFacade: ComputersFacade,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.computersFacade.loadComputers();
    this.computersFacade.mutations$.subscribe(() => this.resetComputer());
  }

  resetComputer() {
    this.form.reset();
    this.selectComputer(emptyComputer);
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }

  selectComputer(computer: Computer) {
    this.computersFacade.selectComputer(computer.id);
    // this.selectedComputer = computer;
    this.form.patchValue(computer);
  }

  createComputer() {
    this.notify.notification(`You have created ${this.form.value.title}`);
    this.computersFacade.createComputer(this.form.value);
  }

  updateComputer() {
    this.notify.notification(`You have updated ${this.form.value.title}`);
    this.computersFacade.updateComputer(this.form.value);
  }

  saveComputer(computer: Computer) {
    if (computer.id) {
      this.updateComputer();
    } else {
      this.createComputer();
    }
  }

  deleteComputer(computer: Computer) {
    this.notify.notification(`You have deleted ${computer.make}`);
    this.computersFacade.deleteComputer(computer);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      make: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      ram: null,
      isDesktop: null
    });
  }
}
