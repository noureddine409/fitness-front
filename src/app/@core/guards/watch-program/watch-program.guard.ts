import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {PaymentService} from "../../services/payment/payment.service";
import {catchError, Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WatchProgramGuard implements CanActivate {

  constructor(private paymentService: PaymentService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const programId = route.params.id;
    return this.paymentService.enrolled(programId).pipe(
      map(enrollment => true),
      catchError(() => {
        this.router.navigate(['/error-404']);
        return of(false);
      })
    );
  }

}
