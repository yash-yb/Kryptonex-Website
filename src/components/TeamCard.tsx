import { useState, useRef, useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion'

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

// ─── Props ────────────────────────────────────────────────────────────────────

interface TeamCardProps {
  name: string
  role: string
  image?: string
  github?: string
  linkedin?: string
  instagram?: string
  index?: number
}

// ─── Stagger variants for social icons ───────────────────────────────────────

const iconVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, delay: i * 0.05, ease: 'easeOut' as const },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 8,
    scale: 0.9,
    transition: { duration: 0.15, delay: i * 0.03, ease: 'easeIn' as const },
  }),
}

// ─── Social icon button ───────────────────────────────────────────────────────

function SocialBtn({ href, label, children, custom }: { href?: string; label: string; children: React.ReactNode; custom: number }) {
  return (
    <motion.a
      variants={iconVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={custom}
      href={href || '#'}
      target={href ? '_blank' : undefined}
      rel="noopener noreferrer"
      onClick={!href ? (e) => e.preventDefault() : undefined}
      aria-label={label}
      whileHover={{ scale: 1.1, borderColor: '#eab308' }} // tailwind yellow-500
      whileTap={{ scale: 0.9 }}
      className="
        w-9 h-9 rounded-lg flex items-center justify-center shrink-0
        border border-[rgba(255,255,255,0.1)] bg-black/60 backdrop-blur-sm text-white/50
        hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]
        transition-colors duration-200 pointer-events-auto
      "
    >
      {children}
    </motion.a>
  )
}

// ─── HoverIcons ───────────────────────────────────────────────────────────────

function HoverIcons({ github, linkedin, instagram, name, hoverMV }: { github?: string; linkedin?: string; instagram?: string; name: string; hoverMV: ReturnType<typeof useMotionValue<number>> }) {
  const [isHovered, setIsHovered] = useState(false)
  useMotionValueEvent(hoverMV, 'change', (v) => setIsHovered(v === 1))

  const iconDefs = [
    github ? { Icon: GitHubIcon, href: github, label: `${name} GitHub` } : null,
    linkedin ? { Icon: LinkedInIcon, href: linkedin, label: `${name} LinkedIn` } : null,
    instagram ? { Icon: InstagramIcon, href: instagram, label: `${name} Instagram` } : null,
  ].filter(Boolean) as { Icon: typeof GitHubIcon; href: string; label: string }[]

  return (
    <AnimatePresence mode="sync">
      {isHovered &&
        iconDefs.map((item, i) => (
          <SocialBtn key={item.label} href={item.href} label={item.label} custom={i}>
            <item.Icon />
          </SocialBtn>
        ))}
    </AnimatePresence>
  )
}

// ─── Entry animation ──────────────────────────────────────────────────────────

const entryVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

// ─── Main TeamCard ────────────────────────────────────────────────────────────

export default function TeamCard({ name, role, image, github, linkedin, instagram, index = 0 }: TeamCardProps) {
  const _ref = useRef<HTMLDivElement>(null)

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)')
    setIsMobile(mql.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  const hoverMV = useMotionValue(0)

  // Fast & Slow motion springs for precise pop-out layering
  const springCfgFast = { stiffness: 350, damping: 25 }
  const springCfgSlow = { stiffness: 220, damping: 28 }

  // 1. CARRIER SHELL
  const outerScale = useSpring(useTransform(hoverMV, [0, 1], [1, isMobile ? 1.01 : 1.02]), springCfgFast)
  
  // 2. STACKING ORDER 
  const zIndex = useTransform(outerScale, s => (s > 1.005 ? 50 : 0))
  
  // 3. CARD CONTAINER GLOW BASE LAYER (absolute z-0)
  // Switched to using direct tailwind hover transition classes on the div to guarantee high-opacity visibility
  const cardRotateX = useSpring(useTransform(hoverMV, [0, 1], [0, isMobile ? 0 : 2]), springCfgFast)
  const cardRotateY = useSpring(useTransform(hoverMV, [0, 1], [0, isMobile ? 0 : -2]), springCfgFast)
  const cardY = useSpring(useTransform(hoverMV, [0, 1], [0, isMobile ? -4 : -8]), springCfgFast)

  // 4. IMAGE LAYER (Only scales from bottom origin. NO translateY, eliminating white artifacts at the bottom edge)
  const imgScale = useSpring(useTransform(hoverMV, [0, 1], [1, isMobile ? 1.04 : 1.15]), springCfgSlow)
  
  // 5. CONTENT & OVERLAY
  const contentY = useSpring(useTransform(hoverMV, [0, 1], [0, isMobile ? -2 : -4]), springCfgFast)
  const overlayOpacity = useSpring(useTransform(hoverMV, [0, 1], [0.7, 0.9]), springCfgFast)

  // Handlers for mobile & desktop hover
  const enableHover = () => hoverMV.set(1)
  const disableHover = () => hoverMV.set(0)

  return (
    // Outer Wrapper (relative, NO overflow-hidden)
    <motion.div
      ref={_ref}
      variants={entryVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={index}
      style={{ scale: outerScale, transformPerspective: 1200, zIndex }}
      onHoverStart={enableHover}
      onHoverEnd={disableHover}
      onTouchStart={enableHover}
      onTouchEnd={disableHover}
      className="relative w-full aspect-[3/4] pointer-events-auto group mt-8"
    >
      
      {/* ── GLOW BASE LAYER (absolute, z-0) ── */}
      <motion.div
        style={{ y: cardY, rotateX: cardRotateX, rotateY: cardRotateY }}
        className="
          absolute inset-0 rounded-xl bg-[#0A0A0A] z-0 will-change-transform
          border border-gray-800 transition-all duration-300 ease-out
          group-hover:border-yellow-500 group-hover:shadow-[0_0_50px_rgba(255,215,0,0.4)]
        "
      />

      {/* ── IMAGE LAYER & OVERLAY ── */}
      <motion.div
        style={{ scale: imgScale, transformOrigin: 'bottom center', rotateX: cardRotateX, rotateY: cardRotateY, y: cardY }}
        className="absolute inset-0 z-10 pointer-events-none will-change-transform"
      >
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            draggable={false}
            className="w-full h-full object-cover rounded-xl select-none"
          />
        ) : (
          <div className="w-full h-full bg-[#111111] rounded-xl flex items-center justify-center border border-white/5 shadow-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-white/5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
        )}

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent rounded-b-xl"
        />
      </motion.div>

      {/* ── CONTENT LAYER ── */}
      <motion.div
        style={{ y: contentY, rotateX: cardRotateX, rotateY: cardRotateY }}
        className="absolute inset-x-0 bottom-0 z-20 px-4 pb-5 flex flex-col items-center pointer-events-none will-change-transform"
      >
        {name && (
          <p className="font-inter font-bold text-[15px] sm:text-[16px] text-[#F5F5F5] leading-tight tracking-wide drop-shadow-md">
            {name}
          </p>
        )}
        <p className={`font-mono tracking-[0.15em] uppercase mt-1 mb-4 drop-shadow-sm ${name ? 'text-[10px] text-white/50' : 'text-xs sm:text-[13px] font-semibold text-white/80'}`}>
          {role}
        </p>
        
        <div className="flex items-center justify-center gap-2.5 min-h-[36px] pointer-events-auto">
          <HoverIcons
            github={github}
            linkedin={linkedin}
            instagram={instagram}
            name={name}
            hoverMV={hoverMV}
          />
        </div>
      </motion.div>

    </motion.div>
  )
}
