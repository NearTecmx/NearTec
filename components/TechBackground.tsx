export default function TechBackground() {
  return (
    <div className="nt-bg-system" aria-hidden="true">
      <video
        className="nt-bg-system__video nt-bg-system__video--desktop"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/neartec/section-tech-bg.webp"
      >
        <source src="/images/video-fondo-horizontal.mp4" type="video/mp4" />
      </video>

      <video
        className="nt-bg-system__video nt-bg-system__video--mobile"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/neartec/section-tech-bg.webp"
      >
        <source src="/images/video-fondo-vertical.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
