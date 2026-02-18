import React from "react";
import {
  Heart,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Globe,
  Users,
  Handshake,
  ShieldCheck,
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
    topBand: {
      background: `linear-gradient(135deg, ${BRAND_NAVY} 0%, #07123f 70%, ${BRAND_CYAN} 160%)`,
      color: "white",
      padding: "18px",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 12px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.18)",
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 8,
    },
    title: { fontSize: 26, fontWeight: 800, margin: "8px 0", letterSpacing: "-0.2px" },
    subTitle: { fontSize: 15, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.6 },
    sectionWrap: { padding: "22px 16px" },

    card: {
      borderRadius: 18,
      border: "1px solid #e9ecef",
      boxShadow: "0 10px 30px rgba(2,8,23,0.06)",
      background: "#fff",
    },
    cardHeader: {
      borderBottom: "1px solid #eef2f7",
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      background: "#fff",
      padding: "16px",
    },
    h2: { fontSize: 18, fontWeight: 800, margin: 0, color: BRAND_NAVY },
    p: { color: "#475569", margin: 0, lineHeight: 1.7 },
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "10px 0",
      borderBottom: "1px dashed #e5e7eb",
    },
    iconTile: {
      width: 42,
      height: 42,
      borderRadius: 12,
      background: "#f8fafc",
      border: "1px solid #e9ecef",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    optionPill: {
      borderRadius: 14,
      border: "1px solid #e9ecef",
      background: "#f8fafc",
      padding: "12px",
      fontSize: 14,
      color: "#0f172a",
      fontWeight: 600,
      marginBottom: 8,
    },
    btnPrimary: {
      background: BRAND_CYAN,
      border: "none",
      borderRadius: 14,
      padding: "12px 16px",
      fontWeight: 800,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "center",
      textDecoration: "none",
      cursor: "pointer",
    },
    btnNavy: {
      background: BRAND_NAVY,
      border: "none",
      borderRadius: 14,
      padding: "12px 16px",
      fontWeight: 800,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "center",
      textDecoration: "none",
      cursor: "pointer",
    },
    btnGhost: {
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.22)",
      borderRadius: 14,
      padding: "12px 16px",
      fontWeight: 800,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "center",
      textDecoration: "none",
      cursor: "pointer",
    },
    footerCta: {
      background: `radial-gradient(900px 500px at 10% 0%, ${BRAND_CYAN}35, transparent 55%),
                   radial-gradient(800px 420px at 90% 30%, ${BRAND_NAVY}45, transparent 55%),
                   linear-gradient(135deg, ${BRAND_NAVY} 0%, #07123f 70%, ${BRAND_CYAN} 160%)`,
      color: "white",
      borderRadius: 22,
      padding: "22px",
      border: "1px solid rgba(255,255,255,0.14)",
      boxShadow: "0 16px 40px rgba(0,0,0,0.14)",
    },
  };

  const containerStyle = { maxWidth: 1200, margin: "0 auto" };
  const rowStyle = { display: "flex", flexWrap: "wrap", gap: 16 };
  const col6 = { flex: "1 1 48%" };
  const col12 = { flex: "1 1 100%" };

  return (
    <div style={styles.page}>
      {/* Top Band */}
     

      {/* Main Content */}
      <div style={{...styles.sectionWrap }}>
        {/* Intro */}
        <div style={rowStyle}>
          <div style={col12}>
            <div style={{ ...styles.card, padding: 16, borderRadius: 22 }}>
              <p style={{ ...styles.p, fontSize: 15 }}>
                At Eilm Academy, we make authentic Islamic education accessible to students worldwide. Your support helps
                sponsor deserving students, expand programs, and preserve sacred knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Two main cards */}
        <div style={{ ...rowStyle, marginTop: 16 }}>
          {/* Card 1 */}
          <div style={col6}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={styles.iconTile}>
                    <Handshake size={18} color={BRAND_CYAN} />
                  </div>
                  <h2 style={styles.h2}>Why Your Support Matters</h2>
                </div>
              </div>
              <div style={{ padding: 16 }}>
                <p style={styles.p}>
                  Many students cannot pursue Islamic education due to financial constraints. Your contribution enables them to:
                </p>
                <div style={{ marginTop: 12 }}>
                  <div style={styles.listItem}>
                    <CheckCircle2 size={18} color={BRAND_CYAN} style={{ marginTop: 3 }} />
                    <div style={{ ...styles.p, margin: 0 }}>Enroll in Qur’an and Tajweed programs</div>
                  </div>
                  <div style={styles.listItem}>
                    <CheckCircle2 size={18} color={BRAND_CYAN} style={{ marginTop: 3 }} />
                    <div style={{ ...styles.p, margin: 0 }}>Study Hadith and Fiqh under qualified scholars</div>
                  </div>
                  <div style={styles.listItem}>
                    <CheckCircle2 size={18} color={BRAND_CYAN} style={{ marginTop: 3 }} />
                    <div style={{ ...styles.p, margin: 0 }}>Complete the full Online Dars-e-Nizami curriculum</div>
                  </div>
                  <div style={{ ...styles.listItem, borderBottom: "none" }}>
                    <CheckCircle2 size={18} color={BRAND_CYAN} style={{ marginTop: 3 }} />
                    <div style={{ ...styles.p, margin: 0 }}>Access structured Arabic language education.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div style={col6}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={styles.iconTile}>
                    <Heart size={18} color={BRAND_NAVY} />
                  </div>
                  <h2 style={styles.h2}>What Your Donation Supports</h2>
                </div>
              </div>
              <div style={{ padding: 16 }}>
                <SupportRow
                  icon={<GraduationCap size={18} color={BRAND_CYAN} />}
                  title="Student Scholarships"
                  desc="Full or partial fee sponsorship for deserving students in all academic levels."
                />
                <SupportRow
                  icon={<BookOpen size={18} color={BRAND_CYAN} />}
                  title="Dars-e-Nizami Sponsorship"
                  desc="Support a student through the complete classical curriculum including key texts."
                />
                <SupportRow
                  icon={<Globe size={18} color={BRAND_CYAN} />}
                  title="Global Access to Knowledge"
                  desc="Funding for digital infrastructure and learning platforms to expand global reach."
                />
                <SupportRow
                  icon={<Users size={18} color={BRAND_CYAN} />}
                  title="Sisters’ Education Programs"
                  desc="Support female students seeking authentic Islamic education."
                  last
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{ ...rowStyle, marginTop: 16 }}>
          <div style={col12}>
            <div style={styles.footerCta}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 900 }}>Become a Sponsor Today</div>
                  <div style={{ marginTop: 8, color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
                    Your support can transform a student’s life and strengthen the future of Islamic scholarship.
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <Link href={donateHref} style={styles.btnPrimary}>
                    Donate Now <ArrowRight size={16} />
                  </Link>
                  <Link href={sponsorHref} style={styles.btnGhost}>
                    Sponsor a Student <ArrowRight size={16} />
                  </Link>
                  <Link href={contactHref} style={styles.btnGhost}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- Helpers ---------------------- */

function SupportRow({ icon, title, desc, last = false }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: "12px 0",
        borderBottom: last ? "none" : "1px dashed #e5e7eb",
      }}
    >
      <div style={{ width: 42, height: 42, borderRadius: 12, background: "#f8fafc", border: "1px solid #e9ecef", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 900, color: "#0f172a" }}>{title}</div>
        <div style={{ color: "#475569", lineHeight: 1.65, marginTop: 2, fontSize: 14 }}>{desc}</div>
      </div>
    </div>
  );
}
