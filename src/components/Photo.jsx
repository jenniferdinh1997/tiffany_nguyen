// Shows a photo, or a labelled warm placeholder until the real image is added.
function Photo({ src, alt, label, className = '' }) {
  return (
    <div className={`photo ${className}`}>
      {src ? <img src={src} alt={alt} /> : <span className="photo__label">{label}</span>}
    </div>
  )
}

export default Photo
