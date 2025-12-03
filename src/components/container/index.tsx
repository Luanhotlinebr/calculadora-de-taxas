import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white px-2 rounded-md border flex flex-col items-center justify-center min-h-full">
      {children}
    </div>
  );
}
