# Exercise 2: Claims Triage Prototype

**Duration:** ~45 minutes
**Difficulty:** Intermediate
**Company:** Mediterranean Insurance Group (MIG)

---

## Objective

Create a lightweight prototype that supports a recurring insurance process: **claims triage**. You will define business rules for classification, prioritization, and routing, then apply those rules to a batch of incoming claims. The goal is to produce consistent output showing each claim's category, priority level, and suggested handling path.

By the end of this exercise, you will have a working triage system that processes 220 incoming claims and presents the results in a professional HTML dashboard.

---

## Background

**Ana Martinez** is the Regional Claims Manager at MIG's Barcelona office. She manages a team of 20 adjusters who handle claims across the Iberian Peninsula (Spain and Portugal).

Currently, claims triage is entirely manual. Each new claim is read individually by a senior adjuster, who assigns a category, priority, and handling path based on experience. This process is slow, inconsistent, and does not scale well during peak periods (storm season, holiday weekends).

Ana wants a prototype that can **automatically classify, prioritize, and route incoming claims** based on defined business rules. She has provided:

- **220 new incoming claims** waiting to be triaged (`incoming_claims.csv`)
- **Business rules** that her team currently follows informally (`business_rules.json`)
- **160 historical claims** with known outcomes to help calibrate the rules (`historical_outcomes.csv`)

Your job is to use Claude Code to build this prototype step by step.

---

## Data Files

All data files are in the `data/` folder:

| File | Description | Records |
|------|-------------|---------|
| `incoming_claims.csv` | New claims awaiting triage | 220 claims |
| `business_rules.json` | Triage rules for classification, priority, routing, and fraud detection | -- |
| `historical_outcomes.csv` | Past claims with known outcomes and adjuster notes | 160 claims |

---

## Step-by-Step Instructions

### Step 1: Understand the Data (~5 minutes)

Start by asking Claude Code to explore and summarize all the data files. This gives you a foundation before building anything.

**Open your terminal in the exercise folder, then type:**

```
claude
```

Once Claude Code is running, enter this prompt:

```
Read all files in the data/ folder. Summarize the incoming claims data, the business
rules, and the historical outcomes. How many claims do we have? What categories exist?
What are the key business rules? Are there any data quality issues?
```

**What to expect:**
- A summary showing 220 incoming claims and 160 historical outcomes
- A breakdown of product lines (Motor, Home, Health, Commercial) and incident types
- An overview of the business rules structure: priority levels, category mappings, handling paths, team assignments, SLA targets, and fraud indicators
- Possibly some observations about data patterns (repeat claimants, missing fields, etc.)

**Why this matters:**
Before writing any code, you need to understand the data and rules. Claude Code reads and synthesizes multiple files at once, which would take you much longer to do manually.

---

### Step 2: Define the Triage Rules (~10 minutes)

Now ask Claude Code to formalize the triage logic by combining the business rules with insights from historical outcomes.

**Enter this prompt:**

```
Based on the business_rules.json and historical outcomes, create a comprehensive triage
system. For each incoming claim, determine:

1) Claim category (auto-bodily-injury, auto-property, home-water-damage, home-fire,
   home-theft, health-emergency, health-routine, commercial-liability, commercial-property)
2) Priority level (Critical/High/Medium/Low) based on estimated amount, injury
   involvement, and time sensitivity
3) Handling path (fast-track, standard, complex-review, fraud-investigation, legal-referral)

Document the rules clearly in a file so we can review and adjust them.
```

**What to expect:**
- A structured document (likely Markdown or a code file) that clearly maps out every triage decision
- Rules that combine multiple data points: product line + incident type for category, amount thresholds + injury flags for priority, and category + priority + fraud signals for handling path
- Alignment with the historical data -- e.g., if historical "fast-track" claims were mostly under 2,000 EUR, the rules should reflect that

**Why this matters:**
This step forces clarity. Informal rules in a JSON file become explicit, reviewable logic. You can iterate on these rules later.

---

### Step 3: Apply Triage to Incoming Claims (~10 minutes)

Apply the triage rules to every one of the 220 incoming claims.

**Enter this prompt:**

```
Apply the triage rules to all claims in incoming_claims.csv. For each claim, add columns
for: assigned_category, priority_level, handling_path, assigned_team, estimated_resolution_days,
and a brief justification. Save the results as triaged_claims.csv
```

**What to expect:**
- A new CSV file (`triaged_claims.csv`) with all original columns plus 6 new ones
- Every claim categorized, prioritized, and routed
- Justifications like "Critical priority: estimated amount 90,300 EUR exceeds 50,000 threshold" or "Fraud investigation: theft claim filed without police report"
- Some claims flagged for fraud investigation (repeat claimants, delayed reporting, missing police reports for theft)

**Why this matters:**
This is where the rules get tested against real data. You will see how well the rules handle the variety of claims, and whether any edge cases fall through the cracks.

---

### Step 4: Build a Dashboard (~15 minutes)

Create a visual summary of the triage results that Ana could share with her team.

**Enter this prompt:**

```
Create an HTML dashboard that shows:

1) Summary statistics (claims by priority, by category, by handling path)
2) A table of all triaged claims sortable by priority
3) Alerts for any Critical priority claims that need immediate attention
4) Distribution charts

Make it look professional with a clean design. Use the MIG brand (Mediterranean
Insurance Group). Save it as dashboard.html
```

**What to expect:**
- A single self-contained HTML file with embedded CSS and JavaScript (no external dependencies)
- Summary cards showing counts by priority level (with color coding: red for Critical, amber for High, blue for Medium, green for Low)
- Interactive or sortable table of all 220 claims
- A highlighted section for Critical claims that need immediate attention
- Bar charts or similar visualizations showing distributions
- A professional, clean design suitable for a business presentation

**To view the dashboard**, open the generated HTML file in your browser:
```bash
open dashboard.html
```

**Why this matters:**
A prototype is only useful if stakeholders can see and interact with the results. Claude Code can generate complete, functional web interfaces from a single prompt.

---

### Step 5: Test with Edge Cases (~5 minutes)

Finally, ask Claude Code to critically review its own work and identify weaknesses.

**Enter this prompt:**

```
Review the triaged results. Find any claims that might be misclassified or where the
rules might not work well. Suggest improvements to the triage rules. Also flag any
potential fraud indicators based on the claim patterns.
```

**What to expect:**
- Identification of specific claims that are borderline or potentially misclassified
- Fraud flags: claimants with multiple recent claims, theft without police reports, claims with suspiciously round amounts, delayed incident reporting
- Rule improvement suggestions: e.g., "Consider adding a rule for claims filed within 90 days of policy inception" or "Water damage claims over 15,000 EUR should be upgraded to High priority based on historical resolution complexity"
- Observations about how the rules compare to actual historical outcomes

**Why this matters:**
No rule-based system is perfect on the first pass. This step teaches you to iterate: build, test, review, improve. It also demonstrates how Claude Code can act as a second pair of eyes on your work.

---

## What You Will Learn

By completing this exercise, you will practice:

1. **Defining business rules in natural language** -- Translating informal processes into structured, repeatable logic
2. **Applying rules to data systematically** -- Processing hundreds of records consistently, something that is error-prone when done manually
3. **Building interactive prototypes quickly** -- Going from raw data to a professional dashboard in minutes, not days
4. **Iterating on rule-based systems** -- Reviewing outputs, finding edge cases, and improving rules based on evidence

---

## Troubleshooting Tips

**Claude Code does not find the data files**
Make sure you launched Claude Code from the exercise folder (`exercises/exercise-2-claims-triage/`), or provide the full path in your prompt: "Read all files in exercises/exercise-2-claims-triage/data/".

**The generated CSV has formatting issues**
Ask Claude Code to fix it: "The triaged_claims.csv has [describe issue]. Please regenerate it." Claude Code handles CSV quoting, encoding, and special characters well, but descriptions with commas can sometimes cause issues.

**The dashboard does not render properly**
Try opening it in a different browser (Chrome or Firefox recommended). If charts are missing, ask: "The charts are not showing. Can you use a simpler charting approach that works without external libraries?"

**The triage rules seem too simple or too complex**
This is expected -- rule-based systems require iteration. Ask Claude Code: "Can you make the priority rules more nuanced by also considering [factor]?" or "Simplify the handling path logic to reduce the number of categories."

**You want to customize the exercise**
Feel free to modify the prompts. For example:
- Ask for rules in a specific format (decision tree, flowchart, Python code)
- Request additional analysis (compare triage results to historical outcomes)
- Add new columns to the dashboard (e.g., SLA countdown, team workload)

**Claude Code generates code instead of a direct result**
If Claude Code writes a Python script instead of directly producing the output, just let it run the script. Both approaches are valid. You can also say: "Run the script and show me the output."

---

## Bonus Challenges

If you finish early, try these extensions:

1. **Workload balancing:** Ask Claude Code to check if any team is overloaded based on the team capacity limits in the business rules, and suggest redistributions.

2. **SLA risk report:** Ask for a report showing which claims are at risk of breaching their SLA targets based on current queue depths and historical resolution times.

3. **Rule comparison:** Ask Claude Code to compare its triage assignments against the historical outcomes and calculate an accuracy score. Where do the rules diverge from actual past decisions?
