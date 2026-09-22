/** Given "/videos/foo.mp4" returns "/videos/foo.webm" (same basename, webm sibling). */
export function webmSrc(mp4Src: string) {
  return mp4Src.replace(/\.mp4$/i, ".webm");
}
