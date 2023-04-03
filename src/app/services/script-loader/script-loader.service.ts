import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  private scripts: { [url: string]: BehaviorSubject<boolean> } = {};

  loadScript(url: string): BehaviorSubject<boolean> {
    if (!this.scripts[url]) {
      this.scripts[url] = new BehaviorSubject<boolean>(false);

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;

      script.onload = () => {
        this.scripts[url].next(true);
        this.scripts[url].complete();
      };

      script.onerror = (error: Event | string) => {
        this.scripts[url].error(error);
      };

      document.body.appendChild(script);
    }

    return this.scripts[url];
  }

}

