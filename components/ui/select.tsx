"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  defaultValue,
  value,
  onValueChange,
  ...props
}: SelectPrimitive.Root.Props<string, false>) {
  return (
    <SelectPrimitive.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      {...props}
    />
  )
}

function SelectTrigger({
  className,
  children,
  ...props
}: SelectPrimitive.Trigger.Props) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-lg border border-white/20 bg-white/10 backdrop-blur-xl px-3 py-1 text-sm text-white shadow-2xl transition-all outline-none hover:bg-white/15 focus-visible:border-[#F57224]/50 focus-visible:ring-3 focus-visible:ring-[#F57224]/20 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className="flex items-center">
        <ChevronDown className="size-4 text-white/60 transition-transform data-[open]:rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectValue({
  className,
  ...props
}: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("text-white/80", className)}
      {...props}
    />
  )
}

function SelectPopup({
  className,
  ...props
}: SelectPrimitive.Popup.Props) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner className="z-50" sideOffset={4}>
        <SelectPrimitive.Popup
          data-slot="select-popup"
          className={cn(
            "min-w-[var(--anchor-width)] overflow-hidden rounded-lg border border-white/20 bg-[#1E293B]/95 backdrop-blur-xl p-1 shadow-2xl data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className
          )}
          {...props}
        />
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "group/item relative flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm text-white/80 outline-none select-none hover:bg-white/10 data-[highlighted]:bg-white/10 data-[highlighted]:text-white",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemIndicator className="absolute left-2 flex items-center">
        <Check className="size-3.5 text-[#F57224]" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText className="ml-6">
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectGroup({
  className,
  ...props
}: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn(className)}
      {...props}
    />
  )
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-xs font-medium text-white/50", className)}
      {...props}
    />
  )
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPopup,
  SelectItem,
  SelectGroup,
  SelectLabel,
}
