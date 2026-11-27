import { useEffect, useRef, useState } from "react";

export function useClipboard(text: string) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current !== null) clearTimeout(resetTimer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setError("");
      setCopied(true);
      if (resetTimer.current !== null) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 1000);
    } catch {
      setCopied(false);
      setError("Copy failed. Please select and copy the text manually.");
    }
  };

  return { copied, error, copy };
}
