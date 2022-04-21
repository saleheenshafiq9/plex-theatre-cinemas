import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Trailer } from 'src/app/trailer';
import { TrailerService } from 'src/app/trailer.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div
      class="modal-header"
      style="  background: rgb(25, 16, 72);
  background: radial-gradient(
    circle,
    rgba(25, 16, 72, 1) 0%,
    rgba(11, 6, 35, 1) 50%,
    rgba(15, 9, 52, 1) 100%
  );
  width: 600px"
    >
      <h4
        class="modal-title text-light"
        style="font-family: Quicksand; font-weight: 600"
      >
        {{ this.trailers[index - 1].title }}
      </h4>
    </div>
    <div
      class="modal-body"
      style="  background: rgb(25, 16, 72);
  background: radial-gradient(
    circle,
    rgba(25, 16, 72, 1) 0%,
    rgba(11, 6, 35, 1) 50%,
    rgba(15, 9, 52, 1) 100%
  );
  width: 600px"
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YLE85olJjp8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div
      class="modal-footer"
      style="  background: rgb(25, 16, 72);
  background: radial-gradient(
    circle,
    rgba(25, 16, 72, 1) 0%,
    rgba(11, 6, 35, 1) 50%,
    rgba(15, 9, 52, 1) 100%
  );   width: 600px"
    >
      <button
        type="button"
        class="btn btn-outline-light"
        (click)="activeModal.close('Close click')"
        style="font-family: Quicksand;"
      >
        Close
      </button>
    </div>
  `,
})
export class NgbdModalContent {
  index = 0;
  constructor(
    public activeModal: NgbActiveModal,
    private trailerService: TrailerService
  ) {}
  trailers: Trailer[] = [];

  ngOnInit(): void {
    this.trailers = this.trailerService.getTrailers();
    console.log(this.trailerService.getTrailers());
    console.log(this.trailers[0].source);
  }
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  faPlay = faPlay;
  trailers: Trailer[] = [];
  constructor(
    private modalService: NgbModal,
    private trailerService: TrailerService
  ) {}

  ngOnInit(): void {
    this.trailers = this.trailerService.getTrailers();
    console.log(this.trailerService.getTrailers());
  }

  open(givenIndex: number) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.index = givenIndex;
  }
}
