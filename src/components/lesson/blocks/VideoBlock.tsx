export type VideoBlockData = {
  title?: string;
  /** YouTube video ID, or a full mp4 url */
  youtubeId?: string;
  src?: string;
  poster?: string;
  caption?: string;
  durationLabel?: string;
};

export const VideoBlock = ({ data }: { data: VideoBlockData }) => {
  return (
    <div
      className="rounded-3xl p-4 md:p-5 relative overflow-hidden border border-white/60"
      style={{
        background:
          "linear-gradient(135deg, hsl(0 0% 14% / 0.95) 0%, hsl(220 30% 20% / 0.92) 100%)",
        boxShadow:
          "0 12px 40px -12px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.15)",
      }}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎬</span>
          <h3 className="font-display font-black text-lg md:text-xl text-forest-cream">
            {data.title ?? "Видео"}
          </h3>
        </div>
        {data.durationLabel && (
          <span className="text-xs font-bold text-forest-cream/70">{data.durationLabel}</span>
        )}
      </div>

      <div className="aspect-video rounded-2xl overflow-hidden bg-black">
        {data.youtubeId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${data.youtubeId}`}
            title={data.title ?? "video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : data.src ? (
          <video
            className="w-full h-full object-cover"
            src={data.src}
            poster={data.poster}
            controls
            preload="metadata"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-forest-cream/60 text-sm">
            Видео скоро появится
          </div>
        )}
      </div>

      {data.caption && (
        <p className="mt-2 text-sm text-forest-cream/80 font-semibold">{data.caption}</p>
      )}
    </div>
  );
};
