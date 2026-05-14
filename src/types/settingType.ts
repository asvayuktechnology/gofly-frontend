export interface Settings {
  _id: string
  logo?: string
  bannerFile?: string
  section?: { header?: string; subtitle?: string }
  faq?: { question: string; answer: string }[]
  numberSpeak?: { title: string; value: string }[]
  socialLinks?: {
    facebook?: string
    instagram?: string
    twitter?: string
    telegram?: string
    youtube?: string
    linkedin?: string
    discord?: string
    whatsapp?: string
  }
  basicDetails?: {
    email?: string
    phoneNumber?: string
    whatsappNo?: string
    address?: string
  }
  websiteName?: string
  whyChooseUs?: string
  favicon?: string
}