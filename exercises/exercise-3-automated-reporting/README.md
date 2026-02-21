# Exercise 3: Automated Reporting Solution

## Mediterranean Insurance Group (MIG) - Quarterly Claims Report Automation

---

## Objective

Review existing quarterly claims datasets, define a standard periodic report structure, automatically generate a structured quarterly claims report, and demonstrate how to update it when new data arrives -- all without manual rework.

By the end of this exercise you will have:

1. Explored and understood four quarters of claims data.
2. Defined a reusable report structure with precise KPI formulas.
3. Generated a full Q4 2025 quarterly claims report in Markdown.
4. Created an HTML companion with interactive charts.
5. Simulated a new quarter arriving and regenerated the report effortlessly.
6. Built a Python automation script Pierre can run every quarter.

**Estimated total time: 55 minutes**

---

## Background

Pierre Dupont is an Actuarial Analyst based in MIG's Marseille office. Every quarter he spends nearly two full days manually assembling the claims report for senior management. The process involves:

- Pulling data from four CSV extracts (one per quarter).
- Calculating KPIs by hand in spreadsheets.
- Writing commentary about trends and anomalies.
- Formatting everything into a presentable document.
- Rebuilding charts from scratch each time.

Pierre wants to automate this end-to-end. When new quarterly data lands in the `data/` folder, the report and charts should regenerate automatically with updated numbers, trends, and commentary -- zero manual rework.

---

## Prerequisites

- Claude Code CLI installed and configured.
- A terminal open in this exercise folder (`exercise-3-automated-reporting/`).
- Python 3.9+ available (for the final automation script).

---

## Data Overview

The `data/` folder contains:

| File | Description |
|------|-------------|
| `claims_q1_2025.csv` | Q1 2025 claims data (Jan -- Mar) |
| `claims_q2_2025.csv` | Q2 2025 claims data (Apr -- Jun) |
| `claims_q3_2025.csv` | Q3 2025 claims data (Jul -- Sep) |
| `claims_q4_2025.csv` | Q4 2025 claims data (Oct -- Dec) |
| `report_template.md` | Report structure template with KPI definitions |

Each CSV contains 120-150 individual claims across MIG's four markets (Spain, France, Italy, Portugal) and five product lines (Motor, Home, Health, Commercial, Life).

---

## Step-by-Step Instructions

### Step 1: Explore the Data (~5 min)

**Goal:** Understand what data is available before building anything.

Open Claude Code in this exercise directory and type the following prompt:

```
Read all CSV files in the data/ folder and the report template. Give me a summary of what data we have across the 4 quarters, including total claims, total amounts, and any notable patterns you see at first glance.
```

**What to expect:**

Claude Code will read all four CSV files and the report template, then produce a summary similar to:

- Total number of claims per quarter (expect 120-150 each).
- Grand totals for reported amounts, paid amounts, and reserves.
- A note about which product lines and regions appear most frequently.
- Early observations on seasonal patterns (e.g., more motor claims in Q1/Q4).

**What to look for:**

- Does Claude correctly identify all four quarters?
- Does it flag the seasonal differences?
- Does it mention the fraud flags and claim statuses?

---

### Step 2: Define the Report Structure (~10 min)

**Goal:** Establish a precise, reusable report blueprint before generating content.

Type the following prompt:

```
Based on the report_template.md, create a comprehensive quarterly claims report structure. The report should include: 1) Executive Summary, 2) Key KPIs (total claims, total paid, average claim cost, loss ratio, claims frequency), 3) Trends vs previous quarter and YoY, 4) Breakdown by product line, 5) Breakdown by region, 6) Top 10 largest claims, 7) Fraud detection summary, 8) Recommendations. Define the exact KPIs and their formulas.
```

**What to expect:**

A detailed report blueprint that includes:

- Section-by-section outline with descriptions of what goes in each.
- KPI definitions with explicit formulas, for example:
  - **Loss Ratio** = Total Paid Amount / Total Reported Amount
  - **Average Claim Cost** = Total Paid Amount / Number of Settled Claims
  - **Claims Frequency** = Number of Claims / Number of Active Policies (estimated)
  - **Settlement Rate** = Settled Claims / Total Claims
  - **Denial Rate** = Denied Claims / Total Claims
- Trend calculation methodology (QoQ and YoY).
- Table formats for the product line and region breakdowns.

**What to look for:**

- Are the KPI formulas precise and unambiguous?
- Does the structure cover all eight sections requested?
- Is the format professional enough for senior management?

---

### Step 3: Generate the Q4 2025 Report (~15 min)

**Goal:** Produce a complete, professional quarterly claims report.

Type the following prompt:

```
Generate the full Q4 2025 Quarterly Claims Report using all available data. Compare Q4 to Q3 and to Q4 of the previous periods. Include all sections defined in the structure. Calculate all KPIs. Add professional commentary explaining the trends. Save as quarterly_report_Q4_2025.md
```

**What to expect:**

A complete Markdown file (`quarterly_report_Q4_2025.md`) containing:

- **Executive Summary:** 3-5 sentence overview of the quarter's performance.
- **KPI Dashboard:** Table with current quarter values, QoQ change (%), and YoY indicators.
- **Trend Analysis:** Commentary explaining why metrics moved (e.g., "Motor claims rose 12% QoQ, consistent with winter seasonal patterns").
- **Product Line Breakdown:** Table showing claims count, total paid, average cost, and loss ratio per product line.
- **Regional Breakdown:** Table showing performance across Spain, France, Italy, and Portugal.
- **Top 10 Largest Claims:** List with claim ID, product line, region, amount, and status.
- **Fraud Summary:** Count of suspected and confirmed fraud cases, amounts involved, detection rates.
- **Recommendations:** Data-driven suggestions for management action.

**What to look for:**

- Are the numbers accurate? Spot-check a few by looking at the CSV.
- Is the commentary insightful or generic?
- Does the report compare Q4 to Q3 and to earlier quarters?
- Is the tone appropriate for senior management?

---

### Step 4: Create Visualizations (~10 min)

**Goal:** Build a visual companion to the Markdown report.

Type the following prompt:

```
Create an HTML companion to the report with interactive charts: 1) Claims volume trend across all 4 quarters (line chart), 2) Claims by product line per quarter (stacked bar), 3) Average claim cost by region (horizontal bar), 4) Loss ratio evolution (line chart with target line), 5) Claims status distribution (pie chart). Save as quarterly_report_charts.html
```

**What to expect:**

An HTML file (`quarterly_report_charts.html`) that:

- Uses a JavaScript charting library (likely Chart.js or similar) loaded from a CDN.
- Contains five distinct, well-labeled charts.
- Uses MIG brand-appropriate colors and professional styling.
- Can be opened directly in any browser -- no server required.
- Includes a header with the report title and quarter.

**What to look for:**

- Open the file in your browser. Do all five charts render?
- Are the numbers consistent with the Markdown report?
- Is the layout clean and presentable?
- Do interactive elements (tooltips, legends) work?

---

### Step 5: Simulate New Data Arrival (~5 min)

**Goal:** Prove that the workflow handles new data without starting from scratch.

Type the following prompt:

```
Now imagine Q1 2026 data just arrived. Generate a sample Q1 2026 dataset with realistic seasonal patterns (more motor claims in winter, similar volume to Q1 2025 with 5% growth). Save it as claims_q1_2026.csv. Then regenerate the report comparing Q1 2026 to Q4 2025 and Q1 2025.
```

**What to expect:**

1. A new file `data/claims_q1_2026.csv` with ~130-160 claims (5% more than Q1 2025).
2. An updated report (`quarterly_report_Q1_2026.md`) that:
   - Uses Q1 2026 as the current quarter.
   - Compares to Q4 2025 (previous quarter) and Q1 2025 (year-over-year).
   - Recalculates all KPIs with the new data.
   - Provides fresh commentary on the new trends.

**What to look for:**

- Does the Q1 2026 data show realistic winter patterns (elevated motor claims)?
- Does the report correctly identify YoY growth of approximately 5%?
- Did Claude reuse the same report structure, or did it invent a new one?

---

### Step 6: Build the Automation Script (~10 min)

**Goal:** Create a standalone script Pierre can run each quarter without Claude Code.

Type the following prompt:

```
Create a Python script called generate_report.py that takes a quarter (e.g., 'Q4_2025') as input and automatically generates both the Markdown report and HTML charts. It should read the relevant data files, calculate all KPIs, and produce the outputs. Pierre should be able to run this whenever new data arrives.
```

**What to expect:**

A Python script (`generate_report.py`) that:

- Accepts a command-line argument for the target quarter (e.g., `python generate_report.py Q4_2025`).
- Reads all available CSV files from the `data/` folder.
- Calculates every KPI from the report structure.
- Generates a Markdown report file.
- Generates an HTML charts file.
- Prints a summary to the console.
- Handles edge cases (missing data, first quarter with no prior period).

**How to verify it works:**

```bash
python generate_report.py Q4_2025
```

This should produce output files matching what Claude Code generated in Steps 3 and 4.

---

## What You Will Learn

By completing this exercise, you will have practiced:

| Skill | Where It Appears |
|-------|------------------|
| Multi-file data exploration | Step 1 |
| Defining report structures and KPI formulas | Step 2 |
| Automated data analysis across time periods | Step 3 |
| Generating professional reports from raw data | Step 3 |
| Creating data visualizations with code | Step 4 |
| Handling new data without manual rework | Step 5 |
| Building reusable automation scripts | Step 6 |
| Iterative prompting and refinement | All steps |

---

## Troubleshooting Tips

### "Claude says it cannot read the files"
Make sure you launched Claude Code from the `exercise-3-automated-reporting/` directory (or its parent). Claude Code needs the files to be within its working context. You can also provide absolute paths in your prompt.

### "The KPI numbers do not match when I spot-check"
This can happen if Claude misinterprets which column to use. Clarify in your prompt:
- **Reported amount** = `reported_amount_eur` (initial estimate of the claim).
- **Paid amount** = `paid_amount_eur` (actual disbursement, 0 if not yet paid).
- **Reserved amount** = `reserved_amount_eur` (funds set aside for open claims).

### "The HTML charts are blank when I open the file"
Check that your browser is not blocking the CDN script (e.g., Chart.js). If you are behind a corporate proxy, ask Claude to embed the library inline instead of loading from a CDN.

### "The report structure changed between Step 3 and Step 5"
Claude Code does not automatically remember earlier outputs across separate sessions. If you are in the same session, it should be consistent. If you started a new session, paste the report structure or refer to the saved file: "Use the same structure as quarterly_report_Q4_2025.md."

### "The Python script fails to run"
Check which Python version you have (`python --version` or `python3 --version`). The script may require `pandas` -- install it with `pip install pandas` if needed. If Claude generated the script using only the standard library, ensure the CSV parsing logic handles the date formats correctly.

### "I want to customize the report further"
Great -- that is encouraged. Try follow-up prompts like:
- "Add a section comparing loss ratios to industry benchmarks."
- "Include a heatmap of claims by region and product line."
- "Generate a PDF version of the report."

---

## Summary

This exercise demonstrates a realistic actuarial workflow: taking raw quarterly data and transforming it into a management-ready report with commentary and visualizations. The key insight is that once the structure is defined, regenerating the report with new data becomes a single prompt -- saving Pierre nearly two days of work every quarter.

**Next exercise:** Exercise 4 (coming soon).
