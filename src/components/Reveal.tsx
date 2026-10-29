import { useEffect, useRef, type ReactNode } from 'react';
export default function Reveal({ children }: { children: ReactNode }) {
 const ref = useRef<HTMLDivElement>(null);
 useEffect(() => { const el=ref.current!; const observer=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('revealed');observer.disconnect();}},{threshold:.08});observer.observe(el);return()=>observer.disconnect(); },[]);
 return <div ref={ref} className="reveal">{children}</div>;
}
