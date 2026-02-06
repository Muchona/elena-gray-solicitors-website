# Design System: Gray Solicitors ("The Obsidian Archive")

## 🎨 Color Palette
| Token | Hex/Tailwind | Usage |
| :--- | :--- | :--- |
| **Foundation** | `slate-950` (#020617) | Global background |
| **Surface** | `slate-900/60` | Glassmorphic card surfaces |
| **Primary** | `amber-400` (#fbbf24) | Gold accents (Logo, Borders) |
| **Secondary** | `teal-500` (#14b8a6) | Hero background accents, connectivity lines |
| **Naval** | `indigo-950` (#1e1b4b)| Deep navy secondary backgrounds |
| **Text-Prime**| `slate-50` (#f8fafc) | Primary headings |
| **Text-Mute** | `slate-400` (#94a3b8) | Body text, descriptions |

## Typography
- **Heading**: `Outfit` (or `Inter`) - Weight: 700/800. Tracking: -0.05em.
- **Body**: `Inter` - Weight: 400. Line-height: 1.6.
- **Monospace**: `JetBrains Mono` - Used for "System Status" and technical labels.

## 💎 Visual Elements
- **Glassmorphism**: 
  - `backdrop-blur-md`
  - `bg-white/5`
  - `border-white/10`
- **Gradients**:
  - Hero: `from-emerald-400 to-cyan-400` (text-clip).
  - Ambient: Large, low-opacity radial gradients in the background.

## 🎞️ Motion Guidelines
- **Page Transitions**: Smooth vertical slides via GSAP ScrollTrigger.
- **Micro-interactions**: Scale-up (105%) on hover for cards with subtle border glow.
- **3D Interaction**: Agent B to implement a `Canvas` with an interactive centerpiece (Balance Scale/Architectural Sculpture).

## 🛠️ Components
### Glass Card
- Rounded: `2xl`
- Border: `1px solid rgba(255,255,255,0.1)`
- Interaction: Shadow-halo glow on focus.

### "Action" Button
- Style: Solid or Ghost with `emerald-500` border.
- Hover: Fill transition with `cyan-400` shimmer.
