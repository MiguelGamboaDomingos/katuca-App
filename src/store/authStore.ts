import { create } from 'zustand';
import { User } from '../types/auth';
import { storage } from '../utils/storage';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: storage.getUser(),
  isAuthenticated: !!storage.getUser(),
  setUser: (user) => {
    if (user) {
      storage.setUser(user);
    } else {
      storage.clearUser();
    }
    set({ user, isAuthenticated: !!user });
  },
  logout: () => {
    storage.clearUser();
    set({ user: null, isAuthenticated: false });
  },
}));