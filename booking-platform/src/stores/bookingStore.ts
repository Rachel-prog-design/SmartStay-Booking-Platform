import { create } from "zustand";

export const useBookingStore = create((set) => ({
  bookings: [],
  addBooking: (booking: any) =>
    set((state: any) => ({
      bookings: [...state.bookings, booking],
    })),
  cancelBooking: (id: string) =>
    set((state: any) => ({
      bookings: state.bookings.filter((b: any) => b.id !== id),
    })),
}));