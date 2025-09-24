export default function ArrowButton({ direction = "left", onClick, disabled }) {
  const isLeft = direction === "left";
  // En desktop quedan más “adentro” del gutter; en mobile pegadas al borde
  const pos = isLeft
    ? "left-2 sm:left-3 lg:left-6 xl:left-8"
    : "right-2 sm:right-3 lg:right-6 xl:right-8";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? "Anterior" : "Siguiente"}
      className={`absolute top-1/2 -translate-y-1/2 ${pos} z-20 grid place-items-center
                  w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-gray-800
                  shadow ring-1 ring-black/10 hover:bg-white/95 disabled:opacity-40 disabled:cursor-default`}
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        {isLeft
          ? <path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          : <path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
      </svg>
    </button>
  );
}
