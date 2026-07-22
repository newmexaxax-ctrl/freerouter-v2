import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold",
    "cursor-pointer select-none",
    "transition-[transform,background-color,border-color,color,opacity] duration-[var(--duration-ui)] ease-[var(--ease-out)]",
    "active:scale-[0.97] active:duration-[var(--duration-press)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA]",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-[#1A1A1A]",
        outline:
          "border border-black/15 bg-transparent text-black hover:border-black/35 hover:bg-black/[0.03]",
        ghost: "text-black hover:bg-black/[0.04]",
      },
      size: {
        default: "h-14 px-8 text-lg tracking-[-0.015em]",
        lg: "h-16 px-10 text-xl tracking-[-0.018em]",
        sm: "h-11 px-6 text-base tracking-[-0.011em]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
