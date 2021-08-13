import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-postcode',
  templateUrl: './postcode.component.html',
  styleUrls: ['./postcode.component.css']
})
export class PostcodeComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  pathVariable: string = "";

  postcode: string = "";
  huisnummer: number = 0;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (data: any) => { this.pathVariable = data.id }
    );
    this._activatedRoute.queryParams.subscribe(
      (data: any) => { this.getData(data) }
    );
  }

  getData(data: any): void {
    this.postcode = data.postcode;
    this.huisnummer = data.huisnummer;
  }

  onButtonClick(): void {
    this._router.navigate(['leden'], { queryParams: { naam: "Musk" } });
  }



}
