import { motion } from 'framer-motion'
import TeamCard from '../components/TeamCard'
import teamData from '../data/teamData'

// ─── Animation helpers ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

// ─── Section heading component ───────────────────────────────────────────────

interface SectionHeadingProps {
  label: string
  title: string
  sectionIndex: number
}

function SectionHeading({ label, title, sectionIndex }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={sectionIndex}
      className="space-y-2"
    >
      <div className="flex items-center gap-4">
        <div className="w-6 h-px bg-[#D4AF37]" />
        <span className="font-mono text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase">
          {label}
        </span>
        <div className="flex-1 h-px bg-white/5" />
      </div>
      <h3 className="font-orbitron font-bold text-xl text-[#F5F5F5] tracking-wide">
        {title}
      </h3>
    </motion.div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-20 md:space-y-28">

        {/* ── Page Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="pt-10 text-center space-y-4"
        >
          <p className="font-mono text-[#D4AF37] text-[11px] tracking-[0.4em] uppercase">
            System / Personnel
          </p>
          <h1 className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl text-[#F5F5F5] tracking-tight">
            TEAM
          </h1>
          <p className="font-inter text-white/40 text-sm sm:text-base max-w-sm sm:max-w-md mx-auto leading-relaxed">
            Meet the people behind Kryptonex
          </p>
          <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent mt-6" />
        </motion.div>

        {/* ── 01 / LEADERSHIP ──────────────────────────────────────────────── */}
        <section className="space-y-10">
          <SectionHeading label="01 / LEADERSHIP" title="LEADERSHIP" sectionIndex={0} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16 pt-10 pb-4">
            {teamData.leadership.map((m, i) => (
              <div key={m.name + i} className="scale-[1.08] origin-top">
                <TeamCard
                  name={m.name}
                  role={m.role}
                  image={m.image}
                  github={m.github}
                  linkedin={m.linkedin}
                  instagram={m.instagram}
                  index={i}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── 02 / TECHNICAL TEAM ───────────────────────────────────────────── */}
        <section className="space-y-10">
          <SectionHeading label="02 / TECHNICAL TEAM" title="TECHNICAL TEAM" sectionIndex={1} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16 pt-10 pb-4">
            {teamData.technical.map((m, i) => (
              <TeamCard
                key={m.name + i}
                name={m.name}
                role={m.role}
                image={m.image}
                github={m.github}
                linkedin={m.linkedin}
                instagram={m.instagram}
                index={i}
              />
            ))}
          </div>
        </section>

        {/* ── 03 / EVENTS & LOGISTICS TEAM ─────────────────────────────────────────────── */}
        <section className="space-y-10">
          <SectionHeading label="03 / EVENTS & LOGISTICS TEAM" title="EVENTS & LOGISTICS TEAM" sectionIndex={2} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16 pt-10 pb-4">
            {teamData.events.map((m, i) => (
              <TeamCard
                key={m.name + i}
                name={m.name}
                role={m.role}
                image={m.image}
                github={m.github}
                linkedin={m.linkedin}
                instagram={m.instagram}
                index={i}
              />
            ))}
          </div>
        </section>

        {/* ── 04 / OUTREACH & SPONSORSHIP TEAM ────────────────────────────────────────── */}
        <section className="space-y-10">
          <SectionHeading label="04 / OUTREACH & SPONSORSHIP TEAM" title="OUTREACH & SPONSORSHIP TEAM" sectionIndex={3} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16 pt-10 pb-4">
            {teamData.outreach.map((m, i) => (
              <TeamCard
                key={m.name + i}
                name={m.name}
                role={m.role}
                image={m.image}
                github={m.github}
                linkedin={m.linkedin}
                instagram={m.instagram}
                index={i}
              />
            ))}
          </div>
        </section>

        {/* ── 05 / CONTENT & PR TEAM ─────────────────────────────────────────────── */}
        <section className="space-y-10">
          <SectionHeading label="05 / CONTENT & PR TEAM" title="CONTENT & PR TEAM" sectionIndex={4} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16 pt-10 pb-4">
            {teamData.contentPR.map((m, i) => (
              <TeamCard
                key={m.name + i}
                name={m.name}
                role={m.role}
                image={m.image}
                github={m.github}
                linkedin={m.linkedin}
                instagram={m.instagram}
                index={i}
              />
            ))}
          </div>
        </section>

        {/* ── 06 / DOCUMENTATION TEAM ──────────────────────────────────────── */}
        <section className="space-y-10">
          <SectionHeading label="06 / DOCUMENTATION TEAM" title="DOCUMENTATION TEAM" sectionIndex={5} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16 pt-10 pb-4">
            {teamData.documentation.map((m, i) => (
              <TeamCard
                key={m.name + i}
                name={m.name}
                role={m.role}
                image={m.image}
                github={m.github}
                linkedin={m.linkedin}
                instagram={m.instagram}
                index={i}
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
