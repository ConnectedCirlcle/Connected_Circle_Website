import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Custom button variants based on the Connected Circles color palette
const primaryButtonVariants = cva(
  "bg-electric-blue hover:bg-rich-violet text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",
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

const secondaryButtonVariants = cva(
  "bg-vibrant-green hover:bg-medium-purple text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",
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
  "bg-transparent border-2 border-electric-blue hover:bg-electric-blue hover:bg-opacity-10 text-electric-blue font-semibold py-3 px-6 rounded-full transition-all duration-300",
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

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  asChild?: boolean;
}

export interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof secondaryButtonVariants> {
  asChild?: boolean;
}

export interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof outlineButtonVariants> {
  asChild?: boolean;
}

export const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  PrimaryButtonProps
>(({ className, size, asChild = false, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(primaryButtonVariants({ size, className }))}
    {...props}
    asChild={asChild}
  />
));
PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = React.forwardRef<
  HTMLButtonElement,
  SecondaryButtonProps
>(({ className, size, asChild = false, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(secondaryButtonVariants({ size, className }))}
    {...props}
    asChild={asChild}
  />
));
SecondaryButton.displayName = "SecondaryButton";

// Keep legacy exports for compatibility during transition
export const GoldButton = PrimaryButton;
export const TealButton = SecondaryButton;

export const OutlineButton = React.forwardRef<
  HTMLButtonElement,
  OutlineButtonProps
>(({ className, size, asChild = false, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(outlineButtonVariants({ size, className }))}
    {...props}
    asChild={asChild}
  />
));
OutlineButton.displayName = "OutlineButton";
