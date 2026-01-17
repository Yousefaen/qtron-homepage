import Link from 'next/link'
import { Logo } from '@/components/shared/Logo'
import { Container } from '@/components/ui'
import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <Container size="xl">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Logo variant="white" size="lg" />
              <p className="mt-4 text-navy-200 max-w-md">
                A quantitative investment manager serving institutional clients in the Global Equity space.
              </p>
              <p className="mt-6 text-sm font-medium tracking-widest text-burgundy-400">
                OUTPERFORM • TRANSPARENT • COST-EFFICIENT
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-300">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {SITE_CONFIG.navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-navy-200 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-300">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-navy-200">
                <li>
                  <a href="mailto:info@qtroninvestments.com" className="hover:text-white transition-colors">
                    info@qtroninvestments.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-navy-400">
              © {currentYear} Qtron Investments LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-navy-400">
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-navy-500 max-w-4xl">
            The information on this website is provided for informational purposes only and is subject to change without notice.
            This website is not an offer to, or solicitation of, any potential clients or investors for the provision by Qtron Investments
            of investment management, advisory, or any other related services. No material on this website constitutes investment advice.
          </p>
        </div>
      </Container>
    </footer>
  )
}
