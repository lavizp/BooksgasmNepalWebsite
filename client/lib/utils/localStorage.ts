export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('cartItems');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.log(err)
      return undefined;
    }
  }; 

  export const saveState = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cartItems', serializedState);
    } catch {
      // ignore write errors
    }
  };