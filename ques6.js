function saveObjectToLocalStorage(key, object) {
    const objectString = JSON.stringify(object);
    localStorage.setItem(key, objectString);
  }