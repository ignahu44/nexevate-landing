
import nexevateLogo from "@/assets/logo/nexevate_logo_plain.png";
import { useEffect, useState } from "react";

interface Props {
    onFinish: () => void;
  }
  
  export const SplashScreen = ({ onFinish }: Props) => {
      useEffect(() => {
          const timer = setTimeout(() => {
              onFinish();
            }, 1500); // 2 segundos
        
            return () => clearTimeout(timer);
          }, [onFinish]);
        
          return (
              <div className="fixed inset-0 flex items-center justify-center bg-gradient-hero">
                <img
                  src={nexevateLogo}
                  alt="Logo"
                  className="w-40 animate-pulse"
                />
              </div>
            );
          };