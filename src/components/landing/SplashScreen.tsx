//--------------------
// Common
//--------------------

// import nexevateLogo from "@/assets/logo/nexevate_logo_plain.png";
// import { useEffect, useState } from "react";

// interface Props {
//     onFinish: () => void;
//   }

// export const SplashScreen = ({ onFinish }: Props) => {
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             onFinish();
//           }, 1500); // 2 segundos

//           return () => clearTimeout(timer);
//         }, [onFinish]);

//         return (
//             <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D2B45]">
//               <img
//                 src={nexevateLogo}
//                 alt="Logo"
//                 className="w-40 animate-pulse"
//               />
//             </div>
//           );
//         };



//--------------------
// Common with Transparency
//--------------------

// import nexevateLogo from "@/assets/logo/nexevate_logo_plain.png";
// import { useEffect, useState } from "react";
// interface Props {
//   onFinish: () => void;
// }

// export const SplashScreen = ({ onFinish }: Props) => {
//   const [exit, setExit] = useState(false);

//   useEffect(() => {
//     const timer1 = setTimeout(() => {
//       setExit(true);
//     }, 1200);

//     const timer2 = setTimeout(() => {
//       onFinish();
//     }, 1700);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, [onFinish]);

//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero transition-opacity duration-500 ${
//         exit ? "opacity-0" : "opacity-100"
//       }`}
//     >
//       <img
//         src={nexevateLogo}
//         alt="Logo"
//         className={`w-40 transition-all duration-700 ${
//           exit ? "scale-125 opacity-0" : "scale-100 opacity-100"
//         }`}
//       />
//     </div>
//   );

// };


//--------------------
// BCV Like (Curtain)
//--------------------

// import nexevateLogo from "@/assets/logo/nexevate_logo_plain.png";
import nexevateLogo from "@/assets/logo/nexevate_wordmark.png";
import { useEffect, useState } from "react";

interface Props {
  onFinish: () => void;
}

export const SplashScreen = ({ onFinish }: Props) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimate(true);
    }, 1000); // tiempo visible antes de subir

    const timer2 = setTimeout(() => {
      onFinish();
    }, 2000); // cuando termina animación

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#1D2B45]
      transition-transform duration-700 ease-in-out
      ${animate ? "-translate-y-full" : "translate-y-0"}`}
    >
      <img src={nexevateLogo} alt="Logo Nexevate" className="w-60" />
    </div>
  );
};



//--------------------
// Open From Middle
//--------------------

// import nexevateLogo from "@/assets/logo/nexevate_logo_plain.png";
// import { useEffect, useState } from "react";

// interface Props {
//   onFinish: () => void;
// }

// export const SplashScreen = ({ onFinish }: Props) => {
//   const [hideLogo, setHideLogo] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     // 1️⃣ El logo desaparece
//     const t1 = setTimeout(() => {
//       setHideLogo(true);
//     }, 900);

//     // 2️⃣ Se abren las mitades
//     const t2 = setTimeout(() => {
//       setOpen(true);
//     }, 1300);

//     // 3️⃣ Se desmonta el splash
//     const t3 = setTimeout(() => {
//       onFinish();
//     }, 2000);

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//       clearTimeout(t3);
//     };
//   }, [onFinish]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">

//       {/* Mitad superior */}
//       <div
//         className={`absolute top-0 w-full h-1/2 bg-[#1D2B45]
//         transition-transform duration-700 ease-in-out
//         ${open ? "-translate-y-full" : "translate-y-0"}`}
//       />

//       {/* Mitad inferior */}
//       <div
//         className={`absolute bottom-0 w-full h-1/2 bg-[#1D2B45]
//         transition-transform duration-700 ease-in-out
//         ${open ? "translate-y-full" : "translate-y-0"}`}
//       />

//       {/* Logo */}
//       <img
//         src={nexevateLogo}
//         alt="Logo"
//         className={`w-40 z-10 transition-all duration-400 ${
//           hideLogo ? "opacity-0 scale-90" : "opacity-100 scale-100"
//         }`}
//       />
//     </div>
//   );
// };


//--------------------
// Shooting Star
//--------------------

// import nexevateLogo from "@/assets/logo/nexevate_logo_plain.png";
// import { useEffect, useState } from "react";

// interface Props {
//   onFinish: () => void;
// }

// export const SplashScreen = ({ onFinish }: Props) => {
//   const [shoot, setShoot] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     // 1️⃣ pequeño delay inicial
//     const t1 = setTimeout(() => {
//       setShoot(true);
//     }, 900);

//     // 2️⃣ se abren las mitades después del disparo
//     const t2 = setTimeout(() => {
//       setOpen(true);
//     }, 1400);

//     // 3️⃣ desmontar splash
//     const t3 = setTimeout(() => {
//       onFinish();
//     }, 2100);

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//       clearTimeout(t3);
//     };
//   }, [onFinish]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">

//       {/* Mitad superior */}
//       <div
//         className={`absolute top-0 w-full h-1/2 bg-[#1D2B45]
//         transition-transform duration-700 ease-in-out
//         ${open ? "-translate-y-full" : "translate-y-0"}`}
//       />

//       {/* Mitad inferior */}
//       <div
//         className={`absolute bottom-0 w-full h-1/2 bg-[#1D2B45]
//         transition-transform duration-700 ease-in-out
//         ${open ? "translate-y-full" : "translate-y-0"}`}
//       />

//       {/* Logo estrella fugaz */}
//       <img
//         src={nexevateLogo}
//         alt="Logo"
//         className={`w-40 z-10 transition-all duration-500 ease-in
//         ${
//           shoot
//             ? "-translate-y-[600px] translate-x-[600px] rotate-45 opacity-0 scale-75"
//             : "translate-x-0 translate-y-0 opacity-100 scale-100"
//         }`}
//         style={{ willChange: "transform, opacity" }}
//       />

//       <div
//   className={`absolute w-32 h-1 bg-white/40 blur-sm rounded-full
//   transition-all duration-700
//   ${
//     shoot
//       ? "translate-x-[500px] -translate-y-[500px] opacity-0"
//       : "opacity-0"
//   }`}
// />
//     </div>
//   );
// };


//--------------------
// Breaking Logo
//--------------------

// import { useEffect, useState } from "react";
// import logoLeft from "@/assets/logo/nexevate-logo-left-side.png";
// import logoRight from "@/assets/logo/nexevate-logo-right-side.png";

// interface Props {
//   onFinish: () => void;
// }

// export const SplashScreen = ({ onFinish }: Props) => {
//   const [split, setSplit] = useState(false);
//   const [openBackground, setOpenBackground] = useState(false);

//   useEffect(() => {
//     // 1️⃣ Separar logo
//     const t1 = setTimeout(() => {
//       setSplit(true);
//     }, 200);

//     // 2️⃣ Abrir fondo
//     const t2 = setTimeout(() => {
//       setOpenBackground(true);
//     }, 1500);

//     // 3️⃣ Finalizar splash
//     const t3 = setTimeout(() => {
//       onFinish();
//     }, 1500);

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//       clearTimeout(t3);
//     };
//   }, [onFinish]);

//   return (
//     <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">

//       {/* Fondo superior */}
//       <div
//         className={`absolute top-0 w-full h-1/2 bg-[#1D2B45]
//         transition-transform duration-600 ease-[cubic-bezier(0.77,0,0.18,1)]
//         ${openBackground ? "-translate-y-full" : "translate-y-0"}`}
//       />

//       {/* Fondo inferior */}
//       <div
//         className={`absolute bottom-0 w-full h-1/2 bg-[#1D2B45]
//         transition-transform duration-600 ease-[cubic-bezier(0.77,0,0.18,1)]
//         ${openBackground ? "translate-y-full" : "translate-y-0"}`}
//       />

//       {/* Contenedor logo */}
//       <div className="relative w-48 h-48 z-10">

//         {/* Lado izquierdo */}
//         <img
//           src={logoLeft}
//           alt="logo-left"
//           className={`absolute inset-0 transition-all duration-700
//           ${split ? "-translate-x-32 rotate-[-6deg]" : "translate-x-0 rotate-0"}`}
//           style={{ willChange: "transform" }}
//         />

//         {/* Lado derecho */}
//         <img
//           src={logoRight}
//           alt="logo-right"
//           className={`absolute inset-0 transition-all duration-700
//           ${split ? "translate-x-32 rotate-[6deg]" : "translate-x-0 rotate-0"}`}
//           style={{ willChange: "transform" }}
//         />

//       </div>
//     </div>
//   );
// };

//--------------------
// Open Door (No to Show)
//--------------------

// import { useEffect, useState } from "react";
// import logoLeft from "@/assets/logo/nexevate-logo-left-side.png";
// import logoRight from "@/assets/logo/nexevate-logo-right-side.png";

// interface Props {
//   onFinish: () => void;
// }

// export const SplashScreen = ({ onFinish }: Props) => {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     // 1️⃣ Abrir puertas (logo + fondo)
//     const t1 = setTimeout(() => {
//       setOpen(true);
//     }, 900);

//     // 2️⃣ Finalizar splash
//     const t2 = setTimeout(() => {
//       onFinish();
//     }, 1800);

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//     };
//   }, [onFinish]);

//   return (
//     <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">

//       {/* FONDO IZQUIERDO */}
//       <div
//         className={`absolute left-0 top-0 h-full w-1/2 bg-[#1D2B45]
//         transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.18,1)]
//         ${open ? "-translate-x-full" : "translate-x-0"}`}
//       />

//       {/* FONDO DERECHO */}
//       <div
//         className={`absolute right-0 top-0 h-full w-1/2 bg-[#1D2B45]
//         transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.18,1)]
//         ${open ? "translate-x-full" : "translate-x-0"}`}
//       />

//       {/* LOGO */}
//       <div className="relative w-48 h-48 z-10">

//         {/* Logo izquierdo */}
//         <img
//           src={logoLeft}
//           alt="logo-left"
//           className={`absolute inset-0 transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.18,1)]
//           ${open ? "-translate-x-64" : "translate-x-0"}`}
//         />

//         {/* Logo derecho */}
//         <img
//           src={logoRight}
//           alt="logo-right"
//           className={`absolute inset-0 transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.18,1)]
//           ${open ? "translate-x-64" : "translate-x-0"}`}
//         />

//       </div>
//     </div>
//   );
// };
