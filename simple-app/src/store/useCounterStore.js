import {devtools, persist} from "zustand/middleware";
import {create} from "zustand";

let counterStore = (set) => ({
  count: 1,
  increase: () => set((state) => ({count: state.count + 1})),
  decrease: () => set((state) => ({count: state.count - 1})),
  reset: () => set({count: 1}),
  setNumber: (number) => set({count: number})
});

counterStore = devtools(counterStore);
counterStore = persist(counterStore, {name: 'counter-storage'});

export const useCounterStore = create(counterStore);