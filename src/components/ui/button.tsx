import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-teal text-ink-deep shadow-[0_8px_24px_-8px_rgba(77,182,172,.7)] hover:-translate-y-0.5 hover:bg-[#5fc4ba] hover:shadow-[0_14px_32px_-10px_rgba(77,182,172,.9)] active:translate-y-0",
        dark: "bg-ink text-mist hover:-translate-y-0.5 hover:bg-ink-deep",
        outline:
          "border border-current/25 bg-transparent hover:border-teal hover:text-teal",
        ghost: "hover:bg-ink/5",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-base sm:text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

/** Botão-link (todas as CTAs da página levam a um destino). */
export const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
