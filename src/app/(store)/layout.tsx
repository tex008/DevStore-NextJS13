import Header from '@/components/header'
import { ReactNode } from 'react'

interface StoreLayoutProps {
  children: ReactNode
}

export default function StoreLayout(props: StoreLayoutProps) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
