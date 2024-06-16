import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full px-10 py-5",
  {
    variants: {
      variant: {
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-[#977FFF] focus:border-input",
        primary:
          "text-white bg-gray-300 rounded-full outline-none active:bg-gray-400 bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] focus-visible:ring-0 focus-visible:ring-offset-0 hover:drop-shadow-[0_6px_6px_rgba(151,127,255,0.75)]",
        delete:
          "border border-input hover:bg-red-100/50 focus-visible:bg-red-100/50 bg-background focus-visible:ring-offset-0 focus-visible:ring-red-500 text-red-500 border-red-500",
        edit: "border border-input hover:bg-blue-100/50 focus-visible:bg-blue-100/50 bg-background focus-visible:ring-offset-0 focus-visible:ring-blue-500 text-blue-500 border-blue-500",
        complete:
          "border border-input hover:bg-green-100/50 focus-visible:bg-green-100/50 bg-background focus-visible:ring-offset-0 focus-visible:ring-green-500 text-green-500 border-green-500",
        error:
          "border border-input bg-background hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  border border-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-red-500 focus:border-input",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
      shadow: {
        default: "focus:drop-shadow-[0_6px_6px_rgba(151,127,255,0.75)]",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, shadow, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shadow, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
