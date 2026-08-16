import React from 'react';
import Link from 'next/link';

const year = new Date().getFullYear();

const cols = [
  {
    heading: 'Product',
    links: [
      { href: '/builder',          label: 'Resume Builder'  },
      { href: '/templates',        label: 'Templates'       },
      { href: '/resume-examples',  label: 'Resume Examples' },
      { href: '/guides',           label: 'Guides'          },
    ],
  },
  {
    heading: 'Examples',
    links: [
      { href: '/resume-examples/software-engineer',  label: 'Software Engineer'  },
      { href: '/resume-examples/student',            label: 'Student'            },
      { href: '/resume-examples/accountant',         label: 'Accountant'         },
      { href: '/resume-examples/teacher',            label: 'Teacher'            },
      { href: '/resume-examples/marketing-manager',  label: 'Marketing Manager'  },
    ],
  },
  {
    heading: 'Guides',
    links: [
      { href: '/guides/how-to-write-a-resume',    label: 'How to Write a Resume' },
      { href: '/guides/ats-resume-guide',         label: 'ATS Resume Guide'      },
      { href: '/guides/resume-summary-examples',  label: 'Summary Examples'      },
      { href: '/guides/resume-skills',            label: 'Resume Skills'         },
      { href: '/guides/resume-vs-cv',             label: 'Resume vs CV'          },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about',                label: 'About'           },
      { href: '/contact',              label: 'Contact'         },
      { href: '/privacy',              label: 'Privacy Policy'  },
      { href: '/terms',                label: 'Terms of Service'},
      { href: 'https://tooleka.com',   label: 'ToolEka.com ↗'   },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="py-12 grid grid-cols-2 gap-8 lg:grid-cols-5">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-sm shadow-sm shadow-blue-200">
                T
              </span>
              <span className="font-bold text-slate-900 text-sm">ToolEka</span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
              Free browser-based tools for everyone. No account. No uploads. No tracking.
            </p>
            <Link
              href="https://tooleka.com"
              className="inline-flex text-xs font-medium text-blue-600 hover:underline"
            >
              tooleka.com ↗
            </Link>
          </div>

          {/* Nav columns */}
          {cols.map(col => (
            <div key={col.heading}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                {col.heading}
              </p>
              <ul className="space-y-2">
                {col.links.map(l => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-xs text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500">
            © {year} ToolEka · Free Resume Builder
          </p>
          <p className="text-xs text-slate-400">
            Built by Rehan Ahmad · browser-based tools for everyone
          </p>
        </div>

      </div>
    </footer>
  );
}
