import './Photo.css'

interface PhotoProps {
  /** Image path, e.g. "/images/cupping.webp". Leave out to show a placeholder. */
  src?: string
  /** Describes the photo for screen readers and search engines. */
  alt?: string
  /** Text shown on the placeholder until a photo is added. */
  label?: string
  /** Which part of the photo stays in view when it is cropped (CSS object-position). */
  position?: string
  className?: string
}

// Shows a photo, or a labelled warm placeholder until the real image is added.
function Photo({ src, alt = '', label, position, className = '' }: PhotoProps) {
  return (
    <div className={`photo ${className}`}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" style={position ? { objectPosition: position } : undefined} />
      ) : (
        <span className="photo__label">{label}</span>
      )}
    </div>
  )
}

export default Photo
