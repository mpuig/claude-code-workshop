# Module 2.3: Market Entry Assessment with Claude Code

> **Time:** 30 minutes | **Prerequisites:** [Module 2.2: Loss Ratio Analysis](../2.2-loss-ratio-analysis/README.md)

## The Scenario

MIG completed its acquisition of **LusoProtect**, a small Portuguese insurer based in Lisbon, in late 2025. The CEO has asked you to prepare a **market entry assessment for expanding MIG's product lines into Portugal** using LusoProtect as the platform.

Your task: assess the Portuguese insurance market, identify where MIG can win, and produce a strategy brief for the executive committee.

This module introduces a powerful capability: **Claude Code can search the web** for up-to-date market data, regulatory information, and competitive intelligence.

---

## What You Will Do

1. Gather market data using Claude's web search
2. Analyze the competitive landscape
3. Identify gaps and opportunities
4. Build a market entry scorecard
5. Generate a strategy brief for the executive committee

---

## Step 1: Gather Market Data

Claude Code can search the web for current information. Use this to build a foundation of market intelligence.

### Sample prompt:

```
I need to build a market assessment for the Portuguese insurance market.
MIG has acquired LusoProtect and wants to expand its product lines in
Portugal.

Search the web and compile the following market data:

1. MARKET SIZE: Total Portuguese insurance market GWP (life and non-life
   separately). Growth rate over the last 3 years.

2. KEY PLAYERS: Top 10 insurers in Portugal by market share (non-life).
   Include Fidelidade, Ageas Portugal, Allianz Portugal, Tranquilidade,
   and others.

3. REGULATORY ENVIRONMENT: Who is the regulator (ASF)? Any recent
   regulatory changes or upcoming ones that affect market entry?

4. LINE OF BUSINESS BREAKDOWN: How is the non-life market split across
   motor, property, health, liability, and other lines?

5. DISTRIBUTION: How is insurance distributed in Portugal? (brokers,
   agents, bancassurance, direct/digital)

Present this as a structured market overview. Cite your sources for every
data point, and flag when data is estimated vs. confirmed. Please provide
the exact URLs for all sources.

Save this as portugal-market-overview.md
```

> **Tip:** When presenting market data to stakeholders, exact URLs let them verify your numbers independently. Always ask Claude to include source URLs in research output.

> **Important:** Web data may not always be perfectly current. Claude will do its best to find recent figures and will flag when data is from an older source. Always verify critical numbers independently before including them in a client deliverable.

### Follow up for more depth:

```
Now search for more specific information:

1. What is the motor insurance penetration rate in Portugal vs. Spain
   and the EU average?
2. Are there any underserved segments in the Portuguese market? (SME
   commercial, cyber, specialty lines?)
3. What is the digital insurance adoption rate in Portugal? Any
   notable insurtech players?
4. What are the current market trends -- is the market hardening or
   softening? Any lines with particularly poor profitability?

Add this to the market overview document.
```

---

## Step 2: Analyze the Competitive Landscape

Ask Claude to synthesize the market data into a competitive analysis.

### Sample prompt:

```
Based on the market data you gathered, create a competitive landscape
analysis:

1. MARKET STRUCTURE: Is the Portuguese non-life market concentrated or
   fragmented? How much share do the top 5 players control?

2. COMPETITOR PROFILES: For the top 5 competitors, summarize:
   - Market position and strengths
   - Key product lines
   - Distribution strategy
   - Any known weaknesses or gaps

3. COMPETITIVE DYNAMICS: What is the basis of competition? (price,
   service, distribution reach, digital capability, product innovation?)

4. BARRIERS TO ENTRY: What makes it hard for a new entrant (even one
   with a local acquisition)? Consider:
   - Regulatory hurdles
   - Distribution lock-in (bancassurance exclusivity deals)
   - Customer switching costs
   - Brand recognition

5. MIG'S POSITION: Given that we now own LusoProtect (small player,
   approximately 1-2% market share, primarily motor and basic property),
   where do we start? What is our realistic beachhead?

Present this as a structured analysis, not a wall of text. Use tables
where appropriate.

Save as portugal-competitive-analysis.md
```

---

## Step 3: Identify Gaps and Opportunities

Now shift from description to insight. Ask Claude to think strategically.

### Sample prompt:

```
Based on the market overview and competitive analysis, identify the top
opportunities for MIG in Portugal. Think about this from three angles:

ANGLE 1 -- PRODUCT GAPS
Where is the Portuguese market underserved? Consider:
- Lines where few competitors offer strong products (SME commercial,
  specialty, cyber)
- Segments where MIG has existing expertise from Spain that could
  transfer (marine cargo from Barcelona, commercial property)
- Emerging needs (climate risk products, gig economy cover, ESG-linked
  insurance)

ANGLE 2 -- DISTRIBUTION OPPORTUNITIES
Where could MIG/LusoProtect gain distribution advantage?
- Digital-first channels (if the market is still broker/agent heavy)
- Bancassurance partnerships (are any banks looking for new partners?)
- Broker relationships that MIG has in Spain with cross-border presence

ANGLE 3 -- OPERATIONAL SYNERGIES
What can MIG bring from its existing operations?
- Technology platform (if MIG has a modern policy admin system)
- Reinsurance purchasing power (combined portfolio gets better terms)
- Claims management expertise
- Product development capabilities

For each opportunity, rate it: HIGH / MEDIUM / LOW on both
attractiveness and feasibility. Explain your reasoning.

Present as a table with narrative commentary.
```

---

## Step 4: Build a Market Entry Scorecard

Structure the analysis into a decision-making framework.

### Sample prompt:

```
Create a market entry scorecard that evaluates each potential product
line for Portugal expansion. Score each line from 1 (low) to 5 (high)
on these criteria:

CRITERIA:
- Market size and growth potential
- Competitive intensity (inverse -- less competition = higher score)
- MIG capability to compete (existing expertise, products, systems)
- LusoProtect platform readiness (can we launch quickly or need
  significant investment?)
- Regulatory complexity (inverse -- less complexity = higher score)
- Synergy with existing MIG operations

PRODUCT LINES TO EVALUATE:
- Motor (expand LusoProtect's existing book)
- Residential Property
- Commercial Property (SME focus)
- General Liability
- Marine Cargo
- Health / Group Health
- Cyber Insurance
- Specialty / Niche (e.g., construction, renewable energy)

Calculate a weighted total score for each line. Weight "market size"
and "MIG capability" at 2x, everything else at 1x.

Present as a scorecard table with a clear ranking. Add a one-paragraph
rationale for each of the top 3 recommended lines.

Save as portugal-entry-scorecard.md
```

### Expected output format:

```
MARKET ENTRY SCORECARD -- MIG PORTUGAL EXPANSION
===================================================

| Product Line      | Mkt Size (2x) | Comp (1x) | MIG Cap (2x) | Platform (1x) | Reg (1x) | Synergy (1x) | TOTAL |
|-------------------|---------------|-----------|--------------|---------------|----------|-------------|-------|
| Commercial Prop.  | 8             | 4         | 10           | 3             | 3        | 4            | 32    |
| Motor (expand)    | 10            | 2         | 8            | 5             | 3        | 4            | 32    |
| Marine Cargo      | 4             | 5         | 10           | 2             | 3        | 5            | 29    |
| ...               | ...           | ...       | ...          | ...           | ...      | ...          | ...   |
```

---

## Step 5: Generate the Strategy Brief

Pull everything together into an executive document.

### Sample prompt:

```
Write a strategy brief for MIG's executive committee on the Portugal
expansion opportunity. Save as portugal-strategy-brief.md

Structure:

1. EXECUTIVE SUMMARY (half page max)
   - Why Portugal, why now
   - Top 3 opportunities
   - Recommended sequencing
   - Key risks

2. MARKET CONTEXT (1 page)
   - Market size, growth, structure
   - Key players and dynamics
   - Regulatory landscape

3. STRATEGIC RATIONALE (1 page)
   - How Portugal fits MIG's growth strategy
   - LusoProtect as a platform: strengths and gaps
   - Synergies and cost savings potential

4. RECOMMENDED PRODUCT STRATEGY (1 page)
   - Priority product lines (from the scorecard)
   - Sequencing: what to launch in Year 1, Year 2, Year 3
   - Go-to-market approach for each priority line

5. COMPETITIVE POSITIONING
   - How MIG/LusoProtect should differentiate
   - Target customer segments
   - Distribution strategy

6. FINANCIAL PROJECTIONS (high-level)
   - Estimated GWP targets by year (Year 1, 2, 3)
   - Investment required
   - Expected breakeven timeline
   - Key assumptions (flag these clearly)

7. KEY RISKS AND MITIGATIONS
   - Top 5 risks with mitigation strategies

8. NEXT STEPS AND DECISION POINTS
   - What the executive committee needs to decide
   - Timeline for key milestones

Tone: strategic, evidence-based, confident but honest about uncertainties.
This is a board-level document. Avoid jargon where possible, define
acronyms on first use.
```

---

## Refining the Strategy

Use these follow-up prompts to strengthen the brief:

### Challenge the assumptions:

```
Play devil's advocate. What are the three strongest arguments AGAINST
expanding in Portugal? What could go wrong with this strategy? Be honest.
```

### Prepare for board questions:

```
The CEO will likely ask: "Why not just grow organically in Spain instead
of investing in Portugal?" Give me a compelling answer with supporting
data points.
```

### Add a competitor response scenario:

```
If Fidelidade (the market leader) responds aggressively to our entry
with price cuts in the segments we target, what is our contingency plan?
Write a one-paragraph response strategy.
```

### Create an investment summary:

```
Create a simple investment summary table showing:
- Year 1-3 projected GWP, claims, expense ratio, combined ratio
- Cumulative investment required
- Breakeven point
- Use conservative, base, and optimistic scenarios

This is a rough estimate -- flag it as indicative. But make the
assumptions transparent.
```

---

## Key Techniques Introduced in This Module

| Technique | What It Enables |
|-----------|----------------|
| Web search integration | Access current market data, regulations, competitor info without leaving Claude Code |
| Multi-step strategic analysis | Build from data gathering through to recommendations in a single session |
| Scoring frameworks | Structured, comparable evaluation of options |
| Devil's advocate prompting | Stress-test your strategy before presenting it |
| Audience-aware formatting | Same content structured differently for CUO, board, or working team |

---

## A Note on Data Quality

When Claude searches the web for market data, keep these points in mind:

1. **Verify critical numbers.** Web search gives you a strong starting point, but always cross-check key figures (market size, competitor shares) against authoritative sources like ASF annual reports or Swiss Re sigma studies.

2. **Check the dates.** Market data can be 1-2 years old. Claude will try to flag this, but always confirm you are working with the most recent available data.

3. **Distinguish fact from estimate.** Claude will sometimes need to estimate (e.g., market share for smaller players). It should flag these, but review critically.

4. **Regulatory details require expert review.** Use Claude's research as a starting point, but have your legal or compliance team validate any regulatory conclusions before acting on them.

---

## Summary

In this module you learned to:

- Use Claude Code's web search to gather market intelligence
- Build a structured competitive analysis from multiple data sources
- Create evaluation frameworks (scorecards) for strategic decisions
- Generate board-ready strategy documents
- Stress-test strategies with devil's advocate prompting

The key takeaway: **Claude Code is not just a writing tool -- it is a research and strategy partner.** The combination of web search, data structuring, and iterative analysis lets you produce in 30 minutes what would normally take several days of desk research and writing.

---

## Next Step

Proceed to [Module 3: Building an Insurance App with Vibe Coding](../../3-vibe-coding/README.md) to learn how non-technical users can build working applications with Claude Code.
