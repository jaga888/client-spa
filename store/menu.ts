import {defineStore} from "pinia";

export const useMenuStore = defineStore('menu', () => {
    const isOpen = ref<boolean>(false);
    const setStatusModal = (status: boolean) => {
        isOpen.value = status;
    }

    return {
        isOpen,
        setStatusModal,
    }
})