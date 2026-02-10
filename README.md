# DekorSwap | Endless Style

**Premium home décor subscription service** - Curated items delivered monthly, keeping your space fresh and clutter-free.

🌐 **Live Website**: [dekorswap.com](https://dekorswap.com)

---

## 🎯 About DekorSwap

DekorSwap is a revolutionary home décor subscription service that allows you to refresh your living space monthly without the commitment of buying. We curate high-quality, stylish décor items and deliver them to your door. Love it? Keep it another month. Bored? Swap it for something new.

### The Problem We Solve

- **Clutter**: People buy décor items that eventually collect dust
- **Cost**: High-quality home décor is expensive
- **Commitment**: Buying means you're stuck with items forever
- **Sustainability**: Fast furniture and décor contribute to waste

### Our Solution

A circular economy model for home décor:
- 🔄 **Rotate items monthly** - Fresh style without clutter
- 💰 **Affordable luxury** - Access premium items for a fraction of the cost
- 🌱 **Eco-friendly** - 100% circular, reducing waste
- 🎨 **Curated collections** - Expertly selected items tailored to your style

---

## 🚀 Business Model

### Subscription Tiers

1. **Starter Plan** - ₹999/month
   - 3 curated items per month
   - Free swaps anytime
   - Basic style quiz

2. **Standard Plan** - ₹1,999/month (Most Popular)
   - 5 curated items per month
   - Free swaps anytime
   - Advanced style quiz
   - Priority customer support

3. **Premium Plan** - ₹3,999/month
   - 8 curated items per month
   - Free swaps anytime
   - Personal stylist consultation
   - Premium items access
   - Priority delivery

### Revenue Streams

- **Subscription fees** (primary)
- **Purchase option** (customers can buy items they love)
- **Corporate partnerships** (office décor subscriptions)
- **Gift subscriptions**

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.5.11 (React)
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom component library with Radix UI primitives
- **Animations**: Framer Motion (planned)
- **Icons**: Lucide React

### Backend & Services
- **Email Service**: EmailJS
  - Contact form notifications
  - Get Started form processing
  - Newsletter subscriptions (mailto fallback)
- **Hosting**: GitHub Pages
- **Domain**: dekorswap.com (custom domain)
- **Analytics**: (Planned - Google Analytics)

### Development Tools
- **TypeScript**: Type-safe development
- **ESLint**: Code quality
- **Git**: Version control
- **GitHub Actions**: CI/CD pipeline

---

## 📁 Project Structure

```
dekor-swap/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact form
│   │   ├── get-started/       # Subscription signup
│   │   ├── how-it-works/      # Process explanation
│   │   ├── pricing/           # Pricing plans
│   │   ├── layout.tsx         # Root layout with navigation
│   │   └── globals.css        # Global styles
│   └── components/            # Reusable UI components
├── public/                    # Static assets
│   ├── .nojekyll             # GitHub Pages config
│   └── favicon.ico
├── .github/
│   └── workflows/
│       └── deploy-gh-pages.yml  # Deployment automation
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS config
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

---

## 🎨 Design System

### Color Palette

```css
/* Light Mode */
--background: #f2f2ed      /* Off-white background */
--foreground: #2c2c2c      /* Charcoal text */
--primary: #2c2c2c         /* Charcoal primary */
--accent: #d4745e          /* Terracotta accent */
--muted: #e5e5e0           /* Muted gray */
--border: #d1d1ca          /* Border gray */

/* Dark Mode */
--background: #1a1a1a      /* Dark background */
--foreground: #f2f2ed      /* Light text */
--accent: #d4745e          /* Terracotta accent (same) */
```

### Typography
- **Font Family**: System font stack (ui-sans-serif)
- **Headings**: Bold, tight tracking
- **Body**: Regular weight, relaxed leading

### Components
- Rounded corners (`--radius: 0.5rem`)
- Smooth transitions (150ms)
- Hover effects on interactive elements
- Accessible focus states

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dekorswap-rgb/dekor-swap.git
   cd dekor-swap
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file:
   ```env
   # EmailJS Configuration
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE=your_contact_template_id
   NEXT_PUBLIC_EMAILJS_GET_STARTED_TEMPLATE=your_get_started_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory.

---

## 📧 EmailJS Setup

The website uses EmailJS for form submissions. You need to set up templates in your EmailJS account:

### Contact Form Template
```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Submitted at: {{timestamp}}
```

### Get Started Template
```
Subject: New Subscription Request from {{from_name}}

Customer Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Plan: {{plan}}

Address:
{{address}}

Submitted at: {{timestamp}}
```

---

## 🌐 Deployment

### GitHub Pages (Current Setup)

The site is automatically deployed to GitHub Pages using GitHub Actions:

1. **Push to main branch**
2. **GitHub Actions runs**:
   - Installs dependencies
   - Builds Next.js static export
   - Uploads to GitHub Pages
3. **Site updates** at dekorswap.com

### Custom Domain Setup

1. **Add CNAME record** in your DNS provider:
   ```
   Type: CNAME
   Name: @
   Value: dekorswap-rgb.github.io
   ```

2. **Configure in GitHub**:
   - Go to repository Settings → Pages
   - Add custom domain: `dekorswap.com`
   - Enable HTTPS

---

## 📊 Features

### Current Features ✅
- [x] Responsive design (mobile, tablet, desktop)
- [x] Homepage with hero section
- [x] How It Works page
- [x] Pricing page with 3 tiers
- [x] About page
- [x] Contact form with EmailJS integration
- [x] Get Started subscription form
- [x] Newsletter signup (mailto)
- [x] Custom domain (dekorswap.com)
- [x] GitHub Pages deployment
- [x] SEO optimization

### Planned Features 🚧
- [ ] User authentication
- [ ] Customer dashboard
- [ ] Payment integration (Razorpay/Stripe)
- [ ] Inventory management system
- [ ] Admin panel
- [ ] Order tracking
- [ ] Style quiz
- [ ] Item catalog
- [ ] Reviews and ratings
- [ ] Blog section
- [ ] Social media integration

---

## 🎯 Target Market

### Primary Audience
- **Age**: 25-40 years
- **Income**: Middle to upper-middle class
- **Location**: Urban areas (Tier 1 & 2 cities in India)
- **Interests**: Home décor, interior design, sustainability
- **Pain Points**: Limited space, desire for variety, budget constraints

### Use Cases
- Young professionals in rented apartments
- Newlyweds setting up their first home
- Design enthusiasts who love changing styles
- Eco-conscious consumers
- Corporate offices wanting rotating décor

---

## 📈 Growth Strategy

### Phase 1: MVP Launch (Current)
- ✅ Website development
- ✅ Brand identity
- ⏳ Initial inventory (50 items)
- ⏳ Beta testing with 10 customers

### Phase 2: Market Entry (Next 3 months)
- Launch marketing campaign
- Social media presence (Instagram, Pinterest)
- Influencer partnerships
- Local partnerships with furniture stores
- Target: 100 subscribers

### Phase 3: Scaling (6-12 months)
- Expand to multiple cities
- Increase inventory to 500+ items
- Build logistics network
- Hire team (operations, customer service)
- Target: 1,000 subscribers

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

---

## 📞 Contact

**DekorSwap Team**
- 📧 Email: dekorswap@gmail.com
- 📱 Phone: +91 9996234649
- 📍 Location: Raipur, Chhattisgarh, India
- 🌐 Website: [dekorswap.com](https://dekorswap.com)

---

## 📄 License

This project is proprietary and confidential. All rights reserved © 2026 DekorSwap.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Radix UI** - For accessible component primitives
- **EmailJS** - For email service integration
- **Unsplash** - For placeholder images

---

## 🔮 Vision

**Our mission is to make premium home décor accessible to everyone while promoting sustainable consumption.**

We envision a world where:
- People can enjoy beautiful, ever-changing living spaces
- Quality décor is affordable and accessible
- Circular economy reduces waste
- Home styling is personalized and effortless

**Join us in revolutionizing home décor! 🏡✨**

---

*Built with ❤️ by the DekorSwap team*
