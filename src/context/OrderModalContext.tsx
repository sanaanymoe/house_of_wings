import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

type OrderModalContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const OrderModalContext = createContext<OrderModalContextValue | null>(null)

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  return (
    <OrderModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </OrderModalContext.Provider>
  )
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext)
  if (!ctx) throw new Error('useOrderModal must be used within OrderModalProvider')
  return ctx
}
