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
    { label: 'GBP - British Pound', value: 'GBP' },
    { label: 'INR - Indian Rupee', value: 'INR' },
    { label: 'CAD - Canadian Dollar', value: 'CAD' }
  ];

  conversionRates: { [key: string]: { [key: string]: number } } = {
    USD: {
      EUR: 0.93,
      GBP: 0.73,
      INR: 73.21,
      CAD: 1.23
    },
    EUR: {
      USD: 1.18,
      GBP: 0.86,
      INR: 86.27,
      CAD: 1.45
    },
    GBP: {
      USD: 1.37,
      EUR: 1.16,
      INR: 98.56,
      CAD: 1.66
    },
    INR: {
      USD: 0.014,
      EUR: 0.012,
      GBP: 0.010,
      CAD: 0.017
    },
    CAD: {
      USD: 0.82,
      EUR: 0.69,
      GBP: 0.60,
      INR: 58.12
    }
  };

  ngOnChanges() {
    this.convertCurrency();
  }

  convertCurrency() {
    if (this.baseCurrency && this.targetCurrency && this.amount) {
      if (this.baseCurrency === this.targetCurrency) {
        this.convertedAmount = this.amount; // Set converted amount to the input amount
      } else {
        this.rate = this.conversionRates[this.baseCurrency][this.targetCurrency];
        this.convertedAmount = this.amount * this.rate;
      }
    } else {
      this.convertedAmount = 0;
    }
  }
}
