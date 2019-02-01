class Cache {
  loadState = () => {
    try {
      const cachedState = localStorage.getItem("state");
      if (!cachedState) return undefined;

      return JSON.parse(cachedState);
    } catch (error) {
      return undefined;
    }
  };

  saveState = state => {
    try {
      const packedState = JSON.stringify(state);
      localStorage.setItem("state", packedState);
    } catch (error) {
      return false;
    }
  };

  clearCache = () => localStorage.clear();
  removeItemInCache = key => localStorage.removeItem(key);
}

export default Cache;
