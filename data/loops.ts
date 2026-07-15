export type Loop = {
  role: string;
  title: string;
  trigger: string;
  action: string;
  output: string;
  verify: string;
  perm: string;
  prompt: string;
};

// The 13 role-based agent-loop patterns. Rendered server-side on the
// showcase page (was a client-side document.createElement grid before).
export const LOOPS: Loop[] = [
      {
        role: "Software Engineer",
        title: "CI Failure Triage Loop",
        trigger: "A CI pipeline run fails",
        action: "Read failing logs, classify the failure type, identify the likely cause",
        output: "A diagnosis plus a suggested fix",
        verify: "Never touches code; a human approves before any fix is applied",
        perm: "Level 1–2",
        prompt: "Set up a CI failure triage loop in this workspace. On each run, read the latest failing CI logs, classify the failure type, identify the likely cause, and draft a diagnosis plus a suggested fix, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. Do not modify source code, re-run pipelines, or apply any fix — draft only, I apply. Start at permission level 1-2 and let me run it manually a few times before we schedule it."
      },
      {
        role: "DevOps / SRE",
        title: "Deployment Health Check Loop",
        trigger: "/loop 10m during a rollout",
        action: "Check deployment and service health signals",
        output: "A short “healthy” note, or a detailed incident note if something failed",
        verify: "Escalates to human review on the first failure signal — no silent retries",
        perm: "Level 1",
        prompt: "Set up a deployment health check loop for this rollout. On each run, check the deployment and service health signals I point you at, and draft a short 'healthy, no changes' note when everything is fine, or a detailed incident note if something failed, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. On the first real failure signal, stop and mark the run as needing human review rather than retrying silently. Read-only: do not restart, roll back, scale, or modify any service. Permission level 1, manual runs first."
      },
      {
        role: "Product Manager",
        title: "Weekly Strategy Review Loop",
        trigger: "/loop 7d",
        action: "Review the strategy doc and related notes, list what changed, flag unresolved assumptions",
        output: "A review note of changes and open decisions",
        verify: "Never edits the strategy doc itself — produces a review note only",
        perm: "Level 1–2",
        prompt: "Set up a weekly strategy review loop for this workspace. On each run, read the product strategy doc and related notes, list what changed since the last run, and flag unresolved assumptions and open decisions, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. Never edit the strategy doc or any source note — review notes only. Start at permission level 1-2 and let me run it manually before we schedule the weekly cadence."
      },
      {
        role: "Data Analyst",
        title: "Daily Metrics Anomaly Watch Loop",
        trigger: "/loop 24h",
        action: "Check key metrics for unusual movement versus recent history",
        output: "A quiet note if nothing notable, a flagged note if an anomaly appears",
        verify: "Anomaly threshold must be explicit (e.g. >2 standard deviations), never “looks off”",
        perm: "Level 1",
        prompt: "Set up a daily metrics anomaly watch loop. On each run, check the key metrics I specify for unusual movement versus recent history, using an explicit numeric threshold (e.g. more than 2 standard deviations from the trailing 14-day mean) — never 'looks off'. Draft a short quiet note when nothing is notable, or a flagged note when an anomaly appears, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. Read-only: do not modify dashboards, queries, or data. Permission level 1, manual runs first."
      },
      {
        role: "QA Engineer",
        title: "Regression Test Triage Loop",
        trigger: "The nightly test suite completes",
        action: "Read test results, group failures by likely root cause, separate flaky tests from real regressions",
        output: "A triage note grouping failures and flagging real regressions",
        verify: "Pass/fail counts must match the test runner’s own report exactly",
        perm: "Level 1–2",
        prompt: "Set up a regression test triage loop that runs after the nightly suite. On each run, read the latest test results, group failures by likely root cause, and separate flaky tests from real regressions. Verification must include that your reported pass/fail counts match the test runner's own report exactly — if they don't, the run fails the checklist. Update its memory (PROGRESS.md + MEMORY.md) each run. Do not modify tests or source code, and do not re-run or quarantine anything — triage only. Permission level 1-2, manual runs first."
      },
      {
        role: "Security / Compliance",
        title: "Dependency Vulnerability Scan Loop",
        trigger: "/loop 24h, or on dependency file change",
        action: "Review scan results for new vulnerabilities, prioritize by severity",
        output: "Drafted remediation suggestions, prioritized by severity",
        verify: "Never auto-upgrades or patches a dependency; always human-approved",
        perm: "Level 1–2",
        prompt: "Set up a dependency vulnerability review loop. On each run, review the latest scan results, identify vulnerabilities that are new since the last run, prioritize them by severity, and draft remediation suggestions, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. Never upgrade, patch, or edit a dependency file, lockfile, or CI config — drafts only, a human approves and applies. Never read .env files, keys, or credentials. Permission level 1-2, manual runs first."
      },
      {
        role: "Customer Support Lead",
        title: "Ticket Triage & Escalation Loop",
        trigger: "/loop 30m",
        action: "Read new tickets, classify urgency, draft suggested responses for common issues",
        output: "A triage note plus draft replies for common issues",
        verify: "Never sends a reply automatically — a human sends after reviewing the draft",
        perm: "Level 2",
        prompt: "Set up a support ticket triage loop. On each run, read tickets that are new since the last run, classify urgency, and for common issues draft suggested replies as separate drafts, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. Never send, reply to, close, merge, or reassign a ticket — drafts only, a human reviews and sends. Permission level 2, manual runs first."
      },
      {
        role: "Marketing Manager",
        title: "Campaign Performance Review Loop",
        trigger: "/loop 7d",
        action: "Review campaign metrics, compare to the prior period, note what’s under/over-performing",
        output: "A review of performance with a recommended next action",
        verify: "Only reads analytics/connector data — never edits live campaigns or budgets",
        perm: "Level 1",
        prompt: "Set up a weekly campaign performance review loop. On each run, review the campaign metrics I point you at, compare them to the prior period, and note what is under- and over-performing with a short recommended next action, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. Read-only: never edit, pause, launch, or change the budget of a live campaign. Permission level 1, manual runs before we schedule the weekly cadence."
      },
      {
        role: "HR / Recruiting",
        title: "Candidate Pipeline Follow-Up Loop",
        trigger: "/loop 24h",
        action: "Check the pipeline for stalled stages, draft suggested follow-up notes and reminders",
        output: "Draft follow-up notes and reminders for stalled stages",
        verify: "Never contacts candidates directly — drafts only, a human sends",
        perm: "Level 1–2",
        prompt: "Set up a candidate pipeline follow-up loop. On each run, check the candidate pipeline for stages that have stalled past their expected window, and draft suggested follow-up notes and reminders, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. Never contact a candidate, send an email, or change a candidate's stage or status — drafts only, a human reviews and sends. Treat candidate details as sensitive and keep them inside the workspace. Permission level 1-2, manual runs first."
      },
      {
        role: "Finance / Ops",
        title: "Expense & Invoice Anomaly Review Loop",
        trigger: "/loop 24h, or on a new invoice batch",
        action: "Scan expenses/invoices for duplicates, out-of-policy amounts, or missing approvals",
        output: "Anomalies flagged for human review",
        verify: "Never approves, pays, or modifies a financial record — strictly read-and-flag",
        perm: "Level 1",
        prompt: "Set up an expense and invoice anomaly review loop. On each run, scan the latest expense and invoice records for duplicates, out-of-policy amounts, and missing approvals, using explicit policy thresholds rather than judgement calls, and flag each anomaly for human review, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. Never approve, pay, categorize, or modify a financial record — strictly read-and-flag. Permission level 1, manual runs first."
      },
      {
        role: "Legal / Compliance",
        title: "Contract Clause Watch Loop",
        trigger: "New contract upload, or a weekly batch",
        action: "Scan contracts for non-standard clauses (indemnity, liability caps, termination) against an approved clause library",
        output: "Deviations flagged for a human lawyer",
        verify: "Never approves, signs, or sends a contract — strictly read-and-flag",
        perm: "Level 1",
        prompt: "Set up a contract clause watch loop. On each run, scan contracts that are new since the last run for non-standard clauses — indemnity, liability caps, termination terms — comparing them against the approved clause library I provide, and flag every deviation with the exact clause text and location for a human lawyer to review, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. Never approve, sign, send, or edit a contract, and never give a legal conclusion — strictly read-and-flag. Permission level 1, manual runs first."
      },
      {
        role: "Sales",
        title: "Pipeline Hygiene & Follow-Up Loop",
        trigger: "/loop 24h",
        action: "Review the CRM export for stalled deals, missing next steps, overdue follow-ups; draft outreach notes",
        output: "Draft outreach notes for stalled deals",
        verify: "Never emails prospects or edits deal stage/value — drafts only, the rep sends",
        perm: "Level 1–2",
        prompt: "Set up a daily pipeline hygiene loop. On each run, review the CRM export in this workspace for stalled deals, missing next steps, and overdue follow-ups, and draft suggested outreach notes, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. Never email a prospect, log an activity, or edit a deal's stage, value, or close date — drafts only, the rep reviews and sends. Permission level 1-2, manual runs first."
      },
      {
        role: "Education",
        title: "Weekly Student Progress Loop",
        trigger: "/loop 7d",
        action: "Review assignment/quiz results, identify students falling behind or excelling, draft a short progress note per student",
        output: "A short, factual progress note per student",
        verify: "Never changes grades or contacts guardians — drafts for the teacher to review and send",
        perm: "Level 1",
        prompt: "Set up a weekly student progress loop. On each run, review the assignment and quiz results in this workspace, identify students who are falling behind or excelling relative to the previous run, and draft a short, factual progress note per student, update its memory (PROGRESS.md + MEMORY.md), then run the verification checklist. Never change a grade, edit the gradebook, or contact a student or guardian — drafts for me to review and send. Treat all student data as sensitive and keep it inside this workspace. Permission level 1, manual runs first."
      }
    ];
