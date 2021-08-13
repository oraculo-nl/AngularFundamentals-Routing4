import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leden',
  templateUrl: './leden.component.html',
  styleUrls: ['./leden.component.css']
})
export class LedenComponent implements OnInit {

  naam: string = "";

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(
      (data: any) => { this.naam = data.naam }
    );
  }

}
