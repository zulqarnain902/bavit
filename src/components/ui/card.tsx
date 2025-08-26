import React, { ReactNode } from "react";

// ✅ Define props interface outside the components
interface CardProps {
  children: ReactNode;
  className?: string;
}

// ✅ Card Component
export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
}

// ✅ CardContent Component
export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}
