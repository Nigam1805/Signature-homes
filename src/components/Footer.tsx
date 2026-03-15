import { Link } from 'react-router-dom'
import { NAVIGATION, FOOTER_CONTENT, CONTACT_DETAILS, SITE_NAME, LOGO_URL } from '../content/siteContent'

/**
 * Site footer. All labels and links come from siteContent.ts.
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              to="/"
              className="flex items-center gap-1 shrink-0 text-foreground transition-opacity hover:opacity-85"
              aria-label={SITE_NAME}
            >
              <img
                src={LOGO_URL}
                alt=""
                className="h-10 w-auto max-w-[115px] object-contain object-left"
                style={{ opacity: 1 }}
                decoding="async"
              />
              <span className="text-sm font-semibold tracking-tight">{SITE_NAME}</span>
            </Link>
            <p className="text-muted-foreground text-sm">{FOOTER_CONTENT.description}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 font-semibold">{FOOTER_CONTENT.linksTitle}</h4>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground text-sm hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 font-semibold">{FOOTER_CONTENT.contactTitle}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-foreground">
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-foreground">
                  {CONTACT_DETAILS.phone}
                </a>
              </li>
              <li>{CONTACT_DETAILS.address}</li>
            </ul>
          </div>

          {/* Social (optional) */}
          <div>
            <h4 className="mb-3 font-semibold">Follow</h4>
            <ul className="flex gap-4">
              {FOOTER_CONTENT.socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-foreground"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-muted-foreground text-sm">
          <a
            href="https://www.netralink.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground underline-offset-2 hover:underline"
          >
            {FOOTER_CONTENT.copyright}
          </a>
        </div>
      </div>
    </footer>
  )
}
