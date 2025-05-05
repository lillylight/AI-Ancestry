import React from "react";

const termsContent = [
  {
    title: "1. Experimental Beta Notice",
    body: `This platform is an experimental, beta-stage project designed to showcase the potential of AI-powered ancestry analysis. Our mission is to demonstrate how artificial intelligence may one day provide ancestry insights without traditional DNA testing. By using this service, you are participating in a pilot program intended to give users a preview of what the future of ancestry analysis could look like.`
  },
  {
    title: "2. Professional Disclaimer & User Responsibility",
    body: `This service is for demonstration, entertainment, and educational purposes only. The results generated are not scientifically validated and should not be used for medical, legal, or official purposes. Use of this platform is entirely at your own risk. We are not liable for any loss of funds, data, or other damages arising from use of this service. Your judgement is paramount when interpreting any results or making decisions based on them.`
  },
  {
    title: "3. Data & Privacy",
    body: `We do not store, retain, or share user facial images or personal data. All analysis is performed in-memory and is not preserved after your session ends. However, as this is a beta release, data handling policies may change in future production versions. Please review our privacy policy for updates. By using this service, you consent to temporary processing of your uploaded images solely to generate your ancestry analysis.`
  },
  {
    title: "4. Investor & Collaboration Notice",
    body: `If you are an investor or organization interested in collaborating or helping bring this vision to full-scale production, we welcome your inquiries. Please contact us at basezambia@gmail.com to discuss partnership opportunities and help shape the future of AI-powered ancestry analysis.`
  },
  {
    title: "5. Feedback & User Participation",
    body: `Your feedback is invaluable as we work toward a full production release. Please share your experience, suggestions, or concerns to help us improve. This beta is a stepping stone toward a robust, next-generation ancestry platform—your input will help shape its evolution.`
  },
  {
    title: "6. Limitation of Liability",
    body: `Use of this service is entirely at your own risk. We make no warranties, express or implied, regarding the accuracy, reliability, or completeness of any results or information provided. We accept no liability for any direct, indirect, incidental, or consequential damages, including but not limited to loss of funds, data, or reputation.`
  },
  {
    title: "7. Acceptance of Terms",
    body: `By accessing or using AI Ancestry, you acknowledge that you have read, understood, and agree to these Terms & Conditions. If you do not agree, please do not use this service.`
  }
];

export default function TermsPage() {
  return (
    <main style={{
      maxWidth: 840,
      margin: "48px auto",
      padding: 40,
      background: "#18191b",
      borderRadius: 28,
      boxShadow: "0 6px 48px #00000033",
      color: "#ededed",
      fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
      border: '1.8px solid #222',
    }}>
      <h1 style={{
        fontSize: 44,
        fontWeight: 900,
        color: "#ededed",
        marginBottom: 32,
        letterSpacing: "-1.5px",
        textAlign: 'center',
        textTransform: 'uppercase',
        borderBottom: '2px solid #333',
        paddingBottom: 18,
      }}>
        Terms & Conditions
      </h1>
      {termsContent.map((section, idx) => (
        <section key={idx} style={{
          marginBottom: 52,
          padding: '0 8px',
        }}>
          <h2 style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#bdbdbd",
            marginBottom: 14,
            letterSpacing: "-0.5px",
            textTransform: 'uppercase',
          }}>{section.title}</h2>
          <p style={{
            fontSize: 18,
            color: "#bdbdbd",
            margin: 0,
            lineHeight: 1.8,
            whiteSpace: "pre-line",
            maxWidth: 760,
          }}>{section.body}</p>
        </section>
      ))}
      <footer style={{
        fontSize: 15,
        color: "#5a5a5a",
        marginTop: 48,
        textAlign: "center",
        borderTop: '1.5px solid #23252b',
        paddingTop: 24,
        letterSpacing: '-0.2px',
      }}>
        &copy; {new Date().getFullYear()} AI Ancestry. All rights reserved.<br />
        This service is an experimental beta pilot and is not a substitute for professional genetic testing or advice.
      </footer>
    </main>
  );
}
