import { Component, Inject, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { NOTES_API_SERVICE } from '../../notesApi.service';
import { ROOTSCOPE } from '../../rootScope.service';

@Component({
  selector: 'note-element',
  templateUrl: './note-element.component.html',
  styleUrls: ['./note-element.component.scss']
})
export class NoteElementComponent implements OnInit {

  @Input() note;
  @Input() notes;

  isEdit = false;

  constructor(
    private translate: TranslateService,
    @Inject(NOTES_API_SERVICE) private notesService: any,
    @Inject(ROOTSCOPE) private $rootScope: any
  ) {

    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.notesService.updateNote(this.note.id, this.note.title).then((data) => console.log('noteData:', data));
  }

  catchEnter(event) {
    if (event.keyCode === 13) {
      this.hideEditor();
    }
  };

  hideEditor() {
    this.isEdit = false;
    this.updateNote();
  }

  showEditor() {
    this.isEdit = true;
  };

  updateNote() {
    this.notesService.updateNote(this.note.id, this.note.title).then(function (result) {
      console.log(JSON.stringify(result));
    });
  }

  deleteNote() {
    const confirmMessage = this.translate.instant('del_confirm');
    if (window.confirm(confirmMessage)) {
      this.$rootScope.$emit('startLoading');
      this.notesService.deleteNote(this.note.id).then(
        (result) => {
          console.log(result);
          this.$rootScope.$emit('stopLoading');

          // pseudo delete for demo task only!
          if (this.notes && this.notes.length) {
            this.notes.map((el, index) => {
              if (el.id === this.note.id) {
                this.notes.splice(index, 1);
              }
            });
          }
        },
        (error) => {
          console.log(error);
          this.$rootScope.$emit('stopLoading');
        });
    }
  }
}
