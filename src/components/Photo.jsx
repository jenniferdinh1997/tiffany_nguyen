// Shows a photo, or a labelled warm placeholder until the real image is added.
// `position` sets which part of the photo stays in view when it is cropped (CSS object-position).
function Photo({ src, alt, label, position, className = '' }) {
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
