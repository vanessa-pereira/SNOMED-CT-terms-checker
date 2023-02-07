import { Injectable } from '@angular/core';
import { SNOMED_API_RESPONSE } from 'src/app/Domain/SNOMED_API_RESPONSE';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, HTTP_PROVIDERS} from '@angular/http';


@Injectable()
export class SnomedCallService {

  constructor(private http: Http){
  }

  
getSnomedList1(conceptID: string): Observable <SNOMED_API_RESPONSE[]> {
  return this.http.get('https://browser.ihtsdotools.org/snowstorm/snomed-ct/browser/MAIN/2023-01-31/concepts/' + conceptID + ' ' ,)
                      .map((res) => this.extractDataFromLists(res).json())
                          
    }

    private extractDataFromLists(res: Response | any){
      if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status);
      }
        let body = res;
        return body || [];    
    }


/*  private Url = 'https://browser.ihtsdotools.org/snowstorm/snomed-ct/browser/MAIN/2023-01-31/concepts/' + conceptID + ';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSnomedList(): Observable <SNOMED_API_RESPONSE[]>{
    return this.http.get<SNOMED_API_RESPONSE[]>(this.Url)
  }*/


}