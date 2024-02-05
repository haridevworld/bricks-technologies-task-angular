import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
export interface PeriodicElement {
  Hash:number;
  ItemAndDescription: string;
  Qty: number;
  Tax: any;
  Rate: number;
  TaxableAmount:number;
  Amount:number;
}


export interface TaxSummary{
  TaxDetails:any
  TaxableAmountAED:any
  TaxAmountAED:any
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Hash: 1, ItemAndDescription: 'Lorem epsum', Qty: 1.0079,Rate:17578, Tax:"5%" , TaxableAmount: 15564,Amount:
442111},
  {Hash: 2, ItemAndDescription: 'Lorem epsum', Qty: 1.0079,Rate:1333, Tax:"5%" , TaxableAmount: 15564,Amount:
442111},
  {Hash: 3, ItemAndDescription: 'Lorem epsum', Qty: 1.0079,Rate:13442, Tax:"5%" , TaxableAmount: 15564,Amount:
442111},
  {Hash: 4, ItemAndDescription: 'Lorem epsum', Qty: 1.0079,Rate:1+5454, Tax:"5%" , TaxableAmount: 15564,Amount:
442111},
  {Hash: 5, ItemAndDescription: 'Lorem epsum', Qty: 1.0079,Rate:15467, Tax:"5%" , TaxableAmount: 15564,Amount:
442111},
  {Hash: 6, ItemAndDescription: 'Lorem epsum', Qty: 1.0079,Rate:1467, Tax:"5%" , TaxableAmount: 15564,Amount:
442111},
  {Hash: 7, ItemAndDescription: 'Lorem epsum', Qty: 1.0079,Rate:15446, Tax:"5%" , TaxableAmount: 15564,Amount:
442111},
  {Hash: 8, ItemAndDescription: 'Lorem epsum', Qty: 1.0079,Rate:1546, Tax:"5%" , TaxableAmount: 15564,Amount:
442111},
  {Hash: 9, ItemAndDescription: 'Lorem epsum', Qty: 1.0079,Rate:1848, Tax:"5%" , TaxableAmount: 15564,Amount:
442111},
  {Hash: 10, ItemAndDescription: 'Lorem epsum', Qty: 1.0079,Rate:1548, Tax:"5%" , TaxableAmount: 15564,Amount:
442111},
];


const TAX_SUMMARY:TaxSummary[]=[
   {TaxDetails: 'Zero Rate (0%) ', TaxableAmountAED: 'Lorem epsum', TaxAmountAED: 1.0079},
 
]
@Component({
  selector: 'app-angmattasktwo',
  standalone: true,
 imports: [MatButtonModule, MatDividerModule, MatIconModule,MatGridListModule,MatTableModule],
  templateUrl: './angmattasktwo.component.html',
  styleUrl: './angmattasktwo.component.css'
})
export class AngmattasktwoComponent {
 displayedColumns: string[] = ['Hash', 'ItemAndDescription', 'Qty', 'Tax','Rate','TaxableAmount','Amount'];
  dataSource = ELEMENT_DATA;

  displayColumnsTaxSummary:string[]=['TaxDetails','TaxableAmountAED','TaxAmountAED']
  dataSourceTaxSummary = TAX_SUMMARY
}
