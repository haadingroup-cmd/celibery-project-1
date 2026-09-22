import { useEffect, useState } from "react";

/**
 * Probes whether at least one <source> candidate for each video is
 * decodable by the current browser. Returns a map of index -> "no usable
 * source found", so callers can fall back to a poster image gracefully.
 */
export function useVideoAvailability(sourceSets: string[][]) {
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  useEffect(() => {
    let cancelled = false;

    sourceSets.forEach((sources, i) => {
      let remaining = sources.length;
      let anySucceeded = false;

      sources.forEach((src) => {
        const probe = document.createElement("video");
        const settle = (ok: boolean) => {
          if (cancelled) return;
          anySucceeded = anySucceeded || ok;
          remaining -= 1;
          if (remaining === 0 && !anySucceeded) {
            setFailed((prev) => ({ ...prev, [i]: true }));
          }
        };
        probe.addEventListener("loadedmetadata", () => settle(true));
        probe.addEventListener("error", () => settle(false));
        probe.preload = "metadata";
        probe.src = src;
        probe.load();
      });
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return failed;
}
