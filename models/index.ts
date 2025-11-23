export type LayoutComponent = React.FC<{
  children: React.ReactNode;
}>;
export interface EventData {
  id: number;
  title: string;
  preview: string;
  date: string;
  time: string;
  location: string;
  description: string;
  badge: string;
}

export interface UserSession {
  email: string;
  token: string;
  token_type: string;
  expires: string;
}
export interface Prayer {
  id: string;
  user: {
    name: string;
    initials: string;
    color: string;
  };
  timestamp: string;
  prayer: {
    title: string;
    content: string;
  };
}

export interface PrayerRequest {
  id: string;
  name: string;
  status: "Open" | "Closed";
  phone: string;
  dateSubmitted: string;
  canDelete?: boolean;
}
