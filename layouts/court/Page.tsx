'use client'

import { CommandKDialog } from '@/components/CommandKDialog'
import LoginForm from '@/components/LoginForm'
import { useAuth } from '@/jutge-components/layouts/court/lib/Auth'
import CommandKProvider, { useCommandK } from '@/jutge-components/layouts/court/lib/CommandK'
import { JSX, ReactNode } from 'react'
import NavBar from './NavBar'

export type PageContext = {
    menu: string
    current?: string
    subMenu?: string
    subCurrent?: string
    subPrefix?: string
    title?: string
    subTitle?: JSX.Element | string
}

export interface PageProps {
    children: ReactNode[] | ReactNode
    public?: boolean
    pageContext: PageContext
}

export default function Page(props: PageProps) {
    const auth = useAuth()
    const cmdK = useCommandK()

    if (props.public || auth.user) {
        return (
            <>
                <CommandKProvider>
                    <NavBar pageContext={props.pageContext} />
                    <div className="mt-2 mb-16 sm:mt-8 px-2 container mx-auto">
                        {props.children}
                    </div>
                    <CommandKDialog open={cmdK.open} setOpen={cmdK.setOpen} />
                </CommandKProvider>
            </>
        )
    } else {
        return (
            <>
                <NavBar pageContext={{ menu: 'public', current: 'home' }} />
                <LoginForm />
            </>
        )
    }
}
