export default function TechBackground() {
  return (
    <div className="nt-bg-system" aria-hidden="true">
      <video
        className="nt-bg-system__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/neartec/section-tech-bg.webp"
      >
        <source src="/images/video-fondo-vertical.mp4" type="video/mp4" media="(max-width: 720px)" />
        <source src="/images/video-fondo-horizontal.mp4" type="video/mp4" media="(min-width: 721px)" />
      </video>
      <div className="nt-bg-system__white" />
      <div className="nt-bg-system__grid nt-bg-system__grid--top" />
      <div className="nt-bg-system__grid nt-bg-system__grid--bottom" />
      <div className="nt-bg-system__circuit nt-bg-system__circuit--a" />
      <div className="nt-bg-system__circuit nt-bg-system__circuit--b" />
      <div className="nt-bg-system__beam nt-bg-system__beam--one" />
      <div className="nt-bg-system__beam nt-bg-system__beam--two" />
      <div className="nt-bg-system__particles nt-bg-system__particles--near" />
      <div className="nt-bg-system__particles nt-bg-system__particles--far" />
      <div className="nt-bg-system__vignette" />
    </div>
  )
}
