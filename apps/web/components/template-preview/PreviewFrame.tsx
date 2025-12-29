"use client";

/**
 * PreviewFrame - Sandboxed iframe for rendering HTML template previews.
 *
 * Uses srcdoc to inject rendered HTML into an isolated iframe context.
 * Provides zoom controls and auto-resizing.
 */

import { useRef, useEffect, useState, useCallback } from "react";
import { Button, Tooltip, Slider } from "@heroui/react";

// Inline SVG icons
const ZoomInIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
  </svg>
);

const ZoomOutIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
  </svg>
);

const MaximizeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

const MinimizeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
  </svg>
);

interface PreviewFrameProps {
  /** Rendered HTML content to display */
  html: string;
  /** Optional title for the preview */
  title?: string;
  /** Initial zoom level (default: 100) */
  initialZoom?: number;
  /** Minimum zoom level (default: 25) */
  minZoom?: number;
  /** Maximum zoom level (default: 200) */
  maxZoom?: number;
  /** Show zoom controls (default: true) */
  showControls?: boolean;
  /** Additional class name */
  className?: string;
  /** Background color for the preview area */
  backgroundColor?: string;
}

/**
 * Wrap HTML content in a full document with base styles
 */
function wrapHtml(html: string, zoom: number): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      padding: 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      color: #1a1a1a;
      background: white;
    }
    body {
      transform-origin: top left;
      transform: scale(${zoom / 100});
      width: ${10000 / zoom}%;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f5f5f5;
      font-weight: 600;
    }
    tr:nth-child(even) {
      background-color: #fafafa;
    }
    .missing-field {
      color: #dc2626;
      background-color: #fef2f2;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: monospace;
      font-size: 12px;
    }
  </style>
</head>
<body>
${html}
</body>
</html>`;
}

export default function PreviewFrame({
  html,
  title = "Template Preview",
  initialZoom = 100,
  minZoom = 25,
  maxZoom = 200,
  showControls = true,
  className = "",
  backgroundColor = "#f8f9fa",
}: PreviewFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(initialZoom);
  const [isExpanded, setIsExpanded] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(500);

  /**
   * Update iframe height based on content
   */
  const updateHeight = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument?.body) return;

    const contentHeight = iframe.contentDocument.body.scrollHeight;
    const scaledHeight = contentHeight * (zoom / 100);
    // Allow up to 1200px height for better visibility
    setIframeHeight(Math.max(300, Math.min(scaledHeight + 32, 1200)));
  }, [zoom]);

  /**
   * Handle zoom changes
   */
  const handleZoomChange = useCallback((newZoom: number) => {
    setZoom(Math.max(minZoom, Math.min(maxZoom, newZoom)));
  }, [minZoom, maxZoom]);

  /**
   * Toggle expanded mode (within page, not browser fullscreen)
   */
  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  // Update iframe content when html or zoom changes
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const wrappedHtml = wrapHtml(html, zoom);
    iframe.srcdoc = wrappedHtml;

    // Update height after content loads
    const handleLoad = () => {
      updateHeight();
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, [html, zoom, updateHeight]);


  // Process HTML to highlight missing fields
  const processedHtml = html.replace(
    /\[MISSING: ([^\]]+)\]/g,
    '<span class="missing-field">[MISSING: $1]</span>'
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col rounded-lg border border-default-200 overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      {/* Header with controls */}
      {showControls && (
        <div className="flex items-center justify-between px-3 py-2 bg-default-50 border-b border-default-200">
          <span className="text-sm font-medium text-default-700">{title}</span>

          <div className="flex items-center gap-2">
            {/* Zoom slider */}
            <div className="flex items-center gap-2 mr-2">
              <Tooltip content="Zoom out">
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={() => handleZoomChange(zoom - 25)}
                  isDisabled={zoom <= minZoom}
                >
                  <ZoomOutIcon />
                </Button>
              </Tooltip>

              <Slider
                size="sm"
                step={5}
                minValue={minZoom}
                maxValue={maxZoom}
                value={zoom}
                onChange={(val) => handleZoomChange(val as number)}
                className="w-24"
                aria-label="Zoom level"
              />

              <Tooltip content="Zoom in">
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={() => handleZoomChange(zoom + 25)}
                  isDisabled={zoom >= maxZoom}
                >
                  <ZoomInIcon />
                </Button>
              </Tooltip>

              <span className="text-xs text-default-500 w-10 text-center">
                {zoom}%
              </span>
            </div>

            {/* Expand toggle */}
            <Tooltip content={isExpanded ? "Collapse" : "Expand"}>
              <Button
                isIconOnly
                size="sm"
                variant="light"
                onPress={toggleExpanded}
              >
                {isExpanded ? (
                  <MinimizeIcon />
                ) : (
                  <MaximizeIcon />
                )}
              </Button>
            </Tooltip>
          </div>
        </div>
      )}

      {/* Iframe container */}
      <div
        className="relative overflow-auto"
        style={{
          height: isExpanded ? "70vh" : iframeHeight,
          minHeight: 300,
        }}
      >
        <iframe
          ref={iframeRef}
          title={title}
          sandbox="allow-same-origin"
          className="w-full h-full border-0 bg-white"
          srcDoc={wrapHtml(processedHtml, zoom)}
        />
      </div>
    </div>
  );
}
