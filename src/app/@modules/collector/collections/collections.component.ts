import { Component, OnInit } from '@angular/core';
import types from '../../../../assets/files/collectionTypes.json';
import { BaseComponent } from '../../base.component';
import { CollectionsService } from '../../../@core/services/collections.service';
import { ToastrService } from 'ngx-toastr';
import { ApiResponse } from '../../../@core/models/ApiResponse';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.sass']
})
export class CollectionsComponent extends BaseComponent implements OnInit {

  public newCollection = { name: '', type: 1 };
  public collectionTypes;

  constructor(public service: CollectionsService,
    public toastr: ToastrService) {
    super();
    this.collectionTypes = types;
  }

  ngOnInit() {
    this.loadData();
  }

  createCollection() {
    this.loading = true;

    // this.service.all()
    // .subscribe((response: ApiResponse) => {
    //   this.loading = false;
    //   if (response.result) {
    //     window.location.replace('');
    //   } else {
    //     this.toastr.error(response.message);
    //   }
    // }, (error) => {
    //   this.loading = false;
    //   this.toastr.error('Ha ocurrido un error inesperado por favor vuelve a intentarlo.');
    //   console.log('server error!', error);
    // });
  }

}
