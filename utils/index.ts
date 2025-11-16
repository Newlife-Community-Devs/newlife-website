// Color palette for prayer cards
const PRAYER_CARD_COLORS = [
  "#FFF200", // Yellow
  "#28DEEB", // Cyan
  "#BBF2B9", // Light Green
  "#55CF6F", // Green
  "#A82BA4", // Purple
  "#FF6B6B", // Red
  "#4ECDC4", // Teal
  "#FFE66D", // Light Yellow
];

// Generate initials from a name
export const generateInitials = (name: string): string => {
  if (!name || name.trim() === "") return "AU";

  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

// Generate a consistent color for a name
export const generateColor = (name: string): string => {
  if (!name || name.trim() === "") {
    return "#E50914"; // Red for anonymous
  }

  // Simple hash function to consistently assign colors
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % PRAYER_CARD_COLORS.length;
  return PRAYER_CARD_COLORS[index];
};

// Format timestamp to readable format
export const formatTimestamp = (isoString: string): string => {
  const date = new Date(isoString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Less than a minute ago
  if (diffInSeconds < 60) {
    return "Just now";
  }

  // Less than an hour ago
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }

  // Less than a day ago
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }

  // Less than a week ago
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  }

  // Format as date
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
};
