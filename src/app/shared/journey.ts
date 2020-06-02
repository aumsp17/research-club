export interface Journey {
  name: {
    full: {
      en: string,
      th: string
    },
    nickname: {
      en: string,
      th: string
    }
  },
  profile: {
    imageUrl: string,
    caption: string
  },
  year: number,
  dateAdded: string,
  deleted: boolean
}
