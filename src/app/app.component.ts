import { Component } from '@angular/core';
import { HostListener} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { Inject } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  public navIsShown: boolean = true;
  public navIsSolid: boolean = false;
  public scrollPosition = this.document.body.scrollTop;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  title = 'app works!';
  @HostListener("window:scroll", [])
    isNavShown() {
      let number = this.document.body.scrollTop;
      if (number < this.scrollPosition && number < 75) {
        this.navIsSolid = false;
        this.navIsShown = true;
      } else if (number > this.scrollPosition) {
        this.navIsShown = false;
      } else if (!this.navIsShown && number < this.scrollPosition) {
        this.navIsSolid = true;
        this.navIsShown = true;
      }
      this.scrollPosition = number;
    }

}
