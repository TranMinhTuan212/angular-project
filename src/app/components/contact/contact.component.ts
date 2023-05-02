import { Component, ChangeDetectorRef, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public messages: Array<string> = [];

  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('keyPress') keyPress!: ElementRef;

  constructor(private render: ChangeDetectorRef ){}

  addMessage(inputName: HTMLInputElement){
    if(inputName.value.trim().length > 0){
      this.messages.push(inputName.value)
      inputName.value = ''
      inputName.focus()
      this.render.detectChanges()
    }
  }

  toggleMessage(){
    this.contact.nativeElement.classList.toggle('d-none')
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
  

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addMessage(this.keyPress.nativeElement);
    }
  }
}
