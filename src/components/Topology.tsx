import { useEffect, useRef } from 'react';
/** Decorative topology: bounded nodes, capped DPR, no offscreen animation. */
export default function Topology() {
 const ref = useRef<HTMLCanvasElement>(null);
 useEffect(() => {
  const canvas = ref.current!; const ctx = canvas.getContext('2d'); if (!ctx) return;
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  let w = 0, h = 0, frame = 0, time = 0, visible = true;
  const pointer = { x: .65, y: .45 };
  const nodes = Array.from({ length: 68 }, (_, i) => ({ x: ((i * 73.31) % 100) / 100, y: ((i * 37.17) % 100) / 100, phase: i * 1.3 }));
  function resize() { const box = canvas.getBoundingClientRect(); w = box.width; h = box.height; const dpr = Math.min(devicePixelRatio, 1.5); canvas.width = w * dpr; canvas.height = h * dpr; ctx!.setTransform(dpr, 0, 0, dpr, 0, 0); if (media.matches) draw(); }
  function draw() {
   ctx!.clearRect(0, 0, w, h); time += .003;
   const points = nodes.map(n => ({ x: n.x * w + Math.sin(time + n.phase) * 13 + (pointer.x - .5) * 10, y: n.y * h + Math.cos(time + n.phase) * 12 }));
   ctx!.lineWidth = .6;
   points.forEach((p, i) => { points.slice(i + 1).forEach(q => { const d = Math.hypot(p.x - q.x, p.y - q.y); if (d < 145) { ctx!.strokeStyle = `rgba(167,198,183,${(1 - d / 145) * .24})`; ctx!.beginPath(); ctx!.moveTo(p.x,p.y);ctx!.lineTo(q.x,q.y);ctx!.stroke(); } }); ctx!.fillStyle = i % 7 === 0 ? '#cce5d4' : '#567165'; ctx!.fillRect(p.x,p.y,i % 7 === 0 ? 3 : 1.5, i % 7 === 0 ? 3 : 1.5); });
   if (!media.matches && visible && !document.hidden) frame = requestAnimationFrame(draw);
  }
  function restart() { cancelAnimationFrame(frame); if (visible && !document.hidden) draw(); }
  function move(e: PointerEvent) { const b = canvas.getBoundingClientRect();pointer.x = (e.clientX-b.left)/w;pointer.y=(e.clientY-b.top)/h; }
  const ro = new ResizeObserver(resize); ro.observe(canvas);
  const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting;restart(); }); io.observe(canvas);
  window.addEventListener('pointermove',move,{passive:true});document.addEventListener('visibilitychange',restart);media.addEventListener('change',restart);
  return () => { cancelAnimationFrame(frame);ro.disconnect();io.disconnect();window.removeEventListener('pointermove',move);document.removeEventListener('visibilitychange',restart);media.removeEventListener('change',restart); };
 }, []);
 return <canvas ref={ref} className="topology" aria-hidden="true" />;
}
