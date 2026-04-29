export default function TechBackground() {
  return (
    <div className="tech-background" aria-hidden="true">
      <div className="tech-background__plane tech-background__plane--top" />
      <div className="tech-background__plane tech-background__plane--bottom" />
      <div className="tech-background__hex tech-background__hex--left" />
      <div className="tech-background__hex tech-background__hex--right" />
      <div className="tech-background__circuit tech-background__circuit--one" />
      <div className="tech-background__circuit tech-background__circuit--two" />
      <div className="tech-background__beam tech-background__beam--one" />
      <div className="tech-background__beam tech-background__beam--two" />
      <div className="tech-background__nodes tech-background__nodes--near" />
      <div className="tech-background__nodes tech-background__nodes--far" />
      <div className="tech-background__edge" />
    </div>
  )
}