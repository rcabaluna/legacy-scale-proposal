export const heroData = {
  client: "Keanu Vasquez · Legacy Scale",
  headline: "Legacy Scale.",
  headlineLine2: "Built to convert.",
  tagline: "Premium agency education platform · HD video training · Gamified community · Claude AI coaching tools · Live event calendar. One platform. One subscription. Every member's data — their own.",
  rate: "$16",
  timeline: "24 wks",
  totalNTE: "$12,000",
  savings: "$55K+",
};

export const productData = {
  label: "What we're building",
  title: "One home for everything Legacy Scale teaches.",
  subtitle: "Training, community, AI tools, live events, and mentorship — all under one subscription. Every member logs in and accesses their own data, their own progress, their own history.",
  features: [
    { icon: "🎬", color: "violet", title: "Premium Video Training", description: "HD video courses via Mux for the 7-Figure Agency Program, Marketing Bootcamp, High Ticket Masterclass, and Millionaire Mentorship modules — with progress tracking and completion certificates." },
    { icon: "🤖", color: "indigo", title: "Claude AI Toolkit", description: "Three Claude-powered tools built for agency owners: Marketing Copy Generator, Agency Proposal Builder, and an AI Business Coaching Agent — all with real-time streaming output." },
    { icon: "🏆", color: "green", title: "Gamified Community", description: "Points engine, daily streaks, badge system, and real-time leaderboards. Members compete, share wins, and hold each other accountable inside Keanu's private group." },
    { icon: "📅", color: "claude", title: "Live Training Calendar", description: "Schedule and manage live trainings, mentorship sessions, and group coaching calls. Google Calendar sync, RSVP system, and automated reminders so no one misses a session." },
    { icon: "💳", color: "amber", title: "Subscription Billing", description: "Stripe-powered recurring subscriptions. Members pay to join, get instant access, and are managed automatically — upgrades, cancellations, and failed payments all handled without manual work." },
    { icon: "📊", color: "red", title: "Analytics & Admin", description: "Full admin panel with BI dashboard: member activity, course completion rates, live session attendance, revenue, and community engagement — everything Keanu needs to run and grow the business." },
  ],
};

export const competitiveData = {
  label: "Competitive benchmarking",
  title: "What nobody else does.",
  subtitle: "Skool, Kajabi, Teachable, and Whop each do one thing well. Legacy Scale's platform does all of it — with AI coaching tools built specifically for agency owners.",
  columns: ["Platform", "AI Coaching Tools", "Video LMS", "Gamification", "Live Events", "What it lacks"],
  rows: [
    { platform: "Teachable", ai: false, video: true, gamification: false, events: false, lacks: "No AI, no community, no gamification" },
    { platform: "Skool", ai: false, video: true, gamification: true, events: true, lacks: "No AI tools, generic, not built for agencies" },
    { platform: "Kajabi", ai: false, video: true, gamification: false, events: true, lacks: "No AI, no gamification, expensive, generic" },
    { platform: "Whop", ai: false, video: false, gamification: false, events: false, lacks: "Marketplace only, not a training platform" },
  ],
  ours: { platform: "Legacy Scale Platform", ai: true, video: true, gamification: true, events: true, lacks: "Nothing. Built specifically for Keanu's brand." },
};

export const techStack = [
  { layer: "Framework", tech: "Next.js 14", reason: "Native Vercel/Linear aesthetic; SSR, image optimization, clean routing" },
  { layer: "Backend", tech: "NestJS", reason: "TypeScript-native modular architecture; scales cleanly from day one to production" },
  { layer: "AI Engine", tech: "Claude API", reason: "Powers Marketing Copy, Proposal Builder, and Business Coaching Agent" },
  { layer: "Database", tech: "PostgreSQL (RDS)", reason: "All data scoped by user_id; JSONB for AI output; partitioned analytics" },
  { layer: "Cache / Queues", tech: "Redis + BullMQ", reason: "Leaderboard sorted sets, job queues, session cache, rate limiting" },
  { layer: "Video", tech: "Mux", reason: "HD streaming, adaptive bitrate, thumbnails — no self-hosted infrastructure" },
  { layer: "Auth", tech: "Clerk", reason: "OAuth, MFA, social login, JWT — zero custom auth code required" },
  { layer: "Billing", tech: "Stripe", reason: "Recurring subscriptions, webhooks, billing portal, failed payment handling" },
  { layer: "Infrastructure", tech: "AWS ECS Fargate", reason: "Serverless containers, autoscales per service, zero server management" },
  { layer: "UI Components", tech: "Tailwind + ShadCN", reason: "Pixel-perfect premium UI, dark/light mode, Vercel-style aesthetics" },
  { layer: "Animations", tech: "Framer Motion", reason: "Micro-interactions, leaderboard rank animations, premium feel" },
  { layer: "ORM", tech: "Prisma", reason: "Schema-first, type-safe queries, user_id scoping enforced via middleware" },
];

export const timelinePhases = [
  { phase: 0, name: "Foundation", weeks: "1–2", duration: 2, color: "#AA0000", features: ["Monorepo + Docker", "AWS VPC + ECS", "CI/CD Pipeline", "Tailwind + ShadCN", "Standard SSL", "Design tokens"] },
  { phase: 1, name: "Auth & Billing", weeks: "3–6", duration: 4, color: "#AA0000", features: ["Clerk auth", "ADMIN / MEMBER roles", "User profiles", "Stripe Checkout", "Subscription webhooks", "Billing portal"] },
  { phase: 2, name: "Video LMS", weeks: "7–10", duration: 4, color: "#7C3AED", features: ["Mux upload + streaming", "Progress tracking", "Course management", "Lesson completion", "Certificates", "Search + filter"] },
  { phase: 3, name: "Claude AI Toolkit", weeks: "11–14", duration: 4, color: "#059669", features: ["Prompt registry", "SSE streaming", "Marketing copy generator", "Proposal builder", "AI coaching agent", "Usage metering"] },
  { phase: 4, name: "Calendar & Gamification", weeks: "15–18", duration: 4, color: "#D97706", features: ["Google Cal OAuth", "Bidirectional sync", "RSVP system", "Points engine", "Streaks + badges", "Live leaderboard"] },
  { phase: 5, name: "Admin & Analytics", weeks: "19–21", duration: 3, color: "#DC2626", features: ["User management", "BI dashboard", "Course management", "Prompt editor", "Notifications", "Audit logs"] },
  { phase: 6, name: "QA, Security & Launch", weeks: "22–24", duration: 3, color: "#0EA5E9", features: ["Regression testing", "Security audit", "Load testing", "Lighthouse audit", "Production deploy", "Monitoring setup"] },
];

export const claudeCodeData = {
  label: "Development acceleration",
  title: "⚡ With Claude Code: 20 weeks.",
  subtitle: "Claude Code as AI pair programmer cuts 4 weeks off the realistic timeline — at no extra cost. Based on full-time 40hr/week with real-world friction factored in.",
  phases: [
    { name: "Phase 0 — Foundation", before: "2 wks", after: "2 wks", saved: "same" },
    { name: "Phase 1 — Auth & Billing", before: "4 wks", after: "3 wks", saved: "-1 wk" },
    { name: "Phase 2 — Video LMS", before: "4 wks", after: "3 wks", saved: "-1 wk" },
    { name: "Phase 3 — Claude AI Toolkit", before: "4 wks", after: "3 wks", saved: "-1 wk" },
    { name: "Phase 4 — Calendar + Gamification", before: "4 wks", after: "3 wks", saved: "-1 wk" },
    { name: "Phase 5 — Admin + Analytics", before: "3 wks", after: "3 wks", saved: "same" },
    { name: "Phase 6 — QA + Security + Launch", before: "3 wks", after: "3 wks", saved: "same" },
  ],
  stats: { weeksSaved: "-4", hoursSaved: "~-160" },
  features: [
    "Generates boilerplate, configs, and Docker files in minutes",
    "Drafts full Prisma schema from requirements in one prompt",
    "Writes complete CRUD API modules and guards instantly",
    "Generates Stripe, Mux, and Clerk integrations from API docs",
    "Writes full Jest unit test suites from implementation code",
    "Iterates Claude prompt templates for Legacy Scale use cases rapidly",
    "Reviews code for security issues, RBAC gaps, and injection risks",
    "Generates deployment configs, CI/CD YAML, and runbooks",
  ],
};

export const modules = [
  {
    id: 1,
    name: "Auth & User Management",
    complexity: "Medium",
    hours: "40–55 hrs",
    features: [
      "Clerk auth — OAuth, MFA, social login",
      "Two roles: ADMIN and MEMBER",
      "User profile, avatar, account settings",
      "All data scoped by user_id",
    ],
  },
  {
    id: 2,
    name: "Subscription & Billing",
    complexity: "High",
    hours: "45–58 hrs",
    features: [
      "Stripe Checkout + billing portal",
      "Subscription lifecycle webhooks",
      "Access gating by subscription status",
      "Failed payment grace period logic",
    ],
  },
  {
    id: 3,
    name: "Video LMS",
    complexity: "High",
    hours: "80–105 hrs",
    features: [
      "Mux HD streaming + presigned upload",
      "Progress tracking (30s heartbeat)",
      "Module navigation + completion certs",
      "7-Figure Program, Bootcamp, Masterclass, Mentorship",
    ],
  },
  {
    id: 4,
    name: "Event Calendar",
    complexity: "High",
    hours: "58–75 hrs",
    features: [
      "Google Calendar full OAuth sync",
      "RSVP system + iCal export",
      "BullMQ token refresh + event reminders",
      "Live training + coaching session scheduling",
    ],
  },
  {
    id: 5,
    name: "Gamification Engine",
    complexity: "High",
    hours: "62–80 hrs",
    features: [
      "Event-driven points engine",
      "Daily streaks + badge awards",
      "Redis ZADD leaderboard",
      "Live WebSocket rank updates + animations",
    ],
  },
  {
    id: 6,
    name: "Claude AI Toolkit",
    complexity: "Very High",
    hours: "82–108 hrs",
    features: [
      "Marketing Copy Generator (SSE streaming)",
      "Agency Proposal Builder",
      "AI Business Coaching Agent (multi-turn)",
      "Admin-editable prompt registry",
    ],
  },
  {
    id: 7,
    name: "Dashboard",
    complexity: "Medium",
    hours: "32–44 hrs",
    features: [
      "Welcome widget + streak counter",
      "Course progress + upcoming events",
      "Leaderboard rank + AI tool shortcuts",
      "Dark/light mode toggle",
    ],
  },
  {
    id: 8,
    name: "Admin Panel",
    complexity: "High",
    hours: "52–66 hrs",
    features: [
      "User management (search, suspend, roles)",
      "Course + content management",
      "AI prompt template editor",
      "Broadcast notifications + audit logs",
    ],
  },
  {
    id: 9,
    name: "Notifications",
    complexity: "Medium",
    hours: "28–40 hrs",
    features: [
      "In-app WebSocket push",
      "Email via Resend",
      "Per-user notification preferences",
    ],
  },
  {
    id: 10,
    name: "Analytics & Reporting",
    complexity: "High",
    hours: "44–60 hrs",
    features: [
      "BI dashboard: DAU/MAU, revenue, cohorts",
      "Course completion + session attendance",
      "AI usage per member",
      "CSV export (Recharts + Tremor)",
    ],
  },
];

export const databaseSchema = {
  label: "Data architecture",
  title: "Simple. Clean. User-scoped.",
  subtitle: "Single-tenant SaaS. One database. Every query scoped by user_id. No tenant complexity. Every member sees only their own data.",
  relationships: [
    { from: "users", rel: "(1) ──<", to: "subscriptions" },
    { from: "users", rel: "(1) ──<", to: "enrollments", extra: "──> courses" },
    { from: "courses", rel: "(1) ──<", to: "modules", extra: "──< lessons" },
    { from: "users", rel: "(1) ──<", to: "lesson_progress", extra: "──> lessons" },
    { from: "users", rel: "(1) ──<", to: "user_points · streaks · user_badges" },
    { from: "users", rel: "(1) ──<", to: "ai_sessions", extra: "──< ai_messages" },
    { from: "users", rel: "(1) ──<", to: "ai_usage_logs" },
    { from: "events", rel: "(1) ──<", to: "event_rsvps", extra: "──> users" },
    { from: "users", rel: "(1) ──<", to: "notifications · audit_logs" },
  ],
  tables: [
    { name: "users", columns: [{ text: "id (PK)", type: "pk" }, { text: "clerk_id · email · role" }, { text: "display_name · avatar_url" }, { text: "created_at" }] },
    { name: "subscriptions", columns: [{ text: "id (PK)", type: "pk" }, { text: "user_id (FK → users)", type: "fk" }, { text: "stripe_customer_id" }, { text: "stripe_sub_id · tier · status" }, { text: "current_period_end" }] },
    { name: "courses", columns: [{ text: "id (PK)", type: "pk" }, { text: "title · slug · thumbnail_url" }, { text: "status · order_index" }, { text: "created_by · created_at" }] },
    { name: "modules", columns: [{ text: "id (PK)", type: "pk" }, { text: "course_id (FK → courses)", type: "fk" }, { text: "title · order_index" }] },
    { name: "lessons", columns: [{ text: "id (PK)", type: "pk" }, { text: "module_id (FK → modules)", type: "fk" }, { text: "title · mux_asset_id" }, { text: "mux_playback_id · duration_seconds" }, { text: "order_index · status" }] },
    { name: "enrollments", columns: [{ text: "id (PK)", type: "pk" }, { text: "user_id (FK → users)", type: "fk" }, { text: "course_id (FK → courses)", type: "fk" }, { text: "enrolled_at · completed_at" }] },
    { name: "lesson_progress", columns: [{ text: "id (PK)", type: "pk" }, { text: "user_id (FK → users)", type: "fk" }, { text: "lesson_id (FK → lessons)", type: "fk" }, { text: "watch_seconds · completed" }, { text: "completed_at" }] },
    { name: "events", columns: [{ text: "id (PK)", type: "pk" }, { text: "title · description" }, { text: "start_at · end_at (UTC)" }, { text: "google_event_id · max_rsvps" }] },
    { name: "event_rsvps", columns: [{ text: "id (PK)", type: "pk" }, { text: "user_id (FK → users)", type: "fk" }, { text: "event_id (FK → events)", type: "fk" }, { text: "rsvp_at" }] },
    { name: "user_points", columns: [{ text: "id (PK)", type: "pk" }, { text: "user_id (FK → users)", type: "fk" }, { text: "points · source_type" }, { text: "source_id · created_at" }] },
    { name: "streaks", columns: [{ text: "id (PK)", type: "pk" }, { text: "user_id (FK → users)", type: "fk" }, { text: "current_streak · longest_streak" }, { text: "last_activity_date" }] },
    { name: "badges + user_badges", columns: [{ text: "id · name · icon_url" }, { text: "trigger_type · trigger_value" }, { text: "user_id · badge_id · awarded_at", type: "fk" }] },
    { name: "ai_prompts", columns: [{ text: "id (PK)", type: "pk" }, { text: "feature_key · system_prompt" }, { text: "user_prompt_template · model" }, { text: "max_tokens · version" }] },
    { name: "ai_sessions + ai_messages", columns: [{ text: "user_id (FK → users)", type: "fk" }, { text: "feature_key · created_at" }, { text: "role (user/assistant)" }, { text: "content · tokens_used" }] },
    { name: "ai_usage_logs", columns: [{ text: "user_id (FK → users)", type: "fk" }, { text: "feature_key" }, { text: "input_tokens · output_tokens" }, { text: "estimated_cost_usd · created_at" }] },
    { name: "notifications", columns: [{ text: "user_id (FK → users)", type: "fk" }, { text: "type · title · body" }, { text: "read · action_url · created_at" }] },
    { name: "audit_logs", columns: [{ text: "user_id (FK → users)", type: "fk" }, { text: "action · entity_type · entity_id" }, { text: "metadata · ip_address · created_at" }, { text: "immutable — never updated/deleted", type: "warning" }] },
    { name: "analytics_events", columns: [{ text: "user_id (FK → users)", type: "fk" }, { text: "event_type · properties (JSONB)" }, { text: "created_at" }, { text: "partitioned by month", type: "success" }] },
  ],
};

export const architectureData = {
  label: "Infrastructure",
  title: "AWS-native. Built to scale.",
  subtitle: "Every service is managed. No servers to maintain. Autoscales from day one.",
  layers: [
    { label: "CLIENTS", items: [{ name: "Web Browser", detail: "Member / Admin" }, { name: "Mobile Browser", detail: "Responsive" }] },
    { label: "CDN + DNS", items: [{ name: "AWS CloudFront · Route 53 · ACM SSL · WAF" }] },
    { label: "LOAD BALANCER", items: [{ name: "Application Load Balancer", detail: "Health Checks · SSL Termination" }] },
    { label: "COMPUTE", items: [{ name: "Next.js Frontend", detail: "ECS Fargate · SSR · Tailwind" }, { name: "NestJS API", detail: "ECS Fargate · REST · WebSocket" }, { name: "BullMQ Workers", detail: "ECS Fargate · Background Jobs" }] },
    { label: "DATA", items: [{ name: "RDS PostgreSQL", detail: "Multi-AZ · User-Scoped" }, { name: "ElastiCache Redis", detail: "Sessions · Queues · Leaderboard" }, { name: "S3", detail: "Uploads · Thumbnails" }] },
    { label: "EXTERNAL SERVICES", items: [{ name: "Anthropic Claude" }, { name: "Stripe" }, { name: "Mux" }, { name: "Clerk" }, { name: "Resend" }, { name: "Google Calendar" }, { name: "Sentry" }] },
  ],
};

export const investmentData = {
  label: "Investment",
  title: "Transparent. Predictable. Honest.",
  subtitle: "Hourly billing with weekly timesheets. Phase NTE caps protect your budget. You only pay for actual hours logged.",
  rate: "$16",
  rateDescription: "Billed weekly. Itemized timesheet every Friday. Each phase has an NTE cap — your maximum per phase is fixed before work begins.",
  phases: [
    { name: "Phase 0 — Foundation", cost: "NTE $1,120" },
    { name: "Phase 1 — Auth & Billing", cost: "NTE $1,600" },
    { name: "Phase 2 — Video LMS", cost: "NTE $1,920" },
    { name: "Phase 3 — Claude AI Toolkit", cost: "NTE $1,920" },
    { name: "Phase 4 — Calendar + Gamification", cost: "NTE $1,760" },
    { name: "Phase 5 — Admin + Analytics", cost: "NTE $1,600" },
    { name: "Phase 6 — QA + Security + Launch", cost: "NTE $2,080" },
  ],
  totalNTE: "$12,000",
  billingProcess: [
    "Hours logged daily with task-level descriptions",
    "Timesheet submitted every Friday with accumulated hours",
    "Invoice issued same day, itemized by task and module",
    "Payment due within 5 business days",
    "$640 kickoff deposit applied against the first week of billing. Standard across all professional services — confirms commitment from both sides before significant work begins. Can be held in Upwork escrow if preferred.",
  ],
  comparison: {
    usDevRate: "$56,250 – $71,250",
    thisEngagement: "$12,000",
    savings: "$44,000 – $59,000",
  },
};

export const riskData = {
  label: "Risk management",
  title: "Every risk has a mitigation.",
  risks: [
    { name: "Scope creep", level: "high", mitigation: "Written change request process. Approval and separate NTE before any out-of-scope work begins. No exceptions." },
    { name: "Claude API cost overrun", level: "med", mitigation: "Per-user daily token limits enforced from day one. Usage logged per feature. Cost dashboard visible to admin." },
    { name: "Google Calendar OAuth", level: "med", mitigation: "BullMQ refresh job runs 30 min before token expiry. Graceful re-auth UI if refresh fails. Time is budgeted for this." },
    { name: "Stripe webhook failure", level: "low", mitigation: "Idempotency keys on all webhook handlers. Event deduplication at DB level. Retry logic with exponential backoff." },
    { name: "Mux video webhook failure", level: "low", mitigation: "Retry logic with backoff. Status polling fallback. Admin alert on stuck video assets." },
    { name: "Credential exposure", level: "low", mitigation: "AWS Secrets Manager for all API keys. Zero hardcoded credentials. Regular npm security audits." },
  ],
};

export const ctaData = {
  label: "Ready to build",
  title: "Legacy Scale deserves a platform built for it.",
  subtitle: "Skool and Kajabi are generic. This is built specifically for Keanu's brand, his curriculum, and his community.",
  stats: [
    { value: "$16", label: "Per hour" },
    { value: "24 wks", label: "Realistic" },
    { value: "$12,000", label: "Total NTE" },
    { value: "$640", label: "To start" },
  ],
};

export const navItems = [
  { label: "Product", href: "#product" },
  { label: "Timeline", href: "#timeline" },
  { label: "Gantt", href: "#gantt" },
  { label: "Claude Code", href: "#claude-code" },
  { label: "Pricing", href: "#billing" },
  { label: "Modules", href: "#modules" },
  { label: "Database", href: "#database" },
];

export const ganttData = {
  label: "Project schedule",
  title: "Week-by-week. Nothing hidden.",
  subtitle: "Toggle between the realistic 24-week plan (full-time, real-world friction) and the Claude Code-accelerated 20-week plan.",
  standard: {
    totalWeeks: 24,
    phases: [
      { name: "P0 — Foundation", col: "#AA0000", start: 1, end: 2, feats: [["Monorepo + Docker + CI/CD", 1, 1], ["AWS VPC + ECS + RDS + Redis", 2, 2], ["Tailwind + ShadCN + design tokens", 1, 2], ["Standard SSL + GitHub Actions", 1, 2]] },
      { name: "P1 — Auth & Billing", col: "#CC1111", start: 3, end: 5, feats: [["Clerk auth + JWT guard", 3, 3], ["ADMIN/MEMBER roles + user profiles", 3, 4], ["Stripe Checkout + pricing page", 4, 4], ["Stripe webhooks + billing portal", 5, 5], ["Access gating by subscription status", 5, 5]] },
      { name: "P2 — Video LMS", col: "#7C3AED", start: 6, end: 9, feats: [["Course/module/lesson Prisma schema", 6, 6], ["Admin course CRUD + listing page", 6, 7], ["Mux upload + webhook + Mux Player", 7, 7], ["Progress tracking API (30s heartbeat)", 8, 8], ["Certificates + enrollment management", 8, 9], ["Search + filter + mobile responsive", 9, 9]] },
      { name: "P3 — Claude AI Toolkit", col: "#059669", start: 10, end: 13, feats: [["Prompt registry + Claude SDK SSE", 10, 10], ["Rate limiting + usage logging", 10, 11], ["Marketing Copy Generator", 11, 11], ["Agency Proposal Builder", 12, 12], ["AI Business Coaching Agent", 13, 13]] },
      { name: "P4 — Calendar + Gamification", col: "#D97706", start: 14, end: 16, feats: [["FullCalendar + event CRUD + RSVP", 14, 14], ["Google Calendar full OAuth sync", 15, 15], ["BullMQ token refresh + reminders", 15, 16], ["Points engine + streaks + badges", 16, 16], ["Redis leaderboard + WebSocket", 16, 16]] },
      { name: "P5 — Admin + Analytics", col: "#DC2626", start: 17, end: 18, feats: [["User + course management", 17, 17], ["AI prompt template editor", 17, 18], ["BI analytics dashboard", 18, 18], ["Notifications + audit logs", 18, 18]] },
      { name: "P6 — QA + Security + Launch", col: "#0EA5E9", start: 19, end: 24, feats: [["Dashboard polish + onboarding", 19, 20], ["Regression + security audit", 20, 21], ["Load testing + Lighthouse", 21, 22], ["Performance optimization", 22, 23], ["Production deploy + go-live", 23, 24]] },
    ],
    milestones: { 5: "M1", 9: "M2", 13: "M3", 16: "M4", 18: "M5", 24: "M6" },
  },
  accelerated: {
    totalWeeks: 20,
    phases: [
      { name: "P0 — Foundation", col: "#AA0000", start: 1, end: 2, feats: [["Monorepo + Docker + AWS + CI/CD", 1, 1], ["Tailwind + ShadCN + SSL", 1, 2]] },
      { name: "P1 — Auth & Billing", col: "#CC1111", start: 3, end: 5, feats: [["Clerk auth + roles + Stripe", 3, 4], ["Webhooks + billing portal", 4, 5]] },
      { name: "P2 — Video LMS", col: "#7C3AED", start: 6, end: 8, feats: [["Prisma schema + Mux integration", 6, 6], ["Progress tracking + certificates", 7, 8], ["Search + filter + responsive", 8, 8]] },
      { name: "P3 — Claude AI Toolkit", col: "#059669", start: 9, end: 11, feats: [["Prompt registry + SSE streaming", 9, 9], ["Marketing Copy + Proposal Builder", 10, 10], ["AI Coaching Agent + Redis sessions", 11, 11]] },
      { name: "P4 — Calendar + Gamification", col: "#D97706", start: 12, end: 14, feats: [["FullCalendar + Google OAuth sync", 12, 13], ["Points + streaks + leaderboard", 13, 14]] },
      { name: "P5 — Admin + Analytics", col: "#DC2626", start: 15, end: 17, feats: [["User + course admin + BI dashboard", 15, 16], ["Notifications + audit logs", 16, 17]] },
      { name: "P6 — QA + Security + Launch", col: "#0EA5E9", start: 18, end: 20, feats: [["Regression + security audit + load test", 18, 19], ["Production deploy + go-live", 19, 20]] },
    ],
    milestones: { 5: "M1", 8: "M2", 11: "M3", 14: "M4", 17: "M5", 20: "M6" },
  },
  milestoneLabels: { M1: "Auth+Billing done", M2: "LMS complete", M3: "AI tools live", M4: "Cal+Gamification", M5: "Admin+Analytics", M6: "Launch" },
};
