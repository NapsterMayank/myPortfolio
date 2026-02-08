import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';

const CodeLine = ({ index, color }: { index: number; color: string }) => {
  const frame = useCurrentFrame();
  const opacity = Math.min(1, Math.max(0, (frame - index * 5) / 10));
  
  return (
    <div
      style={{
        height: 20,
        width: `${Math.random() * 80 + 20}%`,
        backgroundColor: color,
        opacity,
        marginBottom: 10,
        borderRadius: 4,
      }}
    />
  );
};

export const MyComposition = () => {
    const frame = useCurrentFrame();
    const { width, height } = useVideoConfig();

    return (
        <AbsoluteFill style={{ backgroundColor: '#09090b', padding: 20 }}>
            {new Array(15).fill(0).map((_, i) => (
                <CodeLine key={i} index={i} color={i % 3 === 0 ? '#a855f7' : '#27272a'} />
            ))}
            
            <AbsoluteFill style={{ 
                justifyContent: 'center', 
                alignItems: 'center',
                zIndex: 10,
            }}>
                <h1 style={{ 
                    fontFamily: 'monospace', 
                    fontSize: 80, 
                    fontWeight: 900,
                    color: 'white',
                    opacity: (frame > 60) ? 1 : 0,
                    transform: `scale(${Math.min(1, (frame - 60)/20)})`
                }}>
                    CHAOS
                </h1>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
