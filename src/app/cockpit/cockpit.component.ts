import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // Since now, we are using local-reference to get the server name hence newServerName is no longer needed.
  // newServerName = '';

  // newServerContent = '';

  @ViewChild('serverContentInput', { static: false })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  // onAddServer() {
  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput); //This gives type 'ElementRef'

    // console.log(nameInput);
    // console.log(nameInput.value);
    // nameInput.value = 'ansh';
    //Here, we are demonstrating we can control the properties of the HTML template through our typescript code via Local reference; however not recommended.
    // console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
