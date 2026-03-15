import { motion } from 'motion/react'
import { ContactForm } from '../components/ContactForm'
import { CONTACT_CONTENT, CONTACT_DETAILS } from '../content/siteContent'

export function Contact() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold md:text-5xl">
          {CONTACT_CONTENT.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {CONTACT_CONTENT.subtitle}
        </p>
      </motion.div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div>
            <h2 className="mb-4 text-xl font-semibold">{CONTACT_CONTENT.mapTitle}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Address:</span>{' '}
                {CONTACT_DETAILS.address}
              </p>
              <p>
                <span className="font-medium text-foreground">Phone:</span>{' '}
                <a
                  href={`tel:${CONTACT_DETAILS.phone}`}
                  className="hover:text-foreground underline"
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Email:</span>{' '}
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="hover:text-foreground underline"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border/60">
            <iframe
              title="Office location"
              src={CONTACT_DETAILS.mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full md:h-80"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
