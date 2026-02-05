import React, { useState, useMemo, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { ExternalLink, Play, Pause, Sparkles, X, ChevronLeft, ChevronRight, Loader2, Volume2, VolumeX, PictureInPicture2, Maximize2, Minimize2 } from 'lucide-react';

type Category = 'All' | 'Shorts' | 'Ads' | 'Motion' | 'Podcast';

const videoSamples = [
  {
    id: '1',
    title: 'Agency Motion Graphics',
    category: 'Motion',
    description: 'High-end dynamic typography and 2D/3D motion assets for agency branding and high-converting performance ads.',
    thumbnail: 'https://github.com/kaizenxmoney-ui/Portfolio-Website/blob/main/motion.PNG?raw=true',
    videoUrl: 'https://go.screenpal.com/watch/cOnfoQn3JjJ'
  },
  {
    id: '2',
    title: 'Cinematic Podcast Clips',
    category: 'Podcast',
    description: 'Multi-cam podcast editing with color grading and dynamic punch-ins.',
    thumbnail: 'https://github.com/kaizenxmoney-ui/Portfolio-Website/blob/main/cinematicpodcast.PNG?raw=true',
    videoUrl: 'https://go.screenpal.com/watch/cOnfoEn3JDN'
  },
  {
    id: '3',
    title: 'Viral YouTube Shorts',
    category: 'Shorts',
    description: 'Fast-paced edits designed to break the algorithm and maximize retention.',
    thumbnail: 'https://github.com/kaizenxmoney-ui/Portfolio-Website/blob/main/bill.PNG?raw=true',
    videoUrl: 'https://go.screenpal.com/watch/cOnfo2n3JQG'
  },
  {
    id: '4',
    title: 'Instagram Conversion Ad',
    category: 'Ads',
    description: 'Performance-focused UGC edit designed to drive clicks and sales.',
    thumbnail: 'https://github.com/kaizenxmoney-ui/Portfolio-Website/blob/main/instaads.PNG?raw=true',
    videoUrl: 'https://go.screenpal.com/watch/cOnfo4n3J24'
  },
  {
    id: '5',
    title: 'Crypto & Web3 Edits',
    category: 'Motion',
    description: 'Stylized technical edits with custom overlays for the Web3 space.',
    thumbnail: 'https://github.com/kaizenxmoney-ui/Portfolio-Website/blob/main/crypto.PNG?raw=true',
    videoUrl: 'https://go.screenpal.com/watch/cOnf2Rn3J1m'
  },
  {
    id: '6',
    title: 'AI Custom Ads',
    category: 'Ads',
    description: 'Integrating AI-generated visuals into traditional ad workflows.',
    thumbnail: 'https://github.com/kaizenxmoney-ui/Portfolio-Website/blob/main/customai.PNG?raw=true',
    videoUrl: 'https://go.screenpal.com/watch/cOnfoxn3JIP'
  }
];

export const VideoShowcase: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof videoSamples[0] | null>(null);
  const [filter, setFilter] = useState<Category>('All');
  const [isLoading, setIsLoading] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMiniMode, setIsMiniMode] = useState(false);
  const [isNativePiP, setIsNativePiP] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const controlsTimeoutRef = useRef<number | null>(null);
  const loadTimeoutRef = useRef<number | null>(null);

  const Player = ReactPlayer as any;

  const resetControlsTimer = () => {
    if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
    if (isPlaying && !seeking && !isMiniMode) {
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (selectedVideo) {
      if ((isPlaying || seeking) && !isMiniMode) {
        resetControlsTimer();
      } else {
        if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
        setShowControls(true);
      }
    }
    return () => {
      if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
    };
  }, [selectedVideo, isPlaying, seeking, isMiniMode]);

  const filteredVideos = useMemo(() => {
    return filter === 'All' ? videoSamples : videoSamples.filter(v => v.category === filter);
  }, [filter]);

  const openVideo = (video: typeof videoSamples[0]) => {
    const isMobile = window.innerWidth < 768;
    setSelectedVideo(video);
    setIsLoading(true);
    setIsBuffering(false);
    setHasError(false);
    setIsPlaying(!isMobile);
    setIsMiniMode(false);
    setIsNativePiP(false);
    setPlayed(0);
    setShowControls(true);
    
    if (loadTimeoutRef.current) window.clearTimeout(loadTimeoutRef.current);
    loadTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    if (isMobile) {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsMiniMode(false);
    setIsNativePiP(false);
    document.body.style.overflow = 'auto';
    if (loadTimeoutRef.current) window.clearTimeout(loadTimeoutRef.current);
  };

  const toggleMiniMode = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsMiniMode(!isMiniMode);
    if (!isMiniMode) {
      document.body.style.overflow = 'auto';
    } else if (window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    }
  };

  const toggleNativePiP = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsNativePiP(!isNativePiP);
    if (!isNativePiP && !isMiniMode) setIsMiniMode(true);
  };

  const formatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const mm = date.getUTCMinutes();
    const ss = Math.floor(date.getUTCSeconds()).toString().padStart(2, '0');
    return `${mm}:${ss}`;
  };

  const handleProgress = (state: any) => {
    if (!seeking) setPlayed(state.played);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setPlayed(val);
    if (!isEmbed(selectedVideo?.videoUrl || '')) {
       playerRef.current?.seekTo(val);
    }
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
    setShowControls(true);
    if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
  };

  const handleSeekMouseUp = (e: any) => {
    setSeeking(false);
    playerRef.current?.seekTo(parseFloat(e.target.value));
    resetControlsTimer();
  };

  const handleVideoTap = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('input[type="range"]')) return;

    if (isMiniMode) {
      toggleMiniMode();
      return;
    }

    if (!showControls) {
      setShowControls(true);
      resetControlsTimer();
    } else {
      setIsPlaying(!isPlaying);
      resetControlsTimer();
    }
  };

  const isEmbed = (url: string) => 
    url.includes('gumlet.tv') || 
    url.includes('play.gumlet.io') || 
    url.includes('screenpal.com');

  const getEmbedUrl = (url: string) => {
    const isMobile = window.innerWidth < 768;
    const autoplay = isMobile ? '0' : '1';
    if (url.includes('gumlet.tv/watch/')) {
      const id = url.split('/watch/')[1].replace('/', '');
      return `https://play.gumlet.io/embed/${id}?autoplay=${autoplay}&muted=1&loop=1&playsinline=1`;
    }
    if (url.includes('screenpal.com/watch/')) {
      const parts = url.split('/watch/');
      const id = parts[parts.length - 1].split('?')[0];
      return `https://go.screenpal.com/player/${id}?autoplay=${autoplay}&ff=1&loop=1&muted=1`;
    }
    return url;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const step = clientWidth * 0.75;
      const scrollTo = direction === 'left' ? scrollLeft - step : scrollLeft + step;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="edits" className="py-16 md:py-32 px-4 md:px-6 bg-black relative">
      <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-600/5 blur-[50px] md:blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1 reveal">
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-[2rem] leading-tight md:text-7xl font-black tracking-tighter text-white flex items-center gap-3">
              Portfolio <Sparkles className="w-5 h-5 md:w-12 md:h-12 text-blue-500" />
            </h2>
            <p className="text-zinc-500 max-w-xl text-sm md:text-xl font-medium leading-relaxed">
              High-impact systems across every vertical. Swipe to explore work.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2 mr-4">
              <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-all"><ChevronRight className="w-5 h-5" /></button>
            </div>
            <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-900/40 border border-zinc-800/50 overflow-x-auto no-scrollbar w-full md:w-auto">
              {(['All', 'Shorts', 'Ads', 'Motion', 'Podcast'] as Category[]).map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setFilter(cat)} 
                  className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-[10px] md:text-xs font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-white text-black' : 'text-zinc-600'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div 
          ref={scrollContainerRef} 
          className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-12 no-scrollbar px-1 -mx-4 md:mx-0 px-4 md:px-0 scroll-smooth"
        >
          {filteredVideos.map((sample, idx) => (
            <ThumbnailCard 
              key={sample.id}
              sample={sample}
              idx={idx}
              onClick={() => openVideo(sample)}
            />
          ))}
        </div>

        <div className="pt-2 md:pt-8 text-center px-4 reveal">
          <a 
            href="https://drive.google.com/drive/folders/1xACuCah5-Yme7vX_J4csnfDw5uoTy8fH" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 md:px-12 py-5 md:py-6 rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] text-[11px] md:text-sm hover:bg-zinc-200 shadow-2xl active:scale-95"
          >
            Full Vault <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>

      {selectedVideo && (
        <div 
          className={`fixed z-[100] transition-all duration-300 ${isMiniMode 
            ? 'bottom-6 right-6 w-[180px] md:w-[300px] aspect-[9/16] pointer-events-auto' 
            : 'inset-0 flex items-center justify-center pointer-events-none'}`}
        >
          {!isMiniMode && (
            <div 
              className="absolute inset-0 bg-black/95 cursor-pointer pointer-events-auto" 
              onClick={closeVideo} 
            />
          )}
          
          <div 
            className={`relative group bg-black shadow-2xl overflow-hidden pointer-events-auto ${isMiniMode 
              ? 'w-full h-full rounded-2xl border border-white/10' 
              : 'w-full h-full md:h-[90vh] md:max-w-[420px] md:aspect-[9/16] md:rounded-[2rem]'}`}
          >
            {/* Aligned Close Button for mobile to match the header's menu button (right-6 w-12 h-12) */}
            {!isMiniMode && (
              <button 
                onClick={(e) => { e.stopPropagation(); closeVideo(); }}
                className="absolute top-4 right-6 md:right-4 z-[95] w-12 h-12 md:w-10 md:h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white active:scale-90 pointer-events-auto shadow-2xl"
                title="Close video"
              >
                <X className="w-6 h-6 md:w-5 md:h-5" />
              </button>
            )}

            <div className={`absolute top-0 left-0 right-0 z-[80] p-4 flex items-center justify-between pointer-events-none transition-opacity ${showControls || isMiniMode ? 'opacity-100' : 'opacity-0'}`}>
               {!isMiniMode ? (
                 <>
                   <div className="flex flex-col bg-black/60 p-2 px-3 rounded-xl border border-white/5">
                      <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">{selectedVideo.category}</span>
                      <h3 className="text-[10px] md:text-xs font-black text-white uppercase truncate max-w-[120px]">{selectedVideo.title}</h3>
                   </div>
                 </>
               ) : (
                 <div className="flex items-center gap-2 ml-auto pointer-events-auto">
                    <button onClick={toggleMiniMode} className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg active:scale-90">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    <button onClick={closeVideo} className="w-8 h-8 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center shadow-lg active:scale-90">
                      <X className="w-4 h-4" />
                    </button>
                 </div>
               )}
            </div>

            {(isLoading || isBuffering || hasError) && (
              <div className="absolute inset-0 z-[70] flex flex-col items-center justify-center bg-[#050505]">
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin opacity-40" />
              </div>
            )}

            <div className="w-full h-full relative z-50 bg-black" onClick={handleVideoTap}>
              {isEmbed(selectedVideo.videoUrl) ? (
                <iframe
                  src={getEmbedUrl(selectedVideo.videoUrl)}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  onLoad={() => setIsLoading(false)}
                />
              ) : (
                <Player 
                  ref={playerRef}
                  url={selectedVideo.videoUrl} 
                  width="100%"
                  height="100%"
                  playing={isPlaying}
                  muted={isMuted}
                  pip={isNativePiP}
                  onEnablePIP={() => setIsNativePiP(true)}
                  onDisablePIP={() => setIsNativePiP(false)}
                  volume={1}
                  controls={false}
                  loop={true}
                  playsinline={true}
                  onReady={() => setIsLoading(false)}
                  onBuffer={() => setIsBuffering(true)}
                  onBufferEnd={() => setIsBuffering(false)}
                  onError={() => { setHasError(true); setIsLoading(false); }}
                  onProgress={handleProgress}
                  onDuration={setDuration}
                  config={{
                    file: {
                      attributes: {
                        style: { width: '100%', height: '100%', objectFit: 'cover' },
                        playsInline: true,
                        webkitPlaysInline: true,
                        preload: 'auto',
                        muted: true
                      }
                    }
                  } as any}
                />
              )}

              <div className={`absolute inset-0 z-[65] transition-opacity ${showControls && !isMiniMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white shadow-2xl">
                     {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-1" />}
                   </div>
                </div>

                <div 
                  className="absolute bottom-0 left-0 right-0 p-6 pb-12 md:pb-8 pt-20 bg-gradient-to-t from-black via-black/80 to-transparent"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-6">
                    <div className="relative h-6 flex items-center cursor-pointer">
                      <input
                        type="range"
                        min={0}
                        max={0.999999}
                        step="any"
                        value={played}
                        onMouseDown={handleSeekMouseDown}
                        onTouchStart={handleSeekMouseDown}
                        onChange={handleSeekChange}
                        onMouseUp={handleSeekMouseUp}
                        onTouchEnd={handleSeekMouseUp}
                        className="w-full h-1 bg-zinc-800 rounded-full appearance-none accent-blue-500"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <button 
                          onClick={() => setIsPlaying(!isPlaying)} 
                          className="text-white active:scale-90 p-2 -m-2"
                        >
                          {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                        </button>
                        <div className="text-[10px] md:text-[11px] font-black text-zinc-400 tabular-nums uppercase tracking-widest">
                          {formatTime(played * duration)} <span className="mx-2 text-zinc-800">/</span> {formatTime(duration)}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        {!isEmbed(selectedVideo.videoUrl) && (
                          <button 
                            onClick={toggleNativePiP}
                            className={`p-2 -m-2 ${isNativePiP ? 'text-blue-500' : 'text-zinc-500'}`}
                          >
                            <PictureInPicture2 className="w-6 h-6" />
                          </button>
                        )}
                        <button 
                          onClick={() => setIsMuted(!isMuted)} 
                          className="text-zinc-500 active:scale-90 p-2 -m-2"
                        >
                          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ThumbnailCard: React.FC<{ sample: any; idx: number; onClick: () => void }> = ({ sample, idx, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      onClick={onClick} 
      className="flex-none w-[260px] md:w-[360px] snap-center group relative aspect-[9/16] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-zinc-800 bg-[#0a0a0a] shadow-xl cursor-pointer active:scale-[0.98] transition-transform reveal"
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#0d0d0d] flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-zinc-900" />
        </div>
      )}
      
      <img 
        src={sample.thumbnail} 
        alt={sample.title} 
        decoding="async"
        loading="lazy"
        className={`w-full h-full object-cover relative z-10 md:transition-transform md:duration-1000 md:group-hover:scale-105 ${isLoaded ? 'opacity-60 md:opacity-50 md:group-hover:opacity-100' : 'opacity-0'}`} 
        onLoad={() => setIsLoaded(true)}
      />
      
      <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20 ${isLoaded ? 'opacity-90' : 'opacity-0'}`} />
      
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-blue-600/90 flex items-center justify-center shadow-2xl scale-95 md:scale-75 md:group-hover:scale-100 transition-transform">
          <Play className="w-6 h-6 text-white fill-white ml-1" />
        </div>
      </div>

      <div className="absolute top-6 left-6 z-30">
        <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[9px] font-black text-white uppercase tracking-widest shadow-lg">
          {sample.category}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 space-y-1 z-30">
        <h3 className="text-xl md:text-2xl font-black text-white leading-tight tracking-tight uppercase">
          {sample.title}
        </h3>
        <p className="text-[10px] text-zinc-400 font-bold leading-relaxed line-clamp-2 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity">
          {sample.description}
        </p>
      </div>
    </div>
  );
};