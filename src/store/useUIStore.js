import { create } from "zustand";

/** Global state for transient interface controls shared by page sections. */
const useUIStore = create((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  isDonateModalOpen: false,
  openDonateModal: () => set({ isDonateModalOpen: true }),
  closeDonateModal: () => set({ isDonateModalOpen: false }),
  openFaqId: null,
  setOpenFaqId: (id) => set({ openFaqId: id })
}));

export default useUIStore;
