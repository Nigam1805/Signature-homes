import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Card, CardContent, CardHeader } from './ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { CONTACT_CONTENT, CONTACT_DETAILS } from '../content/siteContent'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [choiceOpen, setChoiceOpen] = useState(false)
  const [pendingFormData, setPendingFormData] = useState<{
    name: string
    phone: string
    email: string
    details: string
  } | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    setPendingFormData({
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || ''),
      details: String(formData.get('details') || ''),
    })
    setChoiceOpen(true)
  }

  function handleConnect(type: 'email' | 'whatsapp') {
    if (!pendingFormData) return

    const { name, phone, email, details } = pendingFormData
    const summaryLines = [
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      email && `Email: ${email}`,
      details && `Project details: ${details}`,
    ].filter(Boolean)
    const summary = summaryLines.join('\n')

    if (type === 'email') {
      const subject = encodeURIComponent('New enquiry from Signature Homes SA website')
      const body = encodeURIComponent(
        summary || 'Hi, I would like to discuss a new project with Signature Homes SA.'
      )
      const to = encodeURIComponent(CONTACT_DETAILS.email)
      // Open Gmail compose in a new tab (works even if no desktop mail client is set up)
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`,
        '_blank',
        'noopener,noreferrer'
      )
    } else {
      const whatsappNumber = CONTACT_DETAILS.phone.replace(/[^+\d]/g, '')
      const text = encodeURIComponent(
        summary || 'Hi, I would like to discuss a new project with Signature Homes SA.'
      )
      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer')
    }

    setSubmitted(true)
    setChoiceOpen(false)
    setPendingFormData(null)
  }

  return (
    <>
      <Card className="border-border/60">
        <CardHeader>
          <h2 className="text-xl font-semibold">{CONTACT_CONTENT.formTitle}</h2>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <p className="text-muted-foreground py-4">
              {CONTACT_CONTENT.formSuccessMessage}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  {CONTACT_CONTENT.formNameLabel}
                </label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                  {CONTACT_CONTENT.formPhoneLabel}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  {CONTACT_CONTENT.formEmailLabel}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="details" className="mb-1 block text-sm font-medium">
                  {CONTACT_CONTENT.formProjectDetailsLabel}
                </label>
                <Textarea
                  id="details"
                  name="details"
                  rows={5}
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit">{CONTACT_CONTENT.formSubmitText}</Button>
            </form>
          )}
        </CardContent>
      </Card>

      <Dialog open={choiceOpen} onOpenChange={setChoiceOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How would you like to connect?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Choose how you want to send your enquiry. We will pre-fill the details for you.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="flex-1" onClick={() => handleConnect('email')}>
              Continue with Email
            </Button>
            <Button className="flex-1" variant="outline" onClick={() => handleConnect('whatsapp')}>
              Continue with WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
