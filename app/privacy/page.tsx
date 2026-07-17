import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information that you provide directly to us and information we collect automatically when you use our services.

Information you provide directly:
• Account information: name, email address, password
• Shipping and billing information: address, phone number
• Payment information: credit card details (processed securely through our payment providers)
• Order history and preferences
• Communications with our customer support team
• Product reviews and ratings

Information we collect automatically:
• Device information: IP address, browser type, operating system
• Usage data: pages visited, time spent, click patterns
• Location information (if you enable location services)
• Information from cookies and similar tracking technologies

We may also receive information from third-party sources such as social media platforms if you choose to log in using those services.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect for the following purposes:

To provide and improve our services:
• Process, fulfill, and track your orders
• Send you order confirmations, shipping updates, and delivery notifications
• Respond to your customer service inquiries
• Improve our website, products, and user experience

To personalize your experience:
• Show you products and offers tailored to your interests
• Remember your preferences and settings
• Provide personalized recommendations

For marketing and communications:
• Send you promotional emails (if you opt-in)
• Inform you about new products, sales, and special offers
• Conduct surveys and market research

For security and legal purposes:
• Protect against fraud and unauthorized transactions
• Ensure the security of our systems and data
• Comply with legal obligations and enforce our Terms of Service
• Resolve disputes and investigate issues

We will not use your information for purposes materially different from those described without providing you notice and obtaining your consent where required by law.`,
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content: `We use cookies and similar technologies to collect information about your browsing activities and to personalize your experience.

Types of cookies we use:

Essential cookies: These are necessary for the website to function properly. They enable basic features like page navigation, secure areas, and shopping cart functionality.

Analytical/performance cookies: These help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.

Functionality cookies: These enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.

Targeting/advertising cookies: These may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.

You can control or disable cookies through your browser settings. However, please note that disabling cookies may affect the functionality of our website and some features may not work properly.

We also use similar technologies such as web beacons, pixel tags, and clear GIFs to track user behavior, measure the effectiveness of our email campaigns, and understand how users interact with our marketing communications.`,
  },
  {
    title: "4. Third-Party Services",
    content: `We may share your information with third-party service providers who assist us in operating our business and providing our services.

Service providers we work with:

Payment processors: We work with payment processors (Stripe, PayPal, etc.) to securely process your payment information. Your payment details are encrypted and processed directly by these providers. We do not store complete credit card information on our servers.

Shipping and fulfillment partners: We share your shipping address and order details with our shipping partners (USPS, FedEx, DHL, etc.) to deliver your orders.

Analytics providers: We use analytics services (Google Analytics, Mixpanel, etc.) to understand how users interact with our website and improve our services.

Marketing platforms: If you opt-in to marketing communications, we may use email service providers and advertising platforms to send you promotional materials.

Cloud and hosting providers: We use cloud services to host our website and store data securely.

Customer support tools: We use support platforms to manage and respond to your inquiries.

These third parties have access to your information only as needed to perform their services and are obligated not to disclose or use it for any other purpose.

We may also share your information in connection with a business transaction such as a merger, acquisition, or sale of assets. In such cases, we will notify you before your information is transferred and becomes subject to a different privacy policy.

We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety, or the rights, property, or safety of others.`,
  },
  {
    title: "5. Data Security",
    content: `We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it.

Security measures we employ:

Encryption: We use industry-standard TLS/SSL encryption to protect data transmitted between your browser and our servers. All sensitive information, including payment details, is encrypted during transmission.

Access controls: We limit access to personal information to authorized personnel who need it to perform their job functions. Our employees receive regular privacy and security training.

Data minimization: We only collect and retain information necessary for the purposes described in this policy. We do not collect or store more data than is required.

Regular security audits: We conduct regular security assessments and audits to identify and address potential vulnerabilities.

Secure data storage: Your data is stored on secure servers with access controls, firewalls, and intrusion detection systems in place.

While we implement these security measures, please be aware that no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we work diligently to protect your information.

If we become aware of a data security breach that may affect your personal information, we will notify you in accordance with applicable law.`,
  },
  {
    title: "6. Your Rights and Choices",
    content: `Depending on your location, you may have certain rights regarding your personal information.

Your rights may include:

Access: You have the right to request a copy of the personal information we hold about you.

Correction: You have the right to request that we correct any inaccurate or incomplete information.

Deletion: You may have the right to request that we delete your personal information in certain circumstances.

Portability: You may have the right to receive your personal information in a structured, machine-readable format.

Opt-out of marketing: You can opt out of receiving marketing communications at any time by clicking the "unsubscribe" link in our emails or by updating your account preferences.

Cookie preferences: You can control cookie preferences through your browser settings or our cookie consent tool.

To exercise your rights, please contact us at privacy@blazecart.com. We will respond to valid requests within the timeframes required by applicable law.

Please note that certain information may be necessary for us to provide our services, and deleting such information may affect your ability to use certain features of our platform.

You also have the right to lodge a complaint with your local data protection authority if you believe that our processing of your personal information violates applicable law.`,
  },
  {
    title: "7. Children's Privacy",
    content: `Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.

If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information as quickly as possible. If you believe that we might have any information from or about a child under 13, please contact us immediately at privacy@blazecart.com.

If you are under the age of 18, you may use our services only with the involvement and consent of a parent or guardian.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.

When we make changes, we will:
• Update the "Last updated" date at the top of this policy
• Post the revised policy on our website
• Notify you of material changes via email or through a notice on our website, where required by law

We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our services after the effective date of the updated policy constitutes your acceptance of the changes.

If we make material changes that affect how we use or share your personal information, we will provide you with notice and, where required, obtain your consent.`,
  },
  {
    title: "9. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Email: privacy@blazecart.com

Mail:
Privacy Officer
BlazeCart
123 Commerce Street
Tech City, TC 12345

Phone: 1-800-BLAZECART

When contacting us about your personal information, please include:
• Your full name
• Your account email address
• A clear description of your request or concern

We will respond to all inquiries within 30 business days. For complex requests, additional time may be needed, and we will notify you if this is the case.

If you are not satisfied with our response, you may have the right to escalate your concern to your local data protection authority.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background bg-[radial-gradient(ellipse_at_top,rgba(245,114,36,0.03)_0%,transparent_60%)]">
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl animate-fade-in">
        <div className="text-center mb-16">
          <Badge className="mb-4">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 2025
          </p>
        </div>

        <div className="glass-card p-6 md:p-10">
          <div className="mb-8 p-4 rounded-xl bg-[#F57224]/5 border border-[#F57224]/10">
            <p className="text-muted-foreground text-sm leading-relaxed">
              At BlazeCart, your privacy is our priority. This Privacy Policy explains how we collect,
              use, protect, and share your personal information when you use our website and services.
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
              {index < sections.length - 1 && (
                <Separator className="my-8 bg-muted/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
