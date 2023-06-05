import { Component, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnChanges {

  baseCurrency!: string;
  targetCurrency!: string;
  amount!: number;
  convertedAmount!: number;
  rate!: number
  currencies = [
    { label: 'USD - United States Dollar', value: 'USD' },
    { label: 'EUR - Euro', value: 'EUR' },
    { label: 'GBP - British Pound', value: 'GBP' }
  ];


  conversionRates: { [key: string]: { [key: string]: number } } = {
    USD: {
      EUR: 0.93,
      GBP: 0.73
    },
    EUR: {
      USD: 1.18,
      GBP: 0.86
    },
    GBP: {
      USD: 1.37,
      EUR: 1.16
    }
  };

  ngOnChanges() {
    this.convertCurrency();
  }

  convertCurrency() {
    if (this.baseCurrency && this.targetCurrency && this.amount) {
      this.rate = this.conversionRates[this.baseCurrency][this.targetCurrency];
      this.convertedAmount = this.amount * this.rate;
    } else {
      this.convertedAmount = 0;
    }
  }
}
