import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="w-full min-h-screen max-w-7xl mx-auto bg-white px-6 py-6 rounded-md border">
      {children}
    </div>
  );
}
