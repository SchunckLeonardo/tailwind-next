'use client'

import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

interface SelectInputProps extends Select.SelectProps {
  children: ReactNode
  placeholder: string
}

export function SelectInput({
  children,
  placeholder,
  ...props
}: SelectInputProps) {
  return (
    <Select.Root {...props}>
      <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none data-[placeholder]:text-zinc-600">
        <Select.Value placeholder={placeholder} className="text-black" />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] rounded-lg border border-zinc-200 bg-white shadow-sm"
          sideOffset={8}
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
