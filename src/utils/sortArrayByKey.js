export const sortArrayByKey = (array, orderKey, sortType, ignoreCase) => {
  const sortedArray = array.sort((a, b) => {
    if (typeof (a[orderKey]) === 'string' && ignoreCase === true) {
      if (a[orderKey] && b[orderKey]) {
        if (a[orderKey].toLowerCase() > b[orderKey].toLowerCase()) return 1;
        if (a[orderKey].toLowerCase() < b[orderKey].toLowerCase()) return -1;
      } else if (a[orderKey] && !b[orderKey]) {
        return 1;
      } else if (!a[orderKey] && b[orderKey]) {
        return -1;
      } else {
        return 0;
      }
    } else {
      if (a[orderKey] > b[orderKey]) return 1;
      if (a[orderKey] < b[orderKey]) return -1;
    }
    return 0;
  });

  if (sortType === 'desc' && sortedArray) {
    sortedArray.reverse();
  }
  return sortedArray;
}
