import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

const useRefScrollProgress = (
  watch?: unknown
): [RefObject<HTMLDivElement>, number, number] => {
  const ref = useRef<HTMLDivElement>(null);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    if (rect) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop;

      setStart(offsetTop / document.body.clientHeight);
      setEnd((offsetTop + rect.height) / document.body.clientHeight);
    }
  }, [watch]);

  return [ref, start, end];
};

export default useRefScrollProgress;
