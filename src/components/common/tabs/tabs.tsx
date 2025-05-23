import * as TabsPrimitive from "@radix-ui/react-tabs";
import clsx from "clsx";
import * as React from "react";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
   React.ElementRef<typeof TabsPrimitive.List>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
   <TabsPrimitive.List
      ref={ref}
      className={clsx("inline-flex w-full h-10 items-center justify-start p-1 border-b border-neutral-900", className)}
      {...props}
   />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
   React.ElementRef<typeof TabsPrimitive.Trigger>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
   <TabsPrimitive.Trigger
      ref={ref}
      className={clsx(
         "inline-flex w-[114px] text-lg text-white items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gradient-primary-bottom data-[state=active]:text-white border-b border-transparent data-[state=active]:border-primary transition-colors duration-200",
         className,
      )}
      {...props}
   />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
   React.ElementRef<typeof TabsPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
   <TabsPrimitive.Content
      ref={ref}
      className={clsx(
         "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
         className,
      )}
      {...props}
   />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
