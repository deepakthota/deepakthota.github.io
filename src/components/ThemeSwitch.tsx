import { useEffect, useState } from 'react';
type Theme = 'system' | 'light' | 'dark';
export default function ThemeSwitch(){
 const [theme,setTheme]=useState<Theme>(()=>{try{const saved=localStorage.getItem('portfolio-theme');return saved==='light'||saved==='dark'?saved:'system';}catch{return 'system';}});
 useEffect(()=>{const media=matchMedia('(prefers-color-scheme: dark)');const apply=()=>{document.documentElement.dataset.theme=theme==='system'?(media.matches?'dark':'light'):theme;const icon=document.querySelector<HTMLLinkElement>('#favicon');if(icon)icon.href=`${import.meta.env.BASE_URL}favicon-${document.documentElement.dataset.theme}.svg`;};apply();media.addEventListener('change',apply);try{if(theme==='system')localStorage.removeItem('portfolio-theme');else localStorage.setItem('portfolio-theme',theme);}catch{/* Storage can be unavailable in private contexts. */}return()=>media.removeEventListener('change',apply);},[theme]);
 return <label className="theme-control"><span className="sr-only">Color theme</span><select aria-label="Color theme" value={theme} onChange={e=>setTheme(e.target.value as Theme)}><option value="system">◐ System</option><option value="light">☀ Light</option><option value="dark">☾ Dark</option></select></label>;
}
