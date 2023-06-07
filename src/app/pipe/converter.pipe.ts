import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(amount: number, baseCurrency: string, targetCurrency: string, conversionRates: any): number {
    if (baseCurrency && targetCurrency && amount) {
      if (baseCurrency === targetCurrency) {
        return amount;
      } else {
        const rate = conversionRates[baseCurrency][targetCurrency];
        return amount * rate;
      }
    } else {
      return 0;
    }
  }

}
