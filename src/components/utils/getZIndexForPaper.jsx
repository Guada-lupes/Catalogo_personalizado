
export function getZIndexForPaper(pageId, currentLocation, numOfPapers) {
  
  if (pageId < currentLocation) {
    return pageId;
  } else {
    return currentLocation - 1 + (numOfPapers - pageId + 1);
  }
}

