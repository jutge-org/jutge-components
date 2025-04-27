'use client'

import { Button } from '@/components/ui/button'
import { useCommandK } from '@/jutge-components/layouts/court/lib/CommandK'
import { MenuIcon } from 'lucide-react'

export default function CommandKToggle() {
    const commandK = useCommandK()

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => commandK.setOpen(true)}
            title="Command palette (⌘K)"
        >
            <MenuIcon />
            <span className="sr-only">Menu</span>
        </Button>
    )
}
