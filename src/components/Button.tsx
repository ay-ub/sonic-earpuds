import type { ReactNode } from "react";

function Button({ children }: { children:ReactNode }) {
  return (
    <button className="bg-[#31A758] w-[300px] h-[84px] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#28a745] transition-colors cursor-pointer inline-block font-bold text-2xl">
      {children}
    </button>
  );
}

export default Button;
