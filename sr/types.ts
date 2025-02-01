export interface ScrapItem {
  id: string;
  type: string;
  weight: number;
  quality: 'good' | 'fair' | 'poor';
  price: number;
  location: {
    lat: number;
    lng: number;
  };
  images: string[];
  userId: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  phone?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image';
}