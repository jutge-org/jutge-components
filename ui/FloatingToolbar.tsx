'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type FloatingToolbarProps = {
    children: ReactNode
    className?: string
}

export default function FloatingToolbar(props: FloatingToolbarProps) {
    return (
        <div className={cn('fixed bottom-4 right-4 z-40 w-full', props.className)}>
            <div className="h-12 w-full flex flex-row items-center justify-end gap-4 ">
                {props.children}
            </div>
        </div>
    )
}
