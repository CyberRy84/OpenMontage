# Cookie Business Website (Template)

A single-page, mobile-first website for an order-only home bakery / cookie business, built from the "Cookie Business (Order-Only)" template spec. Everything here is **placeholder content** ("Golden Batch Cookie Co.") ready to be swapped for a real client.

## Run locally

No build step — plain HTML/CSS/JS.

```
cd cookie-business-website
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## What's here

- `index.html` — all 9 sections from the spec: hero, about, flavor menu, custom orders, how ordering works, gallery, reviews, order info/logistics, footer + sticky "Order Now" CTA.
- `styles.css` — warm bakery palette (cream/brown/soft pink), mobile-first responsive layout.
- `script.js` — mobile nav toggle, scroll-aware sticky CTA, and the order form's client-side summary.

## Customizing for a client

Follow the spec's build checklist:

1. Swap logo text, color tokens in `styles.css` (`:root` block), and fonts.
2. Replace the hero photo placeholder (`.hero-photo`) with a real image.
3. Populate the flavor menu cards in `index.html` (`#flavors`) — name, price, description, dietary tags, photo.
4. Fill in the custom-orders section (`#custom`) with real starting price and example photos.
5. Set the real lead-time / cutoff schedule in the hero note, `#how-it-works`, and `#logistics`.
6. Replace gallery placeholders (`#gallery`) with real photos.
7. Replace testimonials in `#reviews` with real quotes.
8. Fill in real pickup/delivery/shipping details and payment methods in `#logistics`.
9. Wire up the real order mechanism (see below).

## Order mechanism

The form in `#order` currently only renders a client-side summary — **it does not send anywhere**. Per the spec, pick one based on the client's order volume:

- **Low volume:** point the "Anything else" note at the footer email/phone; treat form output as something the customer copies into an email/text.
- **Google Form embed:** replace `#order-form` with an embedded Google Form (structures flavor/qty/date, dumps to a spreadsheet).
- **Square/Shopify lite:** embed a storefront widget for automatic payment handling once volume justifies it.
- **Custom intake + AI summary (premium upsell):** keep this form, but POST to a backend that drafts a confirmation summary and flags scheduling conflicts against the stated lead time.

## Not included

Real photography, a real business name/branding, and a live order backend — all client-specific and outside a generic template.
