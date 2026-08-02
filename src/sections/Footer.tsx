import { Link } from 'react-router'
import { footerNav, footerSocials, profile, workCategoriesSummary } from '@/data/content'

/** Footer. The Samarkan "7Frames" watermark sits behind the content. */
export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0C0C0C]">
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

      <div className="mx-auto max-w-[1200px] px-4 pt-16 pb-8 sm:px-8 sm:pt-20 lg:px-12 xl:px-16">
        {/* --- Columns ---------------------------------------------------- */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[0.75fr_1fr_2.25fr] lg:gap-x-12">
          <div>
            <h2 className="text-[11px] font-bold tracking-[1.2px] text-[#D7E2EA]/50 uppercase">
              Navigate
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
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
            <ul className="mt-4 flex flex-col gap-3">
              {workCategoriesSummary.map((label) => (
                <li key={label} className="font-body text-[14px] text-[#D7E2EA]/85">
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-[11px] font-bold tracking-[1.2px] text-[#D7E2EA]/50 uppercase">
              Elsewhere
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {footerSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center gap-3 rounded-[12px] border border-[#D7E2EA]/20
                             bg-[#0C0C0C]/70 px-4 py-3 transition-all duration-300
                             hover:-translate-y-1 hover:border-[#D7E2EA]/60 hover:bg-[#16191B]"
                >
                  <img src={social.icon} alt="" width={20} height={20} className="size-5 shrink-0" />
                  <span className="font-body text-[14px] leading-tight text-[#D7E2EA]/85">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Bottom ------------------------------------------------------ */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <div className="flex items-center gap-3">
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
