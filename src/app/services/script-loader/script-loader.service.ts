import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  private loadedLibraries: { [url: string]: BehaviorSubject<boolean> } = {};

  loadScript(url: string): BehaviorSubject<boolean> {
    if (this.loadedLibraries[url]) {
      return this.loadedLibraries[url];
    }

    this.loadedLibraries[url] = new BehaviorSubject<boolean>(false);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = () => {
      this.loadedLibraries[url].next(true);
      this.loadedLibraries[url].complete();
    };

    script.onerror = (error: Event | string) => {
      this.loadedLibraries[url].error(error);
    };

    document.body.appendChild(script);

    return this.loadedLibraries[url];
  }

}

