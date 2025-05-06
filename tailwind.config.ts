import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "petrol-green": "hsl(var(--primary-petrol-green))",
          "mystic-green-dark": "hsl(var(--primary-mystic-green-dark))",
          "mystic-green-light": "hsl(var(--primary-mystic-green-light))",
          "military-green": "hsl(var(--primary-military-green))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          "mint-green": "hsl(var(--secondary-mint-green))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral-dark-gray))",
          "medium-gray": "hsl(var(--neutral-medium-gray))",
          "light-gray": "hsl(var(--neutral-light-gray))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    fontSize: {
      PAGE_HEADER: [
        "60px",
        {
          lineHeight: "84px",
          fontWeight: "700",
        },
      ],
      H: [
        "32px",
        {
          lineHeight: "44.8px",
          fontWeight: "600",
        },
      ],
      H1: [
        "64px",
        {
          lineHeight: "76.8px",
          fontWeight: "600",
        },
      ],
      H2: [
        "40px",
        {
          lineHeight: "48px",
          fontWeight: "600",
        },
      ],
      H3: [
        "32px",
        {
          lineHeight: "38.88px",
          fontWeight: "600",
        },
      ],
      H4: [
        "18px",
        {
          lineHeight: "25.2px",
          fontWeight: "600",
        },
      ],
      H5: [
        "16px",
        {
          lineHeight: "22.4px",
          fontWeight: "600",
        },
      ],
      "base/regular": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      "body1/regular": [
        "24px",
        {
          lineHeight: "31.2px",
          fontWeight: "400",
        },
      ],
      "body1/medium": [
        "24px",
        {
          lineHeight: "31.2px",
          fontWeight: "500",
        },
      ],
      "body1/bold": [
        "24px",
        {
          lineHeight: "31.2px",
          fontWeight: "600",
        },
      ],
      "body2/regular": [
        "18px",
        {
          lineHeight: "23.4px",
          fontWeight: "400",
        },
      ],
      "body2/medium": [
        "18px",
        {
          lineHeight: "23.4px",
          fontWeight: "500",
        },
      ],
      "body2/bold": [
        "18px",
        {
          lineHeight: "23.4px",
          fontWeight: "600",
        },
      ],
      "body3/regular": [
        "16px",
        {
          lineHeight: "20.8px",
          fontWeight: "400",
        },
      ],
      "body3/medium": [
        "16px",
        {
          lineHeight: "20.8px",
          fontWeight: "500",
        },
      ],
      "body3/bold": [
        "16px",
        {
          lineHeight: "20.8px",
          fontWeight: "600",
        },
      ],
      "body4/regular": [
        "14px",
        {
          lineHeight: "18.2px",
          fontWeight: "400",
        },
      ],
      "body4/medium": [
        "14px",
        {
          lineHeight: "18.2px",
          fontWeight: "500",
        },
      ],
      "body4/bold": [
        "14px",
        {
          lineHeight: "18.2px",
          fontWeight: "600",
        },
      ],
      "body5/regular": [
        "12px",
        {
          lineHeight: "14.2px",
          fontWeight: "400",
        },
      ],
      "body5/medium": [
        "12px",
        {
          lineHeight: "14.2px",
          fontWeight: "500",
        },
      ],
      "body5/bold": [
        "12px",
        {
          lineHeight: "14.2px",
          fontWeight: "600",
        },
      ],
      "label/regular": [
        "10px",
        {
          lineHeight: "14.5px",
          fontWeight: "400",
        },
      ],
      "label/medium": [
        "10px",
        {
          lineHeight: "14.5px",
          fontWeight: "500",
        },
      ],
      "label/bold": [
        "10px",
        {
          lineHeight: "14.5px",
          fontWeight: "600",
        },
      ],
      button1: [
        "16px",
        {
          lineHeight: "20.8px",
          fontWeight: "400",
        },
      ],
      "button1-bold": [
        "16px",
        {
          lineHeight: "20.8px",
          fontWeight: "600",
        },
      ],
      button2: [
        "14px",
        {
          lineHeight: "18.2px",
          fontWeight: "400",
        },
      ],
      "button2-bold": [
        "14px",
        {
          lineHeight: "18.2px",
          fontWeight: "600",
        },
      ],
      button3: [
        "10px",
        {
          lineHeight: "14.5px",
          fontWeight: "400",
        },
      ],
      "button3-bold": [
        "10px",
        {
          lineHeight: "14.5px",
          fontWeight: "600",
        },
      ],
      "link1/regular": [
        "16px",
        {
          lineHeight: "20.8px",
          fontWeight: "400",
        },
      ],
      "link1/medium": [
        "16px",
        {
          lineHeight: "20.8px",
          fontWeight: "500",
        },
      ],
      "link2/regular": [
        "14px",
        {
          lineHeight: "18.2px",
          fontWeight: "400",
        },
      ],
      "link2/medium": [
        "14px",
        {
          lineHeight: "18.2px",
          fontWeight: "500",
        },
      ],
    },
  },
} satisfies Config;
