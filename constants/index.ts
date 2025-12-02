import { EventData, Prayer, PrayerRequest } from "@/models";

export enum PAGE_URL {
  PRAYER_REQUEST = "",
  ADMIN_LOGIN = "/prayer-request/admin/",
}
export enum API_BASE_URL {
  PRAYER = "https://newlife-prayer-wall-backend-1gq0w2ror.vercel.app/",
}

export const events: EventData[] = [
  {
    id: 1,
    preview: "FOP",
    title: "Festival of Prayer(21 days)",
    date: "November 17, 2025 - December 7, 2025",
    time: "7:00 PM",
    location: "Church Premises",
    description:
      "Special revival service to kick off the new year with spiritual renewal",
    badge: "Upcoming Event",
  },
  {
    id: 2,
    preview: "Experience",
    title: "Experience 2025",
    date: "December 29, 2025 - December 30, 2026",
    time: "7:00 pm",
    location: "Church Premises",
    description:
      "Join us for our annual Easter celebration with worship, fellowship, and renewal",
    badge: "Upcoming Event",
  },
];

export const samplePrayers: Prayer[] = [
  {
    id: "1",
    user: { name: "Anonymous User", initials: "AU", color: "#E50914" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for my faith. I've been going through a season of doubt and want to feel God's presence again.",
    },
  },
  {
    id: "2",
    user: { name: "Michelle Asante", initials: "MA", color: "#FFF200" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for my mom's upcoming surgery. We're trusting God for a successful procedure and quick recovery.",
    },
  },
  {
    id: "3",
    user: { name: "Michael Kuma", initials: "MK", color: "#28DEEB" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for healing. I've been feeling weak for months, and the doctors can't find the cause.",
    },
  },
  {
    id: "4",
    user: { name: "Anonymous User", initials: "AU", color: "#E50914" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for my faith. I've been going through a season of doubt and want to feel God's presence again.",
    },
  },
  {
    id: "5",
    user: { name: "Michelle Asante", initials: "MA", color: "#FFF200" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for my mom's upcoming surgery. We're trusting God for a successful procedure and quick recovery.",
    },
  },
  {
    id: "6",
    user: { name: "Michael Kuma", initials: "MK", color: "#28DEEB" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for healing. I've been feeling weak for months, and the doctors can't find the cause.",
    },
  },
  {
    id: "7",
    user: { name: "Emmanuel Lartey", initials: "EL", color: "#BBF2B9" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for our youth group that we'll be on fire for God and not get distracted by the world.",
    },
  },
  {
    id: "8",
    user: { name: "Emmanuel Osafo", initials: "EO", color: "#A82BA4" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for me as I start my own small business. I want to do everything with integrity and let God",
    },
  },
  {
    id: "9",
    user: { name: "Daniel Kuma", initials: "DK", color: "#55CF6F" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "I feel distant from God lately. My quiet times have gone dry, and I want to get back to that closeness I used to feel.",
    },
  },
  {
    id: "10",
    user: { name: "Emmanuel Lartey", initials: "EL", color: "#BBF2B9" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for our youth group that we'll be on fire for God and not get distracted by the world.",
    },
  },
  {
    id: "11",
    user: { name: "Emmanuel Osafo", initials: "EO", color: "#A82BA4" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for me as I start my own small business. I want to do everything with integrity and let God",
    },
  },
  {
    id: "12",
    user: { name: "Daniel Kuma", initials: "DK", color: "#55CF6F" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "I feel distant from God lately. My quiet times have gone dry, and I want to get back to that closeness I used to feel.",
    },
  },
  {
    id: "13",
    user: { name: "Redeem Dzokoto", initials: "RD", color: "#FFF200" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "My exams are next week. Please pray for focus, calmness, and success.",
    },
  },
  {
    id: "14",
    user: { name: "Anonymous User", initials: "AU", color: "#E50914" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for my faith. I've been going through a season of doubt and want to feel God's presence again.",
    },
  },
  {
    id: "15",
    user: { name: "Michael Kuma", initials: "MK", color: "#28DEEB" },
    timestamp: "9:55 AM",
    prayer: {
      title: "Prayer",
      content:
        "Please pray for healing. I've been feeling weak for months, and the doctors can't find the cause.",
    },
  },
];

export const mockPrayerRequests: PrayerRequest[] = [
  {
    id: "1",
    name: "Daniel Kuma",
    status: "Open",
    phone: "0234788949",
    dateSubmitted: "12/09/2025",
    canDelete: true,
  },
  {
    id: "2",
    name: "Emmanuel Lartey",
    status: "Closed",
    phone: "0234788949",
    dateSubmitted: "16/05/2025",
    canDelete: false,
  },
  {
    id: "3",
    name: "Emmanuel Osafo",
    status: "Open",
    phone: "0234788949",
    dateSubmitted: "17/09/2025",
    canDelete: true,
  },
  {
    id: "4",
    name: "Michael Kuma",
    status: "Closed",
    phone: "0234788949",
    dateSubmitted: "13/09/2025",
    canDelete: false,
  },
  {
    id: "5",
    name: "Anonymous User",
    status: "Closed",
    phone: "0234788949",
    dateSubmitted: "19/07/2025",
    canDelete: false,
  },
  {
    id: "6",
    name: "Redeem Dzokoto",
    status: "Open",
    phone: "0234788949",
    dateSubmitted: "12/10/2025",
    canDelete: false,
  },
  {
    id: "7",
    name: "Kofi Ayittey",
    status: "Closed",
    phone: "0234788949",
    dateSubmitted: "12/10/2025",
    canDelete: true,
  },
  {
    id: "8",
    name: "Anonymous User",
    status: "Closed",
    phone: "0234788949",
    dateSubmitted: "12/10/2025",
    canDelete: true,
  },
];
