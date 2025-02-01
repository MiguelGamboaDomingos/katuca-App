const STORAGE_KEY = 'blockchain_monitor_user';

export const storage = {
  getUser: () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  },
  
  setUser: (user: any) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  },
  
  clearUser: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};