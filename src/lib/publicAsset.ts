/** Resolve a public/ file path for the current Vite base URL (e.g. GitHub Pages). */
export function publicAsset(path: string): string {
  const normalized = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}
