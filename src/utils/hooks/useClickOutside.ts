import { useEffect, useRef } from "react";

interface IUseClickOutside {
    isVisible: boolean;
    setIsVisible(isVisible: boolean): void;
}

export function useClickOutside({isVisible, setIsVisible}:IUseClickOutside) {
    const modalRef = useRef<HTMLDivElement>(null);
  
    const checkClickOutside = (e: MouseEvent) => {
      if (
        isVisible &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        setIsVisible(false);
      }
  
      return () => document.removeEventListener("mousedown", checkClickOutside);
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", checkClickOutside);
    }, [isVisible]);

    return {modalRef}
}