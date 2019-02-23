class Cache {
  loadState = (...keys) => {
    try {
      const storage = keys.reduce((acc, key) => {
        const item = localStorage.getItem(key);
        return !item
          ? acc
          : {
              [key]: JSON.parse(item),
              ...acc
            };
      }, {});

      return storage;
    } catch (error) {
      return undefined;
    }
  };

  saveState = (key, state) => {
    try {
      const packedState = JSON.stringify(state);
      localStorage.setItem(key, packedState);
    } catch (error) {
      return false;
    }
  };

  clearCache = () => localStorage.clear();
  removeItemInCache = key => localStorage.removeItem(key);
}

export default Cache;
