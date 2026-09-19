# Mortgage CRM (Twenty App)

Extends [Twenty](https://twenty.com) with a mortgage-lending layer, built as an installable **Twenty App** using `twenty-sdk`. Everything else (login, users/workspaces, Contacts/Companies, Tasks, Notes, activity timeline, email/calendar sync, search, views/filters, dashboards, REST/GraphQL APIs, webhooks, workflow engine) is reused as-is from Twenty core — nothing in `twenty-server`/`twenty-front` is forked or modified.

## What this app adds

| Concept | Implementation |
|---|---|
| Borrower | Existing `Person` object (no new object) |
| Co-Borrower | Existing `Person` object, via a second relation on `Loan` |
| Loan Officer | Existing `WorkspaceMember` (your users), via a relation on `Loan` |
| Realtor / Referral Partner | New `ReferralPartner` object (`partnerType`: Realtor, Attorney, Financial Advisor, Other), optionally linked to an existing `Company` |
| Property | New `Property` object (address, property type, purchase price, year built) |
| Loan / Opportunity | New `Loan` object: `loanNumber`, `loanType`, `loanAmount`, `purchasePrice`, `interestRate`, `closingDate`, `stage` |
| Pipeline | `Loan.stage` select field: New Lead → Contacted → Application → Pre-Approved → Processing → Underwriting → Clear to Close → Closed/Funded, plus Lost |
| Views | `Loan Pipeline` (Kanban grouped by stage), `All Loans` (table), `All Properties` (table), `All Referral Partners` (table) |

## Structure

```
src/
  application.config.ts        # app manifest
  objects/
    loan.object.ts              # Loan fields + pipeline stage options
    property.object.ts
    referral-partner.object.ts
  fields/                       # relations to Loan <-> Person/WorkspaceMember/Company/Property/ReferralPartner
  views/                        # kanban pipeline + table views
```

## Deploying to a Twenty workspace

```bash
yarn install
yarn twenty remote:add           # authenticate against your Twenty instance
yarn twenty dev                  # push objects/fields/views live and watch for changes
```

Run `yarn twenty publish` (see `twenty-sdk` docs) once you're ready to install it on additional workspaces.

## Not code-defined here (build these in the Twenty UI after installing)

- **Dashboards**: build "Loans by Stage", "Pipeline Value", "Closings this Month" widgets in Settings → Dashboards, pointing at the `Loan` object — Twenty's dashboard builder isn't part of the app manifest.
- **Workflows**: e.g. "Notify loan officer when stage = Underwriting" or "Create a Task when a Loan reaches Clear to Close" — build these with Twenty's built-in Workflow automation (trigger on `Loan` record update), referencing the fields defined here.
- **Custom fields on Person** for borrower-specific data (credit score, annual income, employment status) can be added the same way as the fields in `src/fields/` if needed later.
