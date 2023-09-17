import {album} from "./interfaces/app.interface";

export class AlbumsServices {
  public albums: album[] = {
    id: 1,
    name: 'this is album test Name 1',
    year: 1990,
    albumArt: '/asset/2-food.jpg',
    songs: [
      {
        trackNumber: 1,
        name: 'song Name 1',
        duration: '4:40'
      },
      {
        trackNumber: 2,
        name: 'song Name 2',
        duration: '4:27'
      },
      {
        trackNumber: 3,
        name: 'song Name 3',
        duration: '4:12'
      },
      {
        trackNumber: 4,
        name: 'song Name 4',
        duration: '4:00'
      },
    ]
  }
}
