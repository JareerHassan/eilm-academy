import React from "react";
import {
  Heart,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Globe,
  Users,
  Handshake,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function DonorPageInline({
  donateHref = "/coming-soon",
  sponsorHref = "/coming-soon",
  contactHref = "/contact",
}) {
  const BRAND_NAVY = "#000060";
  const BRAND_CYAN = "#0090D0";

  const styles = {
    page: { background: "#ffffff", fontFamily: "sans-serif", color: "#0f172a" },
    sectionWrap: { padding: "22px 16px", maxWidth: 1400, margin: "0 auto" },

    card: {
      borderRadius: 18,
      border: "1px solid #e9ecef",
      boxShadow: "0 10px 30px rgba(2,8,23,0.06)",
      background: "#fff",
      overflow: "hidden",
    },
    cardHeader: {
      borderBottom: "1px solid #eef2f7",
      background: "#fff",
      padding: "16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    h2: { fontSize: 19, fontWeight: 800, margin: 0, color: BRAND_NAVY },
    p: { color: "#475569", margin: 0, lineHeight: 1.7, fontSize: 15 },
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "11px 0",
      borderBottom: "1px dashed #e5e7eb",
    },
    iconTile: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "#f8fafc",
      border: "1px solid #e9ecef",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    btn: {
      border: "none",
      borderRadius: 14,
      padding: "13px 20px",
      fontWeight: 700,
      fontSize: 15,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none",
    },
    btnPrimary: {
      background: BRAND_CYAN,
      color: "#fff",
    },
    btnNavy: {
      background: BRAND_NAVY,
      color: "#fff",
    },
    btnGhost: {
      background: "transparent",
      color: BRAND_NAVY,
      border: `1px solid ${BRAND_NAVY}30`,
    },
  };

  return (
    <div style={styles.page}>
      {/* Main Content */}
      <div style={styles.sectionWrap}>
        {/* Intro */}
        <div style={styles.card}>
          <div style={{ padding: 20 }}>
            <h1 style={styles.h2} className="mb-3">Sponsor Islamic Education | Eilm Academy</h1>
            <p style={styles.p}>
              At Eilm Academy, we make authentic Islamic education accessible to students worldwide. Your support helps
              sponsor deserving students, expand programs, and preserve sacred knowledge.
            </p>
          </div>
        </div>

        {/* Two-column cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 24,
            marginTop: 24,
          }}
        >
          {/* Card 1 */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.iconTile}>
                <Handshake size={20} color={BRAND_CYAN} />
              </div>
              <h2 style={styles.h2}>Why Your Support Matters</h2>
            </div>
            <div style={{ padding: 20 }}>
              <p style={{ ...styles.p, marginBottom: 16 }}>
                Many students cannot pursue Islamic education due to financial constraints. Your contribution enables them to:
              </p>
              <div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={18} color={BRAND_CYAN} style={{ marginTop: 2 }} />
                  <div>Enroll in Qur’an and Tajweed programs</div>
                </div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={18} color={BRAND_CYAN} style={{ marginTop: 2 }} />
                  <div>Study Hadith and Fiqh under qualified scholars</div>
                </div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={18} color={BRAND_CYAN} style={{ marginTop: 2 }} />
                  <div>Complete the full Online Dars-e-Nizami curriculum</div>
                </div>
                <div style={{ ...styles.listItem, borderBottom: "none" }}>
                  <CheckCircle2 size={18} color={BRAND_CYAN} style={{ marginTop: 2 }} />
                  <div>Access structured Arabic language education.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.iconTile}>
                <Heart size={20} color={BRAND_CYAN} />
              </div>
              <h2 style={styles.h2}>What Your Donation Supports</h2>
            </div>
            <div style={{ padding: 20 }}>
              <SupportRow
                icon={<GraduationCap size={20} color={BRAND_CYAN} />}
                title="Student Scholarships"
                desc="Full or partial fee sponsorship for deserving students in all academic levels."
              />
              <SupportRow
                icon={<BookOpen size={20} color={BRAND_CYAN} />}
                title="Dars-e-Nizami Sponsorship"
                desc="Support a student through the complete classical curriculum including key texts."
              />
              <SupportRow
                icon={<Globe size={20} color={BRAND_CYAN} />}
                title="Global Access to Knowledge"
                desc="Funding for digital infrastructure and learning platforms to expand global reach."
              />
              <SupportRow
                icon={<Users size={20} color={BRAND_CYAN} />}
                title="Sisters’ Education Programs"
                desc="Support female students seeking authentic Islamic education."
                last
              />
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div
          style={{
            marginTop: 32,
            background: `linear-gradient(135deg, ${BRAND_NAVY} 0%, #22316de7 65%, ${BRAND_CYAN} 140%)`,
            color: "white",
            borderRadius: 20,
            padding: "32px 24px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 20,
            }}
          >
            <div>
              <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
                Become a Sponsor Today
              </div>
              <div style={{ opacity: 0.9, maxWidth: 680, lineHeight: 1.6 }}>
                Your support can transform a student’s life and strengthen the future of Islamic scholarship.
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <Link href={donateHref} style={{ ...styles.btn, ...styles.btnPrimary }}>
                Donate Now <ArrowRight size={16} />
              </Link>
              <Link href={sponsorHref} style={{ ...styles.btn, ...styles.btnNavy }}>
                Sponsor a Student <ArrowRight size={16} />
              </Link>
              <Link href={contactHref} style={{ ...styles.btn, ...styles.btnPrimary }}>
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportRow({ icon, title, desc, last = false }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        padding: "14px 0",
        borderBottom: last ? "none" : "1px dashed #e5e7eb",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: "#f8fafc",
          border: "1px solid #e9ecef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{title}</div>
        <div style={{ color: "#475569", lineHeight: 1.6 }}>{desc}</div>
      </div>
    </div>
  );
}