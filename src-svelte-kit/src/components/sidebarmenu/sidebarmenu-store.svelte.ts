import { writable } from 'svelte/store';

// Open state
export const sidebarOpen = writable(false);

export const toggleSidebar = () => sidebarOpen.update((state) => !state);
export const closeSidebar = () => sidebarOpen.set(false);
export const openSidebar = () => sidebarOpen.set(true);
