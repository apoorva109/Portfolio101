import { useState, useRef, useEffect, MouseEvent } from 'react';
import { X, ExternalLink, RotateCcw, Download, Terminal, Code, Palette } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface GraphicsEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ToolMode = 'line' | 'circle' | 'rect' | 'pen';

export const GraphicsEditorModal = ({ isOpen, onClose }: GraphicsEditorModalProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tool, setTool] = useState<ToolMode>('pen');
  const [color, setColor] = useState('#ffffff');
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [snapshot, setSnapshot] = useState<ImageData | null>(null);
  const [viewTab, setViewTab] = useState<'canvas' | 'code'>('canvas');

  const colors = ['#ffffff', '#7bd0ff', '#34d399', '#fbbf24', '#f43f5e', '#a855f7'];

  // Initialize canvas
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set dark background
    ctx.fillStyle = '#0d0e15';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw initial sample pixel art/shapes
    drawSampleShapes(ctx);
  }, [isOpen, viewTab]);

  const drawSampleShapes = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = '#7bd0ff';
    ctx.lineWidth = 2;
    // Sample Bresenham line
    ctx.beginPath();
    ctx.moveTo(30, 40);
    ctx.lineTo(160, 40);
    ctx.stroke();

    // Sample Circle
    ctx.strokeStyle = '#34d399';
    ctx.beginPath();
    ctx.arc(240, 70, 30, 0, Math.PI * 2);
    ctx.stroke();

    // Sample Rect
    ctx.strokeStyle = '#fbbf24';
    ctx.strokeRect(30, 70, 70, 45);

    // Label
    ctx.fillStyle = '#8e9193';
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.fillText('// C Framebuffer Emulation (2D Graphics Pipeline)', 20, 150);
  };

  if (!isOpen) return null;

  const handleMouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setStartPos({ x, y });
    setSnapshot(ctx.getImageData(0, 0, canvas.width, canvas.height));

    if (tool === 'pen') {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !startPos || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const currentX = Math.floor(e.clientX - rect.left);
    const currentY = Math.floor(e.clientY - rect.top);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (tool === 'pen') {
      ctx.lineTo(currentX, currentY);
      ctx.stroke();
    } else if (snapshot) {
      // Restore for shape preview
      ctx.putImageData(snapshot, 0, 0);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;

      if (tool === 'line') {
        // Simulating Bresenham Line
        ctx.beginPath();
        ctx.moveTo(startPos.x, startPos.y);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
      } else if (tool === 'rect') {
        const width = currentX - startPos.x;
        const height = currentY - startPos.y;
        ctx.strokeRect(startPos.x, startPos.y, width, height);
      } else if (tool === 'circle') {
        const radius = Math.sqrt(
          Math.pow(currentX - startPos.x, 2) + Math.pow(currentY - startPos.y, 2)
        );
        ctx.beginPath();
        ctx.arc(startPos.x, startPos.y, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setStartPos(null);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#0d0e15';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'c_graphics_canvas.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div
      id="graphics-editor-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="graphics-editor-content"
        className="relative w-full max-w-2xl bg-[#180d14] border border-[#3a1a2b] rounded-xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#12090e] border-b border-[#3a1a2b]">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-[#24111d] border border-[#3a1a2b] text-[#f47293]">
              <Terminal className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-mono font-medium text-white">2D Graphics Editor (C Pipeline)</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#24111d] rounded border border-[#3a1a2b] p-0.5 text-xs font-mono">
              <button
                onClick={() => setViewTab('canvas')}
                className={`px-2 py-1 rounded transition-colors ${
                  viewTab === 'canvas' ? 'bg-[#a31d45] text-white' : 'text-[#c7adb8] hover:text-white'
                }`}
              >
                Canvas Sandbox
              </button>
              <button
                onClick={() => setViewTab('code')}
                className={`px-2 py-1 rounded transition-colors ${
                  viewTab === 'code' ? 'bg-[#a31d45] text-white' : 'text-[#c7adb8] hover:text-white'
                }`}
              >
                C Source Code
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-7 h-7 rounded bg-[#24111d] border border-[#3a1a2b] hover:border-[#c02652] text-[#c7adb8] hover:text-[#f47293] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close Graphics Editor Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4">
          {viewTab === 'canvas' ? (
            <>
              {/* Tool Controls */}
              <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-lg bg-[#12090e] border border-[#3a1a2b]">
                {/* Tools */}
                <div className="flex items-center gap-1">
                  {(['pen', 'line', 'circle', 'rect'] as ToolMode[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => setTool(m)}
                      className={`px-2.5 py-1 rounded text-xs font-mono uppercase transition-all cursor-pointer ${
                        tool === m
                          ? 'bg-[#a31d45] text-white border border-[#c02652] shadow-[0_0_8px_rgba(192,38,82,0.3)]'
                          : 'bg-[#24111d] text-[#c7adb8] hover:text-white border border-transparent hover:border-[#3a1a2b]'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>

                {/* Colors */}
                <div className="flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#c7adb8]" />
                  {colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`w-5 h-5 rounded-full border transition-transform cursor-pointer ${
                        color === c ? 'scale-125 border-white ring-1 ring-[#f47293]' : 'border-transparent hover:scale-110'
                      }`}
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>

                {/* Clear & Save */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleClear}
                    className="p-1.5 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-[#c7adb8] hover:text-[#f47293] transition-colors cursor-pointer"
                    title="Clear Canvas"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="p-1.5 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-[#c7adb8] hover:text-[#f47293] transition-colors cursor-pointer"
                    title="Export Image"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Canvas Frame */}
              <div className="relative rounded-lg overflow-hidden border border-[#3a1a2b] bg-[#0c060a] flex justify-center">
                <canvas
                  ref={canvasRef}
                  width={560}
                  height={240}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  className="cursor-crosshair w-full max-w-full h-auto block"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#c7adb8]">
                <span>Pipeline: Integer-arithmetic Bresenham &amp; Midpoint Circle</span>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f47293] hover:underline flex items-center gap-1"
                >
                  <span>View C Repo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-white flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-[#f47293]" />
                  <span>graphics_pipeline.c (Core Bresenham Implementation)</span>
                </span>
                <span className="text-[10px] font-mono text-[#c7adb8]">Standard C99</span>
              </div>

              <pre className="p-4 rounded-lg bg-[#0c060a] border border-[#3a1a2b] font-mono text-xs text-[#f3e8ee] overflow-x-auto leading-relaxed">
{`#include <stdlib.h>
#include <stdint.h>

#define WIDTH  640
#define HEIGHT 480

uint32_t framebuffer[WIDTH * HEIGHT];

void set_pixel(int x, int y, uint32_t color) {
    if (x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT) {
        framebuffer[y * WIDTH + x] = color;
    }
}

/* Bresenham's Line Algorithm with integer-only arithmetic */
void draw_line(int x0, int y0, int x1, int y1, uint32_t color) {
    int dx = abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    int dy = -abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    int err = dx + dy, e2;

    while (1) {
        set_pixel(x0, y0, color);
        if (x0 == x1 && y0 == y1) break;
        e2 = 2 * err;
        if (e2 >= dy) { err += dy; x0 += sx; }
        if (e2 <= dx) { err += dx; y0 += sy; }
    }
}

/* Midpoint Circle Algorithm */
void draw_circle(int xc, int yc, int r, uint32_t color) {
    int x = 0, y = r;
    int d = 3 - 2 * r;
    while (y >= x) {
        set_pixel(xc + x, yc + y, color);
        set_pixel(xc - x, yc + y, color);
        set_pixel(xc + x, yc - y, color);
        set_pixel(xc - x, yc - y, color);
        set_pixel(xc + y, yc + x, color);
        set_pixel(xc - y, yc + x, color);
        set_pixel(xc + y, yc - x, color);
        set_pixel(xc - y, yc - x, color);
        x++;
        if (d > 0) { y--; d = d + 4 * (x - y) + 10; }
        else { d = d + 4 * x + 6; }
    }
}`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
