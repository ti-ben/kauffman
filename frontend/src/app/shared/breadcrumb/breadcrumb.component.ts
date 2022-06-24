import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnDestroy {

  public crumbTitle?:string;
  public titleSubs$:Subscription;

  constructor(private router:Router) {
    this.titleSubs$ = this.getArguments().subscribe(({crumbTitle})=> {
      this.crumbTitle = crumbTitle;
      document.title = `Kauffman - ${crumbTitle}`
    })
  }

  ngOnDestroy() {
    this.titleSubs$?.unsubscribe();
  }

  getArguments(){
    return this.router.events.pipe(
      filter((event:any) => event instanceof ActivationEnd),
      filter((event:ActivationEnd)=> event.snapshot.firstChild === null),
      map((event:ActivationEnd)=> event.snapshot.data)
    )
  }

}
