export default class EwsFormControlController {
  constructor() {
    this.name = 'ewsFormControl';

    this.translateCodebook = (code) => {
      let selectedBook = this.options.filter( (codebook) => {
        return codebook.code === code
      });

      return (selectedBook[0] && selectedBook[0].displayValue) || '';
    }
  }
}

