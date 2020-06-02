export interface Faculty {
  name: {
    full: {
      en: string,
      th: string
    }
  },
  profile: {
    imageUrl: string,
    caption: string
  },
  department: string,
  dateAdded: string,
  deleted: boolean
}
