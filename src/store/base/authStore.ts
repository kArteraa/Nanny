import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
    email: string;
    password: string;
}

interface AuthState {
    users: User[];
    currentUser: User | null;
    register: (user: User) => boolean; // true = успех, false = уже существует
    login: (user: User) => boolean; // true = успех, false = не найден
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            users: [],
            currentUser: null,
            register: (newUser) => {
                const exists = get().users.some(
                    (u) => u.email === newUser.email
                );
                if (exists) return false;
                set((state) => ({
                    users: [...state.users, newUser],
                    currentUser: newUser,
                }));
                return true;
            },
            login: (user) => {
                const match = get().users.find(
                    (u) =>
                        u.email === user.email && u.password === user.password
                );
                if (!match) return false;
                set({ currentUser: match });
                return true;
            },
            logout: () => set({ currentUser: null }),
        }),
        {
            name: "auth-storage",
        }
    )
);
