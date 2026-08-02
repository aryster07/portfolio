import { Link } from 'react-router'
import { footerNav, footerSocials, profile, workCategoriesSummary } from '@/data/content'

/**
 * Footer. The Samarkan "7Frames" watermark sits behind the four concise
 * navigation and profile columns.
 */
export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#0C0C0C]">
      {/* Watermark. Decorative only. */}
      <span
        aria-hidden="true"
        className="font-watermark pointer-events-none absolute inset-0 -z-10 grid place-items-center
                   leading-none whitespace-nowrap uppercase select-none"
        style={{
          fontSize: '31vw',
          lineHeight: 0.8,
          letterSpacing: '-0.025em',
          backgroundImage:
            'linear-gradient(180deg, rgba(100,105,115,0.15) 0%, rgba(187,204,215,0.15) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        7Frames
      </span>

      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-8 sm:px-12 sm:pt-20">
        {/* --- Columns ---------------------------------------------------- */}
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-[1fr_1fr_1.35fr_1fr]">
          <div>
            <h2 className="text-[11px] font-bold tracking-[1.2px] text-[#D7E2EA]/50 uppercase">
              Navigate
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="font-body text-[14px] text-[#D7E2EA]/85 transition-colors hover:text-[#D7E2EA]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold tracking-[1.2px] text-[#D7E2EA]/50 uppercase">
              What I Do
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {workCategoriesSummary.map((label) => (
                <li key={label} className="font-body text-[14px] text-[#D7E2EA]/85">
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold tracking-[1.2px] text-[#D7E2EA]/50 uppercase">
              Elsewhere
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {footerSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border-2 border-[#D7E2EA]/25
                             transition-all duration-300 hover:-translate-y-1 hover:border-[#D7E2EA]"
                >
                  <img src={social.icon} alt="" width={17} height={17} className="size-[17px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[11px] font-bold tracking-[1.2px] text-[#D7E2EA]/50 uppercase">
              Based In
            </h2>
            <p className="font-body mt-4 text-[14px] leading-[1.7] text-[#D7E2EA]/85">
              {profile.location}
              <br />
              <span className="text-[#D7E2EA]/50">Available for work</span>
            </p>
          </div>
        </div>

        {/* --- Bottom ------------------------------------------------------ */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <img
              src={profile.portrait}
              alt=""
              className="size-7 rounded-full object-cover"
            />
            <span className="text-[14px] font-semibold tracking-[0.6px] text-[#D7E2EA]">
              {profile.brand}
            </span>
          </div>
          <p className="font-body text-[13px] text-[#D7E2EA]/50">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
