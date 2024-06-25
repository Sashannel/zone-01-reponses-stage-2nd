function flat(arr, depth = 1) {
  return arr.reduce((acc, cur) => {
    if (depth > 0 && Array.isArray(cur)) {
      return acc.concat(flat(cur, depth - 1));
    } else {
      return acc.concat([cur]);
    }
  }, []);
}
