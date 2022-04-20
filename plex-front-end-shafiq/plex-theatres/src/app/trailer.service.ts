import { Injectable } from '@angular/core';
import { Trailer } from './trailer';

@Injectable({
  providedIn: 'root',
})
export class TrailerService {
  trailers: Trailer[] = [
    {
      id: 1,
      title: '6 Undergound',
      source: 'https://www.youtube.com/embed/YLE85olJjp8',
    },
    {
      id: 2,
      title: 'The Adam Project',
      source: 'https://www.youtube.com/embed/X9ebeNKkc08',
    },
    {
      id: 3,
      title: 'Spiderman: No Way Home',
      source: 'https://www.youtube.com/embed/rt-2cxAiPJk',
    },
  ];

  trailerToBeUpdated: Trailer = new Trailer();
  trailerToBeUpdatedIndex: number = 0;

  constructor() {}

  getTrailers(): Trailer[] {
    return this.trailers;
  }

  setTrailerToBeUpdated(givenTrailer: Trailer, givenIndex: number): void {
    this.trailerToBeUpdated = givenTrailer;
    this.trailerToBeUpdatedIndex = givenIndex;
  }
}
