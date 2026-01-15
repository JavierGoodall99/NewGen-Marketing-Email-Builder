export interface Metric {
  value: string;
  suffix: string;
  suffixColor: string;
  label: string;
}

export interface EmailData {
  recipientName: string;
  introText: string;
  valuePropText: string;
  proofText: string;
  ctaText: string;
  ctaLink: string;
  senderName: string;
  metrics: Metric[];
}

export const INITIAL_EMAIL_DATA: EmailData = {
  recipientName: "[[name]]",
  introText: "My name is [[senderName]] from NewGen Marketing. I’ve been looking at your social media presence and noticed that while you are posting content, the engagement (likes and comments) isn't matching the quality of your brand.",
  valuePropText: "We fix this by using a proven system that actively drives conversations—making your brand look more credible to potential customers.",
  proofText: "We recently helped companies like LG Plast and Tagoneswa increase their reach significantly using this exact method:",
  ctaText: "Yes, See Our Work →",
  ctaLink: "mailto:sales@newgenmarketingzw.com?subject=Yes,%20send%20me%20the%20link",
  senderName: "[[senderName]]",
  metrics: [
    { value: "10", suffix: "M+", suffixColor: "#707dfc", label: "Views" },
    { value: "1000", suffix: "%+", suffixColor: "#555dfc", label: "Engagement" }
  ]
};