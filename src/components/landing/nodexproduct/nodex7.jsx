import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Repeat,
  Pipette,
  Activity,
  Stethoscope,
  HeartPulse,
} from "lucide-react";

export default function NodexAttachmentSection() {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [loop, setLoop] = useState(true);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const [rate, setRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // helper to format time mm:ss
  const fmt = (t) => {
    if (!isFinite(t)) return "0:00";
    const m = Math.floor(t / 60)
      .toString()
      .padStart(1, "0");
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onLoaded = () => setDuration(v.duration || 0);
    const onTime = () => setCurrent(v.currentTime || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    // defaults
    v.muted = isMuted;
    v.loop = loop;
    v.playbackRate = rate;

    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, [isMuted, loop, rate]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const changeProgress = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const val = Number(e.target.value);
    v.currentTime = (val / 100) * duration;
    setCurrent(v.currentTime);
  };

  const changeVolume = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const val = Number(e.target.value);
    v.volume = val;
    setVolume(val);
    if (val > 0 && v.muted) {
      v.muted = false;
      setIsMuted(false);
    }
  };

  const changeRate = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const val = Number(e.target.value);
    v.playbackRate = val;
    setRate(val);
  };

  const toggleLoop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.loop = !v.loop;
    setLoop(v.loop);
  };

  const toggleFullscreen = async () => {
    const container = document.getElementById("nodex-video-wrap");
    try {
      if (!document.fullscreenElement) {
        await container.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const enterPiP = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (document.pictureInPictureEnabled && !v.disablePictureInPicture) {
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        } else {
          await v.requestPictureInPicture();
        }
      } catch {}
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4 md:px-12">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <div className="text-center pb-10 sm:pb-12">
          <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-semibold leading-tight tracking-tight">
            How The Attachment -
            <span className="inline-block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              {" "}System Works
            </span>
          </h2>
        </div>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Nodex features a proprietary twist-and-lock mechanism that makes changing attachments simple and secure. Each attachment is recognized automatically by the device, which then adapts its interface and functionality accordingly.
        </p>
      </div>

      {/* Video */}
    {/* Video */}
<div
  id="nodex-video-wrap"
  className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden 
             shadow-2xl ring-1 ring-black/5 bg-black"
>
  <video
    ref={videoRef}
    className="h-full w-full object-cover"
    src="/nodexvideos/nodex vid.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Custom Controls */}
  <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 md:p-4">
    <div
      className="rounded-xl backdrop-blur-lg bg-black/55 border border-white/10 
                 p-3 sm:p-4 shadow-xl space-y-2"
    >
      {/* Progress */}
      <input
        ref={progressRef}
        type="range"
        min={0}
        max={100}
        value={duration ? (current / duration) * 100 : 0}
        onChange={changeProgress}
        className="w-full accent-orange-500 cursor-pointer h-2 sm:h-1.5"
      />

      {/* Controls Wrapper */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        
        {/* Left Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="p-2.5 rounded-lg hover:bg-white/10 active:scale-95"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>

          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
            className="p-2.5 rounded-lg hover:bg-white/10 active:scale-95"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Volume slider → hide on mobile */}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={isMuted ? 0 : volume}
            onChange={changeVolume}
            className="hidden sm:block w-24 md:w-32 accent-orange-500"
          />

          <span className="ml-1 text-[11px] sm:text-sm text-white/80 tabular-nums">
            {fmt(current)} / {fmt(duration)}
          </span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-2">
          <button
            onClick={toggleLoop}
            aria-label="Toggle Loop"
            className={`p-2.5 rounded-lg hover:bg-white/10 active:scale-95 ${
              loop ? "bg-white/10" : ""
            }`}
          >
            <Repeat className="w-5 h-5 text-white" />
          </button>

          <select
            value={rate}
            onChange={changeRate}
            className="bg-white/10 text-white text-xs sm:text-sm rounded-md 
                       px-2 py-1 focus:outline-none"
          >
            {[0.5, 0.75, 1, 1.25, 1.5, 2].map((r) => (
              <option key={r} value={r} className="text-black">
                {r}x
              </option>
            ))}
          </select>

          <button
            onClick={enterPiP}
            aria-label="Picture in picture"
            className="p-2.5 rounded-lg hover:bg-white/10 active:scale-95"
          >
            <Pipette className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={toggleFullscreen}
            aria-label="Toggle Fullscreen"
            className="p-2.5 rounded-lg hover:bg-white/10 active:scale-95"
          >
            {isFullscreen ? (
              <Minimize className="w-5 h-5 text-white" />
            ) : (
              <Maximize className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Steps */}
      <div className="text-center max-w-5xl mx-auto mt-12 mb-16">
        <h3 className="text-2xl font-bold mb-4">Simple 3-Step Process</h3>
        <ol className="text-gray-700 text-lg space-y-2">
          <li>
            1. Select your desired attachment based on your needs (diagnostic, therapy, or exercise)
          </li>
          <li>2. Align the attachment with the base unit and twist clockwise until you hear a click</li>
          <li>3. The device will automatically recognize the attachment and configure the appropriate settings</li>
        </ol>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-2xl md:text-3xl font-semibold mb-8">Complete Lung Health Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Stethoscope className="w-14 h-14" />,
              title: "Diagnose",
              text: "Monitor lung health and detect issues before they become serious",
            },
            {
              icon: <Activity className="w-14 h-14" />,
              title: "Treat",
              text: "Administer medication efficiently with precise control",
            },
            {
              icon: <HeartPulse className="w-14 h-14" />,
              title: "Strengthen",
              text: "Build respiratory muscle strength and improve overall lung function",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl p-6 text-center bg-gradient-to-br from-white to-orange-50 border border-orange-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)]">
                <div className="mx-auto mb-4 flex items-center justify-center rounded-2xl p-4 bg-orange-500/10 text-orange-600">
                  {c.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{c.title}</h4>
                <p className="text-gray-600">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}