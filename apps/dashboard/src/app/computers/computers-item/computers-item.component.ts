import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputersService } from '@ngrx-computers/core-data';

@Component({
  selector: 'ngrx-computers-computers-item',
  templateUrl: './computers-item.component.html',
  styleUrls: ['./computers-item.component.scss']
})
export class ComputersItemComponent implements OnInit {
  _computer$;
  public get computer$() {
    return this._computer$;
  }
  public set computer$(value) {
    this._computer$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private computerService: ComputersService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.computer$ = this.computerService.findOne(id);
    });
  }

  goBackToComputers() {
    this.router.navigate(['/computers']);
  }
}
