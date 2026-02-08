import { registerRoot } from 'remotion';
import { MyComposition } from './Composition';

export const RemotionRoot: React.FC = () => {
  return (
    <MyComposition />
  );
};

registerRoot(RemotionRoot);
