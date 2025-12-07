"use client"

import * as React from "react"
import {
  Check,
  ChevronDown
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Combobox({
	propositions,
	value,
	setValue,
  hide = [],
}: {
	propositions: { value: string, label: string }[],
	value: string,
	setValue: React.Dispatch<React.SetStateAction<string>>,
  hide?: string[]
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] justify-between"
        >
          {value
            ? propositions.find((proposition) => proposition.value === value)?.label
            : "Select property"}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search property..." className="h-9" />
          <CommandList>
            <CommandEmpty>No property found.</CommandEmpty>
            <CommandGroup>
              {propositions.filter(p => !hide.includes(p.value)).map((proposition) => (
                <CommandItem
                  key={proposition.value}
                  value={proposition.value}
                  keywords={[proposition.label]}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {proposition.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === proposition.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
