import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ExternalLink, Play, Pause, RotateCcw, Sparkles, X, ChevronLeft, ChevronRight, Loader2, Volume2, VolumeX } from 'lucide-react';
import ReactPlayer from 'react-player';

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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  const Player = ReactPlayer as any;

  useEffect(() => {
    if (selectedVideo) {
      const timer = window.setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => window.clearTimeout(timer);
    }
  }, [selectedVideo]);

  // Handle auto-hiding controls
  useEffect(() => {
    if (isPlaying && !seeking) {
      if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 2500);
    } else {
      setShowControls(true);
    }
    return () => {
      if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
    };
  }, [isPlaying, seeking]);

  const filteredVideos = useMemo(() => {
    return filter === 'All' ? videoSamples : videoSamples.filter(v => v.category === filter);
  }, [filter]);

  const openVideo = (video: typeof videoSamples[0]) => {
    setSelectedVideo(video);
    setIsLoading(true);
    setIsPlaying(true);
    setPlayed(0);
    setShowControls(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  const formatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    return `${mm}:${ss}`;
  };

  const handleProgress = (state: { played: number }) => {
    if (!seeking) setPlayed(state.played);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseDown = () => setSeeking(true);

  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    setSeeking(false);
    playerRef.current?.seekTo(parseFloat((e.target as HTMLInputElement).value));
  };

  const isEmbed = (url: string) => 
    url.includes('gumlet.tv') || 
    url.includes('play.gumlet.io') || 
    url.includes('screenpal.com');

  const getEmbedUrl = (url: string) => {
    if (url.includes('gumlet.tv/watch/')) {
      const id = url.split('/watch/')[1].replace('/', '');
      return `https://play.gumlet.io/embed/${id}?autoplay=1&muted=0&loop=0`;
    }
    if (url.includes('screenpal.com/watch/')) {
      const parts = url.split('/watch/');
      const id = parts[parts.length - 1].split('?')[0];
      return `https://go.screenpal.com/player/${id}?autoplay=1&ff=1`;
    }
    return url;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="edits" className="py-20 md:py-32 px-4 md:px-6 bg-black relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-2">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white flex items-center gap-4">
              Portfolio <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
            </h2>
            <p className="text-zinc-400 max-w-xl text-lg md:text-xl leading-relaxed">
              High-impact systems across every vertical content. Swipe to explore the work.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2 mr-4">
              <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full glass-effect border border-zinc-800 flex items-center justify-center hover:bg-white/10 transition-all"><ChevronLeft className="w-6 h-6" /></button>
              <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full glass-effect border border-zinc-800 flex items-center justify-center hover:bg-white/10 transition-all"><ChevronRight className="w-6 h-6" /></button>
            </div>
            <div className="flex flex-wrap gap-2 p-1 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              {(['All', 'Shorts', 'Ads', 'Motion', 'Podcast'] as Category[]).map((cat) => (
                <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}>{cat}</button>
              ))}
            </div>
          </div>
        </div>

        <div ref={scrollContainerRef} className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-12 no-scrollbar px-2">
          {filteredVideos.map((sample) => (
            <div key={sample.id} onClick={() => openVideo(sample)} className="flex-none w-[280px] md:w-[350px] snap-center group relative aspect-[9/16] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl cursor-pointer">
              <img 
                src={sample.thumbnail} 
                alt={sample.title} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity" />
              <div className="absolute top-8 left-8"><span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">{sample.category}</span></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"><div className="w-20 h-20 rounded-full bg-blue-600/90 flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform"><Play className="w-8 h-8 text-white fill-white" /></div></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 space-y-2 translate-y-4 group-hover:translate-y-0 transition-all duration-500"><h3 className="text-xl md:text-2xl font-black text-white leading-tight tracking-tight uppercase">{sample.title}</h3><p className="text-xs text-zinc-400 font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">{sample.description}</p></div>
            </div>
          ))}
        </div>

        <div className="pt-8 text-center">
          <a href="https://drive.google.com/drive/folders/1xACuCah5-Yme7vX_J4csnfDw5uoTy8fH" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-zinc-200 transition-all shadow-2xl">Full Vault <ExternalLink className="w-5 h-5" /></a>
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 transform translate-z-0">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl cursor-pointer" onClick={closeVideo} />
          
          <div className="relative w-full max-w-[450px] aspect-[9/16] bg-black rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-zinc-800 shadow-[0_0_150px_rgba(37,99,235,0.2)] animate-in zoom-in duration-300 will-change-transform" onClick={() => setShowControls(true)}>
            
            {/* Top Bar with Close Button */}
            <div className={`absolute top-0 left-0 right-0 z-[70] p-8 flex justify-end transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <button 
                onClick={(e) => { e.stopPropagation(); closeVideo(); }} 
                className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-90"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {isLoading && (
              <div className="absolute inset-0 z-[65] flex flex-col items-center justify-center bg-zinc-950 gap-4">
                <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Processing Clip...</span>
              </div>
            )}

            <div className="w-full h-full relative z-40 bg-black overflow-hidden">
              {isEmbed(selectedVideo.videoUrl) ? (
                <iframe
                  src={getEmbedUrl(selectedVideo.videoUrl)}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  onLoad={() => setIsLoading(false)}
                />
              ) : (
                <>
                  <Player 
                    ref={playerRef}
                    url={selectedVideo.videoUrl} 
                    width="100%"
                    height="100%"
                    playing={isPlaying}
                    muted={isMuted}
                    volume={1}
                    controls={false}
                    loop={false}
                    playsinline={true}
                    onReady={() => setIsLoading(false)}
                    onProgress={handleProgress}
                    onDuration={setDuration}
                    onEnded={() => setIsPlaying(false)}
                    config={{
                      file: { attributes: { style: { width: '100%', height: '100%', objectFit: 'cover' } } }
                    } as any}
                  />

                  {/* UI Overlay Layer */}
                  <div className={`absolute inset-0 z-50 flex flex-col justify-end transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    
                    {/* Centered Play Toggle (Mobile Friendly) */}
                    <div className="absolute inset-0 flex items-center justify-center" onClick={() => setIsPlaying(!isPlaying)}>
                       <button className={`w-24 h-24 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white transition-all transform ${!isPlaying ? 'scale-110 opacity-100' : 'scale-75 opacity-0'}`}>
                         {isPlaying ? <Pause className="w-10 h-10 fill-white" /> : <Play className="w-10 h-10 fill-white ml-2" />}
                       </button>
                    </div>

                    {/* Integrated Control Panel */}
                    <div className="p-8 pt-20 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                      <div className="space-y-6">
                        
                        {/* Custom Progress Bar */}
                        <div className="relative h-1 w-full bg-white/10 rounded-full group cursor-pointer overflow-hidden">
                          <input
                            type="range"
                            min={0}
                            max={0.999999}
                            step="any"
                            value={played}
                            onMouseDown={handleSeekMouseDown}
                            onChange={handleSeekChange}
                            onMouseUp={handleSeekMouseUp}
                            className="absolute inset-0 w-full opacity-0 z-20 cursor-pointer"
                          />
                          <div 
                            className="absolute left-0 top-0 h-full bg-blue-500 rounded-full z-10 transition-all duration-75"
                            style={{ width: `${played * 100}%` }}
                          />
                        </div>

                        {/* Functional Controls Row */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:text-blue-400 transition-colors">
                              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                            </button>
                            <button onClick={() => playerRef.current?.seekTo(0)} className="text-zinc-500 hover:text-white transition-colors">
                              <RotateCcw className="w-4 h-4" />
                            </button>
                            <span className="text-[10px] font-bold text-zinc-500 tabular-nums">
                              {formatTime(played * duration)} / {formatTime(duration)}
                            </span>
                          </div>

                          <button onClick={() => setIsMuted(!isMuted)} className="text-zinc-500 hover:text-white transition-colors">
                            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                          </button>
                        </div>

                        {/* Video Information Branding */}
                        <div className="space-y-2 border-t border-white/5 pt-6">
                          <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                            <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.2em]">{selectedVideo.category}</span>
                          </div>
                          <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">{selectedVideo.title}</h3>
                          <p className="text-zinc-500 text-xs line-clamp-1 opacity-80">{selectedVideo.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};