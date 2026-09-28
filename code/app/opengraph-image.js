import { ImageResponse } from 'next/og';
import { site } from '@/data/data';

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#faf9f6',
          color: '#17151c',
        }}
      >
        <div style={{ display: 'flex', fontSize: 40, fontWeight: 700 }}>
          anesu<span style={{ color: '#4a2fbd' }}>.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ fontSize: 48, color: '#4a2fbd', marginTop: 16 }}>{site.role}</div>
          <div style={{ fontSize: 28, color: '#5f5b69', marginTop: 28 }}>
            Data systems · Business intelligence · Applied machine learning
          </div>
        </div>
      </div>
    ),
    size
  );
}
