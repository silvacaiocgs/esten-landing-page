import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface EstenButtonProps {
  variant?: "whatsapp" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function EstenButton({ 
  variant = "whatsapp", 
  size = "md", 
  children, 
  className,
  onClick,
  href,
  ...props 
}: EstenButtonProps) {
  const baseClasses = "transition-elegant shadow-elegant font-medium";
  
  const variants = {
    whatsapp: "gradient-hero text-primary-foreground hover:shadow-glow hover:scale-105",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft",
    outline: "border-2 border-primary text-primary bg-transparent hover:gradient-hero hover:text-primary-foreground",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
    onClick?.();
  };

  return (
    <Button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {variant === "whatsapp" && <MessageCircle className="mr-2 h-5 w-5" />}
      {children}
    </Button>
  );
}