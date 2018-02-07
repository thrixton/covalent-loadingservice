import { Component, OnInit } from '@angular/core';
import { TdLoadingService } from '@covalent/core/loading';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-load-form',
  templateUrl: './load-form.component.html',
  styleUrls: ['./load-form.component.scss']
})
export class LoadFormComponent implements OnInit {

  overlayStarSyntax: boolean = false;

  overlayDemo: any = {
    name: '',
    description: '',
  };

  constructor(private _loadingService: TdLoadingService) {}

  ngOnInit(): void {
    this._loadingService.register('overlayStarSyntax');
  }

  toggleOverlayStarSyntax(): void {
    if (this.overlayStarSyntax) {
      this._loadingService.register('overlayStarSyntax');
    } else {
      this._loadingService.resolve('overlayStarSyntax');
    }
    this.overlayStarSyntax = !this.overlayStarSyntax;
  }


}
