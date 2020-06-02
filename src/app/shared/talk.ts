import { firestore } from 'firebase';

export interface Talk {
  date: firestore.Timestamp,
  speaker: {
    name: {
      th: string,
      en: string
    },
    id: string
  }
  topic: string,
  tags: Array<string>,
  imageUrl: {
    thumbnail: string,
    poster: string,
    avatar: string
  },
  description: string,
  url: string,
  views: number,
  deleted: boolean
}
