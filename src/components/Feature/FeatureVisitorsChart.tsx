// src/components/VisitorChart.tsx
import { useEffect, useRef } from 'react';
import {
  Chart,
  LineElement,
  LineController,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import type { ChartOptions } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import type { AnnotationPluginOptions } from 'chartjs-plugin-annotation';

declare module 'chart.js' {
  interface PluginOptionsByType<TType> {
    annotation: AnnotationPluginOptions;
  }
}

Chart.register(LineElement, LineController, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler, annotationPlugin);

type Props = {
  websiteVisitors: string;
  conversionRate: string;
  engagementTime: string;
  months: string[];
  serviceAdoption: string;
  startingPoint: string;
  beforeAdoption: string;
  afterAdoption: string;
};

export default function VisitorChart({
  serviceAdoption,
  startingPoint,
  beforeAdoption,
  afterAdoption,
  months,
  ...labels
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    const createGradient = (colorHex: string) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);

      // Convert hex to RGB
      const hexToRgb = (hex: string) => {
        const bigint = parseInt(hex.replace('#', ''), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
      };

      const { r, g, b } = hexToRgb(colorHex);

      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.2)`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.02)`);

      return gradient;
    };

    // Generate trend data with different upward growth patterns
    const generateTrendData = (pattern: 'steep' | 'moderate' | 'gradual') => {
      const data = Array(12).fill(0);
      const startPoint = 3; // Service adoption point (4th month)

      switch (pattern) {
        case 'steep':
          // Massive exponential growth for visitors
          return data.map((_, i) => {
            if (i < startPoint) {
              // Before adoption: modest growth
              return 100 + (i * 15);
            }
            // After adoption: explosive growth
            const base = 1.65;
            const smoothing = Math.min(1, (i - startPoint + 1) / 1.5);
            const growth = Math.pow(base, i - startPoint + 2) * smoothing;
            return 100 + (startPoint * 15) + growth * 2.1;
          });

        case 'moderate':
          // Very strong growth for engagement
          return data.map((_, i) => {
            if (i < startPoint) {
              // Before adoption: slow growth
              return 100 + (i * 10);
            }
            // After adoption: strong growth
            const base = 1.65;
            const smoothing = Math.min(1, (i - startPoint + 1) / 1.5);
            const growth = Math.pow(base, i - startPoint + 1.8) * smoothing;
            return 100 + (startPoint * 10) + growth * 2;
          });

        case 'gradual':
          // Fast S-curve growth for conversion
          return data.map((_, i) => {
            if (i < startPoint) {
              // Before adoption: minimal growth
              return 100 + (i * 8);
            }
            // After adoption: accelerated growth
            const progress = (i - startPoint) / (11 - startPoint);
            const sCurve = 1 / (1 + Math.exp(-11 * (progress - 0.2)));
            return 100 + (startPoint * 8) + 600 * sCurve;
          });
      }
    };

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: labels.websiteVisitors,
            data: generateTrendData('gradual'),
            borderColor: '#3B7EFF',
            backgroundColor: createGradient('#3B7EFF'),
            fill: true,
            tension: 0.3,
            borderWidth: 3,
            pointBackgroundColor: '#3B7EFF',
            pointBorderColor: '#fff',
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointRadius: 4,
            order: 3,
          },
          {
            label: labels.engagementTime,
            data: generateTrendData('moderate'),
            borderColor: '#06D6A0',
            backgroundColor: createGradient('#06D6A0'),
            fill: true,
            tension: 0.3,
            borderWidth: 3,
            pointBackgroundColor: '#06D6A0',
            pointBorderColor: '#fff',
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointRadius: 4,
            order: 2,
          },
          {
            label: labels.conversionRate,
            data: generateTrendData('steep'),
            borderColor: '#FFD166',
            backgroundColor: createGradient('#FFD166'),
            fill: true,
            tension: 0.3,
            borderWidth: 3,
            pointBackgroundColor: '#FFD166',
            pointBorderColor: '#fff',
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointRadius: 4,
            order: 1,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 2500,
          easing: 'easeOutQuart',
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            ticks: {
              color: '#888',
              font: {
                size: 12,
                family: 'Inter, sans-serif'
              }
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            min: 90,
            max: 2500,
            ticks: {
              display: false
            }
          }
        },
        plugins: {
          annotation: {
            annotations: {
              serviceLine: {
                type: 'line',
                xMin: 3,
                xMax: 3,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                borderWidth: 2,
                borderDash: [6, 4],
                label: {
                  display: true,
                  content: serviceAdoption,
                  position: 'start',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  color: '#fff',
                  font: {
                    size: 12,
                    family: 'Inter, sans-serif'
                  },
                  padding: 8,
                  yAdjust: -20
                }
              }
            }
          },
          legend: {
            reverse: true,
            labels: {
              color: '#ddd',
              font: {
                size: 13,
                family: 'Inter, sans-serif',
                weight: 'bold'
              },
              padding: 20,
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          tooltip: {
            backgroundColor: 'rgba(20, 20, 20, 0.95)',
            titleColor: '#fff',
            bodyColor: '#fff',
            bodyFont: {
              size: 13,
              family: 'Inter, sans-serif'
            },
            titleFont: {
              size: 13,
              family: 'Inter, sans-serif',
              weight: 'bold'
            },
            padding: 12,
            cornerRadius: 8,
            displayColors: true,
            usePointStyle: true,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            callbacks: {
              label: (context: any) => {
                const label = context.dataset.label || '';
                if (context.parsed.y === 100) return `${label}: ${startingPoint}`;
                const monthIndex = context.dataIndex;
                if (monthIndex < 3) {
                  return `${label}: ${beforeAdoption}`;
                }
                return `${label}: ${afterAdoption}`;
              }
            }
          }
        }
      }
    });
  }, []);

  return (
    <div
      className="chart-container"
      style={{
        width: '100%',
        maxWidth: '1000px',
        margin: '2rem auto',
        padding: '2rem',
        background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <canvas ref={canvasRef} height={450}></canvas>
    </div>
  );
}