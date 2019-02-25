
export class BaseComponent {

    public loading = false;
    public currentCall: any;
    public service: any;
    public toastr: any;
    public data: any;

    constructor() {}

    loadData() {
      this.loading = true;
      if (this.currentCall) {
        this.currentCall.unsubscribe();
      }

      this.currentCall = this.service.getAll()
        .subscribe(response => {
          this.loading = false;
          if (response.result) {
            this.data = response.data;
            console.log(this.data);
          } else {
            this.toastr.error(response.message);
          }
      }, (error) => {
        this.loading = false;
        this.toastr.error('Ha ocurrido un error inesperado por favor vuelve a intentarlo.');
        console.log('server error!', error);
      });
    }

}
