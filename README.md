# Portfolio - Gilian CANNIER

Portfolio personnel moderne et responsive développé avec Next.js 16, TypeScript et Tailwind CSS.

## 🚀 Technologies utilisées

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Animations**: CSS custom animations & Tailwind transitions
- **Theme**: next-themes (Dark/Light mode)
- **Analytics**: Vercel Analytics
- **Package Manager**: pnpm

## ✨ Fonctionnalités

- ✅ Design moderne et élégant avec palette rouge/bordeaux
- ✅ Mode sombre/clair avec transition fluide
- ✅ Navigation sticky responsive
- ✅ Animations au scroll et effets interactifs
- ✅ Sections complètes :
  - Hero avec effet de typing
  - À propos avec statistiques
  - Compétences avec barres de progression
  - Projets avec cards interactives
  - Centres d'intérêt
  - Formulaire de contact
- ✅ Footer avec liens sociaux
- ✅ Scroll smooth entre sections
- ✅ 100% responsive (mobile-first)
- ✅ SEO optimisé
- ✅ Performance optimisée

## 🎨 Charte graphique

### Couleurs principales
- **Primary**: Rouge bordeaux (#8B2635 approx)
- **Accent**: Rouge vif pour les highlights
- **Background**: Beige clair (mode clair) / Noir profond (mode sombre)
- **Muted**: Variations subtiles pour les backgrounds secondaires

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── globals.css          # Styles globaux et animations
│   ├── layout.tsx            # Layout principal avec métadonnées
│   └── page.tsx              # Page d'accueil
├── components/
│   ├── navbar.tsx            # Navigation sticky
│   ├── hero.tsx              # Section hero avec animations
│   ├── about.tsx             # Section à propos
│   ├── skills.tsx            # Compétences techniques
│   ├── projects.tsx          # Projets réalisés
│   ├── interests.tsx         # Centres d'intérêt
│   ├── contact.tsx           # Formulaire de contact
│   ├── footer.tsx            # Footer
│   ├── smooth-scroll.tsx     # Gestion du scroll smooth
│   └── theme-provider.tsx    # Provider pour le thème
└── public/                   # Assets statiques
```

## 🛠️ Installation et développement

### Prérequis
- Node.js 18+
- pnpm (recommandé)

### Installation

```bash
# Cloner le repository
git clone https://github.com/GilianC/portfolio.git
cd portfolio

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Scripts disponibles

```bash
pnpm dev          # Lancer le serveur de développement
pnpm build        # Créer une build de production
pnpm start        # Lancer la build de production
pnpm lint         # Lancer ESLint
```

## 📝 Personnalisation

### Modifier les informations personnelles

1. **Composant Hero** (`components/hero.tsx`)
   - Nom, titre, description
   - Liens sociaux (GitHub, LinkedIn, Email)

2. **Composant About** (`components/about.tsx`)
   - Biographie
   - Statistiques (années d'expérience, projets, etc.)

3. **Composant Skills** (`components/skills.tsx`)
   - Liste des compétences techniques
   - Niveaux de maîtrise

4. **Composant Projects** (`components/projects.tsx`)
   - Projets réalisés avec descriptions, tags, liens

5. **Composant Contact** (`components/contact.tsx`)
   - Email, localisation
   - Formulaire de contact (à connecter à un backend)

### Modifier les couleurs

Éditez le fichier `app/globals.css` :
- Variables CSS pour les couleurs en mode clair et sombre
- Utilise OKLCH pour des couleurs perceptuellement uniformes

## 🚀 Déploiement

### Vercel (recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Build manuel

```bash
pnpm build
```

Les fichiers de production seront dans le dossier `.next/`

## 📱 Responsive

Le portfolio est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## ⚡ Performance

- Lazy loading des images
- Code splitting automatique avec Next.js
- Animations optimisées avec CSS
- Minification automatique en production

## 🎯 SEO

- Métadonnées complètes
- Open Graph tags
- Twitter cards
- Sitemap automatique
- Robots.txt

## 📄 Licence

MIT © Gilian CANNIER

## 🤝 Contact

- **Email**: gilian.cannier@example.com
- **GitHub**: [@GilianC](https://github.com/GilianC)
- **LinkedIn**: [Gilian CANNIER](https://linkedin.com)

---

Développé avec ❤️ et Next.js
