import {
  BookOpenText,
  GraduationCap,
  Volleyball,
  Megaphone,
  HeartHandshake,
  Sprout,
  Moon,
  Presentation,
  PenLine,
  Music,
  Handshake,
  Leaf,
  ShoppingBag,
  Users,
  ListChecks,
  LayoutGrid,
  CalendarHeart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  BookOpenText,
  GraduationCap,
  Volleyball,
  Megaphone,
  HeartHandshake,
  Sprout,
  Moon,
  Presentation,
  PenLine,
  Music,
  Handshake,
  Leaf,
  ShoppingBag,
  Users,
  ListChecks,
  LayoutGrid,
  CalendarHeart,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
