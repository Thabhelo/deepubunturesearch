import { create } from 'zustand'

interface ToastState {
  title: string
  description?: string
  duration?: number
}

interface ToastStore {
  toasts: (ToastState & { id: string })[]
  addToast: (toast: ToastState) => void
  removeToast: (id: string) => void
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = Math.random().toString(36).substr(2, 9)
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id }]
    }))
    
    // Auto remove after duration
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id)
      }))
    }, toast.duration || 3000)
  },
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id)
    }))
  }
}))

export function toast(options: ToastState) {
  const { addToast } = useToastStore.getState()
  addToast(options)
} 