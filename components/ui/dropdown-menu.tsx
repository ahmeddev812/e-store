"use client"

import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { Check, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root {...props} />
}

function DropdownMenuTrigger({
  className,
  ...props
}: MenuPrimitive.Trigger.Props) {
  return (
    <MenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      className={cn("outline-none", className)}
      {...props}
    />
  )
}

function DropdownMenuPortal({
  ...props
}: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal {...props} />
}

function DropdownMenuPopup({
  className,
  ...props
}: MenuPrimitive.Popup.Props) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner className="z-50" sideOffset={4}>
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-popup"
          className={cn(
            "min-w-40 overflow-hidden rounded-lg border border-white/20 bg-[#1E293B]/95 backdrop-blur-xl p-1 shadow-2xl data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

function DropdownMenuItem({
  className,
  ...props
}: MenuPrimitive.Item.Props) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm text-white/80 outline-none select-none hover:bg-white/10 data-[highlighted]:bg-white/10 data-[highlighted]:text-white",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  ...props
}: MenuPrimitive.CheckboxItem.Props) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 pl-8 text-sm text-white/80 outline-none select-none hover:bg-white/10 data-[highlighted]:bg-white/10 data-[highlighted]:text-white",
        className
      )}
      {...props}
    >
      <MenuPrimitive.CheckboxItemIndicator className="absolute left-2 flex items-center">
        <Check className="size-3.5 text-[#F57224]" />
      </MenuPrimitive.CheckboxItemIndicator>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: MenuPrimitive.RadioGroup.Props) {
  return <MenuPrimitive.RadioGroup {...props} />
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: MenuPrimitive.RadioItem.Props) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 pl-8 text-sm text-white/80 outline-none select-none hover:bg-white/10 data-[highlighted]:bg-white/10 data-[highlighted]:text-white",
        className
      )}
      {...props}
    >
      <MenuPrimitive.RadioItemIndicator className="absolute left-2 flex items-center">
        <Check className="size-3.5 text-[#F57224]" />
      </MenuPrimitive.RadioItemIndicator>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

function DropdownMenuGroup({
  className,
  ...props
}: MenuPrimitive.Group.Props) {
  return (
    <MenuPrimitive.Group
      data-slot="dropdown-menu-group"
      className={cn(className)}
      {...props}
    />
  )
}

function DropdownMenuGroupLabel({
  className,
  ...props
}: MenuPrimitive.GroupLabel.Props) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-group-label"
      className={cn("px-2 py-1.5 text-xs font-medium text-white/50", className)}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dropdown-menu-separator"
      className={cn("mx-1 my-1 h-px bg-white/10", className)}
      {...props}
    />
  )
}

function DropdownMenuSubmenuTrigger({
  className,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-submenu-trigger"
      className={cn(
        "relative flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm text-white/80 outline-none select-none hover:bg-white/10 data-[highlighted]:bg-white/10 data-[highlighted]:text-white",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto size-3.5 text-white/40" />
    </MenuPrimitive.SubmenuTrigger>
  )
}

function DropdownMenuSubmenu({
  ...props
}: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot {...props} />
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuPopup,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuSeparator,
  DropdownMenuSubmenuTrigger,
  DropdownMenuSubmenu,
}
