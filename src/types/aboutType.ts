export interface AboutContent {
  title: string;
  subtitle: string;
  descriptionOne: string;
  descriptionTwo: string;
  image: string;
}

export interface JourneyTimeline {
  year: string;
  title: string;
  description: string;
  journeyImage: string;
}

export interface VideoSectionData {
  thumbnail: string;
  youtubeUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface AboutData {
  _id: string;
  bannerImage: string;
  aboutContent: AboutContent;
  journeyTimeline: JourneyTimeline[];
  videoSection: VideoSectionData;
  faqs: FAQ[];
  isActive: boolean;
  createdAt: string;
}
