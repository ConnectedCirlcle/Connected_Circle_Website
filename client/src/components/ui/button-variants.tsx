import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Custom button variants based on the Heart & Household color palette
const rustButtonVariants = cva(
  "bg-[#B2593C] hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-full transition",
  {
    variants: {
      size: {
        default: "py-3 px-6",
        sm: "py-2 px-4 text-sm",
        lg: "py-4 px-8 text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const oliveButtonVariants = cva(
  "bg-[#858461] hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-full transition",
  {
    variants: {
      size: {
        default: "py-3 px-6",
        sm: "py-2 px-4 text-sm",
        lg: "py-4 px-8 text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const outlineButtonVariants = cva(
  "bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white font-semibold py-3 px-6 rounded-full transition",
  {
    variants: {
      size: {
        default: "py-3 px-6",
        sm: "py-2 px-4 text-sm",
        lg: "py-4 px-8 text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface RustButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof rustButtonVariants> {
  asChild?: boolean;
}

export interface OliveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof oliveButtonVariants> {
  asChild?: boolean;
}

export interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof outlineButtonVariants> {
  asChild?: boolean;
}

export const RustButton = React.forwardRef<HTMLButtonElement, RustButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => (
    <Button 
      ref={ref}
      className={cn(rustButtonVariants({ size, className }))}
      {...props}
      asChild={asChild}
    />
  )
);
RustButton.displayName = "RustButton";

export const OliveButton = React.forwardRef<HTMLButtonElement, OliveButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => (
    <Button 
      ref={ref}
      className={cn(oliveButtonVariants({ size, className }))}
      {...props}
      asChild={asChild}
    />
  )
);
OliveButton.displayName = "OliveButton";

export const OutlineButton = React.forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => (
    <Button 
      ref={ref}
      className={cn(outlineButtonVariants({ size, className }))}
      {...props}
      asChild={asChild}
    />
  )
);
OutlineButton.displayName = "OutlineButton";
