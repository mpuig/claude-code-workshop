# Exercise 1: Data-Driven Insight Tool

## Objective

Build an end-to-end analytical workflow using Claude Code that retrieves and combines insurance market and demographic data, structures it into a clean dataset, identifies **white spaces** (regions with high risk exposure but low insurance penetration), and produces executive-ready output -- all without writing any code yourself.

By the end of this exercise, you will have gone from four raw CSV files to a ranked list of expansion opportunities, interactive visualizations, and a professional memo for a senior stakeholder.

---

## Background: The Business Problem

**Mediterranean Insurance Group (MIG)** is a mid-size European insurer operating across Spain, Portugal, Italy, and Southern France. MIG has a strong foothold in rural Spain and Portugal but a minimal presence in the larger Italian and French markets.

**Isabel Santos**, MIG's Head of Strategy, has been tasked by the board with identifying the top priority regions for geographic expansion over the next 3 years. She has data scattered across multiple files maintained by different teams:

| File | Maintained By | Description |
|------|--------------|-------------|
| `market_penetration.csv` | Underwriting & Finance | MIG's premiums, policy counts, and market share by region and product line |
| `demographics.csv` | Market Intelligence | Population, income, urbanization, and growth data for each region |
| `accident_frequency.csv` | Claims & Actuarial | Claims frequency and natural disaster risk by region |
| `product_lines.csv` | Product Management | Product catalog with strategic priorities and financial targets |

Isabel needs someone to combine these sources, find the regions where demand is high but MIG's presence is low, and present the findings in a clear, actionable format. That someone is Claude Code.

---

## Prerequisites

- Claude Code installed and configured
- Terminal open in this exercise directory: `exercises/exercise-1-data-insight-tool/`
- Familiarity with CSV data (no coding experience required)

---

## Data Overview

Before starting, here is what each file contains:

| File | Rows | Key Columns |
|------|------|-------------|
| `market_penetration.csv` | 576 | `region_code`, `country`, `product_line`, `gross_written_premium_eur`, `policies_in_force`, `market_share_pct`, `year` (2024-2025) |
| `demographics.csv` | 68 | `region_code`, `country`, `population_2025`, `population_growth_rate_pct`, `median_household_income_eur`, `urbanization_rate_pct`, `gdp_per_capita_eur` |
| `accident_frequency.csv` | 68 | `region_code`, `country`, `motor_claims_per_1000_vehicles`, `home_claims_per_1000_policies`, `natural_disaster_risk_score` (1-10) |
| `product_lines.csv` | 20 | `product_line`, `sub_product`, `avg_premium_eur`, `loss_ratio_target_pct`, `growth_rate_pct`, `strategic_priority` |

The 68 regions span 4 countries: Spain (17 autonomous communities), Portugal (18 districts), Italy (20 regions), and France (13 metropolitan regions).

---

## Step-by-Step Instructions

### Step 1: Explore the Data (~5 minutes)

**Goal:** Understand what data is available, how the files relate to each other, and spot any quality issues before doing analysis.

**Prompt to type in Claude Code:**

```text
Read all the CSV files in the data/ folder and give me a summary of what data we have, including column names, row counts, and any data quality issues you notice.
```

**What to expect:**
- Claude Code will read each of the four CSV files
- It will produce a structured summary listing columns, row counts, data types, and value ranges
- It may flag observations like: uneven product coverage across regions, year-over-year data available only for market penetration, or regions with very small policy counts

**What to look for in the output:**
- Does Claude identify that `region_code` is the join key across files?
- Does it note that `market_penetration.csv` has multiple rows per region (by product line and year)?
- Does it highlight the difference in granularity between files?

> **Tip:** If the summary is too brief, follow up with: *"Give me more detail on the value distributions -- what are the min, max, and mean for the numeric columns in each file?"*

---

### Step 2: Combine and Structure the Data (~10 minutes)

**Goal:** Merge the separate data sources into a single analytical dataset with calculated metrics.

**Prompt to type in Claude Code:**

```text
Combine the market penetration, demographics, and accident frequency data into a single unified dataset. Join on region_code. Calculate insurance penetration rate (premiums per capita) and risk-adjusted penetration (penetration / accident frequency). Save as a clean CSV called combined_analysis.csv
```

**What to expect:**
- Claude Code will write a Python script that:
  - Reads all three CSV files
  - Aggregates `market_penetration.csv` to region level (summing across product lines, using 2025 data)
  - Joins on `region_code`
  - Calculates derived metrics:
    - `premiums_per_capita` = total GWP / population
    - `risk_adjusted_penetration` = premiums_per_capita / composite_accident_frequency
  - Saves the result as `combined_analysis.csv`

**What to look for:**
- Does the join produce 68 rows (one per region)?
- Are the calculated columns sensible? (Spain/Portugal should show higher penetration; Italy/France lower)
- Does Claude handle the aggregation from product-line level to region level correctly?

> **Tip:** If you want to keep product-line detail, try: *"Actually, keep the product_line breakdown in the combined dataset too -- I want to see penetration by region AND product line."*

---

### Step 3: Identify White Spaces (~10 minutes)

**Goal:** Find regions where demand indicators are strong but MIG's presence is weak -- the best expansion opportunities.

**Prompt to type in Claude Code:**

```text
Analyze the combined dataset to find white spaces - regions where there is high risk exposure (high accident frequency, growing population) but low insurance penetration. Rank regions by opportunity score. Create a summary table.
```

**What to expect:**
- Claude Code will define an opportunity scoring methodology, likely combining:
  - Low MIG market share (room to grow)
  - High accident frequency (demand driver)
  - Population growth (expanding market)
  - High GDP per capita or income (ability to pay)
  - High urbanization (distribution efficiency)
- It will rank all 68 regions and present a table of the top opportunities
- Italian and French urban regions should rank highly (large markets where MIG barely exists)

**What to look for:**
- Does the scoring methodology make business sense?
- Are the top regions plausible? (Expect large Italian regions like Lombardy, Lazio, Campania and French regions like Ile-de-France, Provence-Alpes-Cote d'Azur)
- Does Claude explain its methodology, or does it just present numbers?

> **Tip:** Push Claude to refine the analysis: *"Weight the opportunity score more heavily toward regions where MIG already has some presence (market share > 0.1%) -- pure greenfield markets may be too risky."*

---

### Step 4: Generate Visualizations (~10 minutes)

**Goal:** Create interactive charts that make the findings easy to present to stakeholders.

**Prompt to type in Claude Code:**

```text
Create an HTML page with interactive charts showing: 1) A scatter plot of penetration rate vs accident frequency by region (bubble size = population), 2) A bar chart of top 15 opportunity regions by score, 3) A heatmap of penetration by country and product line. Use Chart.js or similar.
```

**What to expect:**
- Claude Code will generate a self-contained HTML file (e.g., `visualizations.html`) that includes:
  - **Chart 1 - Scatter Plot:** X-axis = accident frequency, Y-axis = penetration rate, bubble size = population, color-coded by country. White space regions appear in the lower-right quadrant (high risk, low penetration).
  - **Chart 2 - Bar Chart:** Top 15 regions ranked by opportunity score.
  - **Chart 3 - Heatmap:** A grid of countries vs. product lines showing penetration intensity.
- The file should open directly in a browser with no server required

**What to look for:**
- Do the charts render correctly when you open the HTML file?
- Is the scatter plot labeled clearly? Can you identify the white space quadrant?
- Does the heatmap clearly show where MIG is strong (Spain/Portugal Motor) vs. weak (Italy/France across the board)?

> **Tip:** If a chart does not look right, describe the issue to Claude: *"The scatter plot axes are too compressed -- the Italian regions are all clustered together. Can you use a log scale on the Y-axis and add region labels on hover?"*

---

### Step 5: Executive Summary (~5 minutes)

**Goal:** Produce a polished, executive-ready memo summarizing the analysis and recommendations.

**Prompt to type in Claude Code:**

```text
Write an executive summary for Isabel Santos (Head of Strategy at MIG) highlighting the top 5 priority regions for expansion, why they were selected, and recommended next steps. Format as a professional memo.
```

**What to expect:**
- Claude Code will generate a professional memo (likely as a `.md` or `.txt` file) containing:
  - **Header:** To/From/Date/Subject
  - **Executive Summary:** 2-3 sentence overview
  - **Methodology:** Brief description of the scoring approach
  - **Top 5 Priority Regions:** Each with data points and rationale
  - **Recommended Next Steps:** Concrete actions (e.g., "Commission detailed feasibility study for Lombardy Motor market")
  - **Appendix reference:** Pointer to the full dataset and visualizations

**What to look for:**
- Is the tone appropriate for a C-suite audience?
- Are the recommendations backed by specific data points from the analysis?
- Does it acknowledge risks or limitations?

> **Tip:** If the memo is too generic, sharpen it: *"Add specific premium opportunity estimates for each region -- what is the addressable market size in EUR if MIG reached 2% market share?"*

---

## What You Will Learn

By completing this exercise, you will have practiced:

| Skill | How It Was Used |
|-------|----------------|
| **Multi-file data exploration** | Step 1: Reading and summarizing four CSV files in one prompt |
| **Data joining and transformation** | Step 2: Merging datasets on a common key, aggregating, and computing new metrics |
| **Analytical reasoning** | Step 3: Defining and applying a scoring methodology to identify business opportunities |
| **Visualization generation** | Step 4: Creating interactive HTML charts from structured data |
| **Executive communication** | Step 5: Translating data findings into a professional business memo |
| **Iterative refinement** | Throughout: Following up with clarifying prompts to improve outputs |

---

## Troubleshooting Tips

### "Claude Code is not reading the files"
- Make sure your terminal is in the `exercise-1-data-insight-tool/` directory, or use absolute paths in your prompts
- Try being explicit: *"Read the file at data/market_penetration.csv"*

### "The join produced fewer rows than expected"
- Check if Claude is filtering to a single year. The `market_penetration.csv` file has data for both 2024 and 2025. Ask Claude: *"How many rows does the merged dataset have? I expected 68 regions."*

### "The opportunity score does not make sense"
- Ask Claude to explain its methodology: *"Walk me through how you calculated the opportunity score. What weight did you give each factor?"*
- Then adjust: *"Increase the weight of population growth and decrease the weight of GDP per capita."*

### "The HTML charts are not rendering"
- Open the file directly in Chrome, Firefox, or Safari (not by double-clicking -- use File > Open or drag into the browser)
- Check if Claude used a CDN link for Chart.js. If you are offline, ask: *"Inline the Chart.js library directly in the HTML file instead of using a CDN."*

### "The output is too long / too short"
- Claude Code responds to length guidance. Try: *"Keep the executive summary to one page maximum"* or *"Give me a more detailed breakdown with numbers for every region."*

### "I want to restart from a specific step"
- You can jump to any step. The data files are static, so you can always re-run from Step 1. If you want to restart from Step 3, just make sure `combined_analysis.csv` exists from Step 2.

---

## Bonus Challenges

If you finish early or want to go deeper:

1. **Sensitivity Analysis:** *"Run the opportunity scoring with three different weighting schemes and show me how the top 10 changes."*

2. **Time Series:** *"Compare 2024 vs 2025 market penetration data. Which regions are growing fastest for MIG? Are there any regions where MIG is losing share?"*

3. **Product-Level Drill-Down:** *"For the top 5 opportunity regions, which specific product lines have the biggest gap? Create a product-region matrix."*

4. **Risk Overlay:** *"Cross-reference the opportunity regions with the natural disaster risk score. Flag any high-opportunity regions that also have high climate risk (score >= 7)."*

5. **Competitor Inference:** *"If MIG's market share in Lombardy is 0.3%, and the total market is implied by our GWP / market_share, what is the total addressable market in each of the top 10 opportunity regions?"*

---

## Expected Time

| Step | Duration |
|------|----------|
| Step 1: Explore the data | ~5 min |
| Step 2: Combine and structure | ~10 min |
| Step 3: Identify white spaces | ~10 min |
| Step 4: Generate visualizations | ~10 min |
| Step 5: Executive summary | ~5 min |
| **Total** | **~40 minutes** |

---

## Files Produced

By the end of this exercise, your directory should contain:

```text
exercise-1-data-insight-tool/
  README.md                  <-- This file
  data/
    market_penetration.csv   <-- Source data (576 rows)
    demographics.csv         <-- Source data (68 rows)
    accident_frequency.csv   <-- Source data (68 rows)
    product_lines.csv        <-- Source data (20 rows)
  combined_analysis.csv      <-- Generated in Step 2
  visualizations.html        <-- Generated in Step 4
  executive_summary.md       <-- Generated in Step 5
```
