import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24 bg-gradient-to-br from-secondary/10 via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-secondary via-accent to-primary flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-foreground">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: November 2024
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12 space-y-8"
          >
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the Nur Al-Ilm Islamic Academy website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Enrollment and Admissions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Application Process</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enrollment at Nur Al-Ilm Islamic Academy is subject to:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-muted-foreground">
                    <li>Completion of all required application materials</li>
                    <li>Availability of space in the requested grade level</li>
                    <li>Meeting age and academic requirements</li>
                    <li>Payment of all applicable fees</li>
                    <li>Acceptance by the school administration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Tuition and Fees</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All tuition and fees are non-refundable unless otherwise stated in writing. Payment schedules and late fees are outlined in the enrollment agreement. The school reserves the right to adjust fees with reasonable notice.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Student Conduct and Expectations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Students and families are expected to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                <li>Adhere to the school's code of conduct and Islamic values</li>
                <li>Show respect to teachers, staff, and fellow students</li>
                <li>Complete assignments and maintain academic standards</li>
                <li>Attend classes regularly and punctually</li>
                <li>Follow dress code and other school policies</li>
                <li>Communicate openly and respectfully with school staff</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Violation of conduct expectations may result in disciplinary action, including suspension or dismissal from the school.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Parent and Guardian Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Parents and guardians agree to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                <li>Support the school's mission and Islamic educational philosophy</li>
                <li>Ensure timely payment of all tuition and fees</li>
                <li>Attend parent-teacher conferences and school events</li>
                <li>Provide accurate and current contact information</li>
                <li>Support their child's learning at home</li>
                <li>Communicate concerns through appropriate channels</li>
                <li>Pick up and drop off students according to school policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Website Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Acceptable Use</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may use our website for lawful purposes only. You agree not to:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-muted-foreground">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit harmful or malicious code</li>
                    <li>Attempt unauthorized access to our systems</li>
                    <li>Interfere with the proper functioning of the website</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Content Accuracy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, accuracy, or reliability of any information on our website.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of Nur Al-Ilm Islamic Academy and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Photography and Media Release</h2>
              <p className="text-muted-foreground leading-relaxed">
                The school may photograph or video students during school activities for promotional and educational purposes. Parents who do not wish their child to be photographed must notify the school in writing.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Health and Safety</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The school maintains policies to protect student health and safety. Parents must:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground">
                <li>Provide accurate medical and emergency information</li>
                <li>Notify the school of health conditions or allergies</li>
                <li>Keep sick children at home to prevent illness spread</li>
                <li>Provide required immunization records</li>
                <li>Authorize emergency medical treatment when necessary</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Withdrawal and Dismissal</h2>
              <p className="text-muted-foreground leading-relaxed">
                Parents may withdraw their child with written notice as specified in the enrollment agreement. The school reserves the right to dismiss students for non-payment, behavioral issues, or other violations of school policies. Refund policies are outlined in the enrollment agreement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Nur Al-Ilm Islamic Academy shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. We do not guarantee uninterrupted or error-free operation of our website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these terms shall be resolved through good faith negotiation. If negotiation fails, disputes may be submitted to mediation or arbitration as outlined in the enrollment agreement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our website or services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which the school operates, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p><strong>Nur Al-Ilm Islamic Academy</strong></p>
                <p>Email: info@nuralilm.edu</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Education Lane, City, State 12345</p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
