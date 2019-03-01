import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Option } from './option';
import { MessageService} from './message.service';
import {OPTIONS} from './mock-options'

@Injectable({
  providedIn: 'root'
})
export class OptionPanelService {
  constructor(private messageService: MessageService) { }
  getOptions(): Observable<Option[]> {
    this.messageService.add("Option-Panel service: getting mock-options");
    return of(OPTIONS);
  }

}
