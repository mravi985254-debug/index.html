# Gautam Pickle's - Website Specification

## 1. Project Overview

- **Project Name**: Gautam Pickle's
- **Project Type**: Single-page business website
- **Core Functionality**: Online pickle ordering website with product display and email-based order submission
- **Target Users**: Customers looking to purchase homemade traditional pickles online

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections (Top to Bottom)**:
1. Navigation Bar (sticky)
2. Hero/Banner Section
3. About Section
4. Products Section
5. Order Form Modal
6. Footer

**Responsive Breakpoints**:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette**:
- Primary (Warm Red): `#C41E3A` (cardinal red)
- Secondary (Warm Yellow): `#F4A460` (sandy brown/golden)
- Accent (Green): `#228B22` (forest green)
- Dark Text: `#2D1810` (dark brown)
- Light Background: `#FFF8F0` (warm cream)
- White: `#FFFFFF`
- Card Background: `#FFFAF5`

**Typography**:
- Headings: 'Playfair Display', serif (elegant, traditional feel)
- Body: 'Poppins', sans-serif (modern, readable)
- Font Sizes:
  - H1: 3.5rem (desktop), 2.5rem (mobile)
  - H2: 2.5rem (desktop), 1.8rem (mobile)
  - H3: 1.5rem
  - Body: 1rem
  - Small: 0.875rem

**Spacing System**:
- Section padding: 80px vertical (desktop), 50px (mobile)
- Container max-width: 1200px
- Card gap: 30px
- Element margins: 16px, 24px, 32px

**Visual Effects**:
- Box shadows: `0 10px 40px rgba(0,0,0,0.1)`
- Border radius: 16px (cards), 8px (buttons), 50px (nav)
- Backdrop blur on modal: 10px

### Components

**Navigation Bar**:
- Logo/Brand name on left
- Navigation links on right (Home, Products, About, Contact)
- Sticky position with background blur on scroll
- Mobile: Hamburger menu

**Hero Section**:
- Full-width banner with background image/gradient
- Centered text with headline and CTA button
- Animated entrance (fade in + slide up)
- Decorative elements (spice illustrations)

**Product Cards**:
- Image placeholder (colored gradient with pickle emoji)
- Product name (bold)
- Price tag
- "Order Now" button with hover effect
- Hover: scale up slightly, shadow increase

**Order Modal**:
- Overlay with backdrop blur
- White modal card
- Form fields with icons
- Submit button
- Close button (X)
- Success/error message display

**Footer**:
- Dark brown background
- Centered content
- Social/contact info
- Copyright text

### Animations

- **Page Load**: Staggered fade-in for sections
- **Scroll**: Elements fade in when entering viewport
- **Buttons**: Scale + color transition on hover (0.3s ease)
- **Cards**: Lift effect on hover (translateY -10px)
- **Modal**: Fade in + scale from 0.9 to 1

---

## 3. Functionality Specification

### Core Features

1. **Responsive Navigation**
   - Smooth scroll to sections
   - Mobile hamburger menu toggle

2. **Product Display**
   - 4 product cards in grid (2x2 on tablet, 4x1 on desktop, 2x2 on mobile)
   - Each card shows: image, name, price, order button

3. **Order Form Modal**
   - Opens when "Order Now" button clicked
   - Pre-selects the clicked product
   - Form validation (all fields required)
   - EmailJS integration for sending orders

4. **Email Order System**
   - Uses EmailJS public service
   - Sends order details to configured email
   - Shows success/error feedback

5. **Smooth Scrolling**
   - Anchor links scroll smoothly to sections

### User Interactions

- Click "Order Now" → Modal opens with product pre-selected
- Fill form → Validate → Submit → Send email → Show feedback → Close modal
- Scroll → Navigation becomes opaque
- Click nav links → Smooth scroll to section

### Form Fields

| Field | Type | Validation |
|-------|------|------------|
| Full Name | text | Required, min 2 chars |
| Mobile Number | tel | Required, 10 digits |
| Email Address | email | Required, valid email |
| Address | textarea | Required, min 10 chars |
| Pickle Type | select | Required |

### Edge Cases

- Invalid form submission → Show error messages
- EmailJS failure → Show error with retry option
- Empty fields → Prevent submission, highlight fields

---

## 4. Acceptance Criteria

- [ ] Website loads without errors
- [ ] All 4 products display correctly with images, names, prices
- [ ] Order button opens modal with correct product pre-selected
- [ ] Form validates all fields before submission
- [ ] EmailJS sends order to configured email (with user setup)
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Animations are smooth and enhance UX
- [ ] Navigation works with smooth scrolling
- [ ] Footer displays all required information
- [ ] Instructions provided for EmailJS setup

---

## 5. Technical Notes

### EmailJS Setup Instructions

1. Create free account at https://www.emailjs.com/
2. Add email service (Gmail) and verify
3. Create email template with variables:
   - {{name}} - Customer name
   - {{mobile}} - Mobile number
   - {{email}} - Email address
   - {{address}} - Delivery address
   - {{pickle}} - Pickle type ordered
4. Get your Public Key, Service ID, and Template ID
5. Replace placeholders in JavaScript code
6. For Gmail: Use App Password if 2FA enabled

### File Structure

```
/vercel/sandbox
├── index.html
├── styles.css
├── script.js
└── SPEC.md
```
