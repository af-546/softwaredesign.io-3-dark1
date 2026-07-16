export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function avatarColor(name: string): string {
  const colors = [
    "#0F62FE",
    "#0848C7",
    "#3A3A3A",
    "#4A4A4A",
    "#5C5C5C",
    "#6B6B6B",
    "#0A0A0A",
    "#047A5F",
  ];
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
}
