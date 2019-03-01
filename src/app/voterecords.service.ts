import { Injectable } from '@angular/core';
import {VoteRecord} from './voterecord';
import {VOTERECORDS} from './mock-voterecords'
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VoterecordsService {
  getVoteRecords(): Observable<VoteRecord[]> {
    return of(VOTERECORDS);
  }
  constructor() { }
}
