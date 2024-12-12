export interface Match {
  id: string;
  name: string;
  age: number;
  location: string;
  image?: string;
  bio: string;
  interests: string[];
  compatibility?: number;
  lastActive: string;
}