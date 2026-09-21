/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // ==========================================
        // GLOBAL
        // ==========================================
        "global-black": "#000000",
        "global-white": "#FFFFFF",
        "global-ink": "#1E1E1E",
        "global-text": "#242424",
        "global-text-muted": "#606060",
        "global-text-secondary": "#828282",
        "global-gray": "#8F8F8F",
        "global-gray-light": "#A0A0A0",
        "global-gray-lighter": "#C4C4C4",
        "global-gray-soft": "#D9D9D9",
        "global-gray-border": "#E7E7E7",
        "global-gray-line": "#F1F1F1",

        // ==========================================
        // DESIGN PALETTE
        // ==========================================
        "palette-yellow": "#FFF740",
        "palette-cyan": "#83E7FF",
        "palette-blue": "#006EE9",
        "palette-lime": "#D0FFA4",

        // ==========================================
        // NAVBAR
        // ==========================================
        "navbar-background": "#8CCBFD",
        "navbar-text": "#000000",
        "navbar-text-active": "#006FCD",
        "navbar-border": "#000000",

        // ==========================================
        // FOOTER
        // ==========================================
        "footer-background": "#1E1E1E",
        "footer-text": "#FFFFFF",
        "footer-text-muted": "#A0A0A0",
        "footer-border": "#595959",

        // ==========================================
        // HERO / BANNER
        // ==========================================
        "hero-background": "#8CCBFD",
        "hero-text": "#000000",
        "hero-title": "#006FCD",
        "hero-border": "#000000",

        "banner-background": "#8CCBFD",
        "banner-text": "#000000",
        "banner-accent": "#006FCD",

        // ==========================================
        // BUTTON
        // ==========================================
        "button-primary": "#EF542B",
        "button-primary-text": "#FFFFFF",
        "button-primary-border": "#000000",

        "button-secondary": "#FFFFFF",
        "button-secondary-text": "#000000",
        "button-secondary-border": "#000000",

        "button-blue": "#006FCD",
        "button-blue-text": "#FFFFFF",
        "button-blue-border": "#000000",

        "button-yellow": "#E5D43C",
        "button-yellow-text": "#000000",
        "button-yellow-border": "#E5A73C",

        "button-disabled": "#D9D9D9",
        "button-disabled-text": "#828282",

        // ==========================================
        // WINDOW PANEL
        // ==========================================
        "window-panel-background": "#FFFFFF",
        "window-panel-border": "#000000",
        "window-panel-header": "#8CCBFD",
        "window-panel-text": "#000000",

        // ==========================================
        // WINDOW TAB
        // ==========================================
        "window-tab-background": "#FFFFFF",
        "window-tab-active": "#8CCBFD",
        "window-tab-text": "#000000",
        "window-tab-border": "#000000",

        // ==========================================
        // PIXEL BORDER
        // ==========================================
        "pixel-border-black": "#000000",
        "pixel-border-white": "#FFFFFF",
        "pixel-border-gray": "#C4C4C4",
        "pixel-border-blue": "#006FCD",

        // ==========================================
        // DS CORNER
        // ==========================================
        "ds-corner-black": "#000000",
        "ds-corner-white": "#FFFFFF",
        "ds-corner-blue": "#8CCBFD",

        // ==========================================
        // CONSOLE CARD
        // ==========================================
        "console-card-background": "#FFFFFF",
        "console-card-border": "#000000",
        "console-card-title": "#000000",
        "console-card-text": "#606060",
        "console-card-accent": "#8CCBFD",

        // ==========================================
        // CONSOLE DETAIL
        // ==========================================
        "console-detail-background": "#FFFFFF",
        "console-detail-border": "#000000",
        "console-detail-title": "#000000",
        "console-detail-text": "#606060",

        // ==========================================
        // CONSOLE / PLATFORM STATUS
        // ==========================================
        "console-status-playstation": "#1F53A2",
        "console-status-xbox": "#107C10",
        "console-status-nintendo": "#E90004",

        // ==========================================
        // FOLDER
        // ==========================================
        "folder-background": "#E5D43C",
        "folder-border": "#000000",
        "folder-text": "#000000",

        // ==========================================
        // CONSOLE SPEC
        // ==========================================
        "console-spec-background": "#F1F1F1",
        "console-spec-border": "#C4C4C4",
        "console-spec-label": "#606060",
        "console-spec-value": "#000000",

        // ==========================================
        // MODEL PHOTO / CRT
        // ==========================================
        "model-photo-background": "#000000",
        "model-photo-border": "#000000",

        "crt-background": "#1E1E1E",
        "crt-screen": "#000000",
        "crt-text": "#FFFFFF",
        "crt-border": "#595959",

        // ==========================================
        // PROMO
        // ==========================================
        "promo-panduan-background": "#FFFAC8",
        "promo-panduan-border": "#F8D886",
        "promo-panduan-text": "#000000",

        "promo-forum-background": "#EDF3FF",
        "promo-forum-border": "#BCD3FF",
        "promo-forum-text": "#000000",

        "promo-teknisi-background": "#F2FFED",
        "promo-teknisi-border": "#CFF2D2",
        "promo-teknisi-text": "#000000",

        // ==========================================
        // ACCORDION
        // ==========================================
        "accordion-background": "#F2FFED",
        "accordion-header": "#CFF2D2",
        "accordion-border": "#2E7D32",
        "accordion-text": "#000000",

        // ==========================================
        // FORUM
        // ==========================================
        "forum-background": "#FFFFFF",
        "forum-border": "#000000",
        "forum-title": "#000000",
        "forum-text": "#606060",
        "forum-muted": "#828282",

        // ==========================================
        // FORUM TAGS
        // ==========================================
        "forum-tag-background": "#EDF3FF",
        "forum-tag-text": "#1F53A2",
        "forum-tag-border": "#BCD3FF",

        // ==========================================
        // TUTORIAL CARD
        // ==========================================
        "tutorial-card-background": "#FFFFFF",
        "tutorial-card-border": "#000000",
        "tutorial-card-title": "#000000",
        "tutorial-card-text": "#606060",

        // ==========================================
        // TUTORIAL
        // ==========================================
        "tutorial-background": "#FFFFFF",
        "tutorial-border": "#000000",
        "tutorial-text": "#000000",
        "tutorial-muted": "#828282",

        // Tutorial time / information
        "tutorial-info-background": "#FFFAC8",
        "tutorial-info-border": "#F8D886",
        "tutorial-info-text": "#000000",

        // ==========================================
        // COMMENT
        // ==========================================
        "comment-background": "#FFFFFF",
        "comment-border": "#D9D9D9",
        "comment-text": "#000000",
        "comment-muted": "#828282",

        // ==========================================
        // PROFILE
        // ==========================================
        "profile-background": "#FFFFFF",
        "profile-border": "#000000",
        "profile-text": "#000000",
        "profile-muted": "#606060",
        "profile-avatar-background": "#8CCBFD",

        // ==========================================
        // AUTH
        // ==========================================
        "auth-background": "#8CCBFD",
        "auth-card-background": "#FFFFFF",
        "auth-card-border": "#000000",
        "auth-title": "#000000",
        "auth-text": "#606060",
        "auth-input-background": "#FFFFFF",
        "auth-input-border": "#000000",
        "auth-input-text": "#000000",
        "auth-input-placeholder": "#8F8F8F",

        // ==========================================
        // TECHNICIAN
        // ==========================================
        "technician-background": "#FFFFFF",
        "technician-border": "#000000",
        "technician-title": "#000000",
        "technician-text": "#606060",
        "technician-accent": "#8CCBFD",

        // ==========================================
        // SHOP
        // ==========================================
        "shop-background": "#FFFFFF",
        "shop-border": "#000000",
        "shop-title": "#000000",
        "shop-text": "#606060",

        // ==========================================
        // LISTING
        // ==========================================
        "listing-background": "#FFFFFF",
        "listing-border": "#000000",
        "listing-title": "#000000",
        "listing-text": "#606060",
        "listing-price": "#006FCD",

        // ==========================================
        // TRANSACTION
        // ==========================================
        "transaction-background": "#FFFFFF",
        "transaction-border": "#000000",
        "transaction-title": "#000000",
        "transaction-text": "#606060",

        // ==========================================
        // DATA TABLE
        // ==========================================
        "data-table-background": "#FFFFFF",
        "data-table-header": "#8CCBFD",
        "data-table-border": "#D9D9D9",
        "data-table-text": "#000000",
        "data-table-muted": "#606060",
        "data-table-row-hover": "#F1F1F1",

        // ==========================================
        // FILTER
        // ==========================================
        "filter-background": "#FFFFFF",
        "filter-border": "#000000",
        "filter-text": "#000000",
        "filter-placeholder": "#8F8F8F",

        // ==========================================
        // PAGINATION
        // ==========================================
        "pagination-background": "#FFFFFF",
        "pagination-active": "#8CCBFD",
        "pagination-border": "#000000",
        "pagination-text": "#000000",
        "pagination-disabled": "#D9D9D9",

        // ==========================================
        // STATUS — SUCCESS
        // ==========================================
        "status-success-background": "#CFF2D2",
        "status-success-text": "#2E7D32",
        "status-success-border": "#2E7D32",
        "status-success-solid": "#107C10",

        // ==========================================
        // STATUS — WARNING
        // ==========================================
        "status-warning-background": "#FFFAC8",
        "status-warning-text": "#F57C00",
        "status-warning-border": "#F8D886",
        "status-warning-solid": "#F57F17",

        // ==========================================
        // STATUS — ERROR
        // ==========================================
        "status-error-background": "#FFE6E6",
        "status-error-text": "#DF1C1C",
        "status-error-border": "#DF1C1C",
        "status-error-solid": "#E90004",

        // ==========================================
        // STATUS — INFO
        // ==========================================
        "status-info-background": "#EDF3FF",
        "status-info-text": "#1F53A2",
        "status-info-border": "#BCD3FF",
        "status-info-solid": "#006EE9",

        // ==========================================
        // STATUS — NEUTRAL
        // ==========================================
        "status-neutral-background": "#F1F1F1",
        "status-neutral-text": "#606060",
        "status-neutral-border": "#C4C4C4",

        // ==========================================
        // DIFFICULTY
        // ==========================================
        "difficulty-easy-background": "#CFF2D2",
        "difficulty-easy-text": "#2E7D32",
        "difficulty-easy-border": "#2E7D32",

        "difficulty-medium-background": "#FFFAC8",
        "difficulty-medium-text": "#F57C00",
        "difficulty-medium-border": "#F8D886",

        "difficulty-hard-background": "#FFE6E6",
        "difficulty-hard-text": "#DF1C1C",
        "difficulty-hard-border": "#DF1C1C",

        // ==========================================
        // ADDITIONAL FIGMA COLORS
        // ==========================================
        "accent-orange": "#EF542B",
        "accent-red": "#E90004",
        "accent-green": "#2E7D32",
        "accent-blue": "#006FCD",
        "accent-light-blue": "#8CCBFD",
        "accent-yellow": "#E5D43C",
        "accent-gold": "#E5A73C",

        "surface-white": "#FFFFFF",
        "surface-light": "#F8F8F8",
        "surface-gray": "#F1F1F1",
        "surface-dark": "#1E1E1E",

        "text-black": "#000000",
        "text-primary": "#242424",
        "text-secondary": "#606060",
        "text-muted": "#828282",

        "border-black": "#000000",
        "border-dark": "#595959",
        "border-gray": "#C4C4C4",
        "border-light": "#E7E7E7",
      },
    },
  },

  plugins: [],
};