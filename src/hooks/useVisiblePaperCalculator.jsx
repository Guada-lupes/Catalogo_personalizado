import { useMemo } from "react";

export function useVisiblePaperCalculator(currentLocation, numOfPapers) {
  const visiblePaperIds = useMemo(() => {
    const pageIds = [];
    
    if (!numOfPapers || !currentLocation) return pageIds;
    const start = Math.max(1, currentLocation - 2);
    const end = Math.min(numOfPapers, currentLocation + 2);
    for (let id = start; id <= end; id++) {
      pageIds.push(id);
    }
    return pageIds;
  }, [currentLocation, numOfPapers]);
  return visiblePaperIds;
}
