"use client";

import { Player } from "@remotion/player";
import { MyComposition } from "../../remotion/Composition";

export const RemotionCard = () => {
  return (
    <div className="relative w-full h-full min-h-[200px] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800">
      <Player
        component={MyComposition}
        durationInFrames={120}
        compositionWidth={600}
        compositionHeight={400}
        fps={30}
        style={{
          width: '100%',
          height: '100%',
        }}
        autoPlay
        loop
        controls={false}
      />
      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 backdrop-blur rounded text-[10px] text-zinc-500 font-mono border border-zinc-800">
        Rendering...
      </div>
    </div>
  );
};
