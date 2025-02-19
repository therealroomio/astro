import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

interface Service {
  title: string;
  description: string;
  href: string;
}

interface NavItem {
  href: string;
  label: string;
}

interface DesktopNavProps {
  services: Service[];
  otherNavItems: NavItem[];
}

export default function DesktopNav({ services, otherNavItems }: DesktopNavProps) {
  return (
    <NavigationMenu className="max-w-none">
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#home"
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50"
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[800px] grid-cols-3 gap-3 p-4">
              {services.map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 focus:bg-neutral-100"
                >
                  <div className="text-sm font-medium leading-none text-foreground">
                    {service.title}
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {service.description}
                  </p>
                </a>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {otherNavItems.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink
              href={href}
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50"
            >
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
