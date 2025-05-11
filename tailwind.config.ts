
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                azynctra: {
                    DEFAULT: '#1E1E2F',
                    foreground: '#ffffff',
                    primary: '#7E69AB',
                    secondary: '#1EAEDB',
                    accent: '#8B5CF6',
                    muted: '#1A1F2C',
                    border: '#221F26'
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-in-right': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                'glow': {
                    '0%, 100%': {
                        boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)'
                    },
                    '50%': {
                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.7)'
                    }
                },
                'glow-pulse': {
                    '0%, 100%': { 
                        opacity: '0.7',
                        transform: 'scale(1)'
                    },
                    '50%': { 
                        opacity: '1', 
                        transform: 'scale(1.05)'
                    }
                },
                'float': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                    '100%': { transform: 'translateY(0px)' }
                },
                'pulse-blob': {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
                    '50%': { transform: 'scale(1.1)', opacity: '0.5' }
                },
                'drift': {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(5px, 10px)' },
                    '50%': { transform: 'translate(10px, -5px)' },
                    '75%': { transform: 'translate(-5px, -10px)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.8s ease-out forwards',
                'fade-in-delayed': 'fade-in 0.8s ease-out 0.2s forwards',
                'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
                'glow': 'glow 2s ease-in-out infinite',
                'float': 'float 5s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
                'pulse-blob': 'pulse-blob 10s ease-in-out infinite',
                'drift': 'drift 20s ease-in-out infinite'
			},
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': 'url("/pattern-bg.png")',
                'grid-pattern': 'url("/images/grid.svg")'
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
	
} satisfies Config;
