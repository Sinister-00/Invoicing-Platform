import { create } from 'zustand';

import { emptyUser, ResponseUserData } from '../api/handleSignup';

type TUseUserStore = {
  userData: ResponseUserData;
  setUserData: (newUserData: ResponseUserData) => void;
  resetUser: () => void;
};

const useUserStore = create<TUseUserStore>((set) => ({
  userData: { ...emptyUser },
  setUserData: (newUserData) =>
    set((state) => ({ userData: { ...state.userData, ...newUserData } })),
  resetUser: () => set({ userData: { ...emptyUser } }),
}));

export default useUserStore;
