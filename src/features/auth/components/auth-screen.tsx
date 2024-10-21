"use client";

import { useState } from "react";
import { SignFlow } from "../types";

export const AuthScreen = () => {
  const [state, setState] = useState<SignFlow>("signIn");
  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px]">Auth Screen</div>
    </div>
  );
};
