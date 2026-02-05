# 🎣 Phish-Me-Not

A Next.js cybersecurity game that teaches users to identify phishing attempts through interactive scenarios with humor and education.

## 🎮 Game Features

- **17 Realistic Scenarios** across Email, SMS, and WhatsApp formats
- **3 Difficulty Levels**: Easy, Medium, Expert
- **Smart Distribution**: 30% dramatic/funny, 40% subtle, 30% legitimate messages
- **Educational Feedback**: Learn red flags and security best practices
- **Score Tracking**: Track your accuracy and streak
- **Premium Dark UI**: Cybersecurity-themed interface with glassmorphism effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed on your system

### Installation

1. Navigate to the project directory:
```bash
cd c:\Users\user\Downloads\game1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎯 How to Play

1. Read the message displayed (Email, SMS, or WhatsApp)
2. Decide if it's a phishing attempt or legitimate
3. Click **"It's a Phish!"** or **"It's Safe"**
4. Review the educational feedback and clues
5. Click **"Next Round"** to continue

## 📁 Project Structure

```
game1/
├── app/
│   ├── layout.js          # Root layout with fonts
│   ├── page.js             # Main game logic
│   ├── page.module.css     # Page styles
│   └── globals.css         # Global design system
├── components/
│   ├── MessageDisplay.js   # Scenario renderer
│   ├── GameControls.js     # Phish/Safe buttons
│   ├── FeedbackPanel.js    # Results & education
│   └── ScoreBoard.js       # Score tracking
├── lib/
│   └── scenarioGenerator.js # Scenario data & logic
└── package.json
```

## 🎨 Design Highlights

- Dark mode cybersecurity theme with matrix-green accents
- Glassmorphism effects for premium feel
- Smooth micro-animations and transitions
- Responsive layout for all devices
- Distinct styling for each message type

## 📚 Scenario Categories

### Funny/Dramatic Phishing (30%)
- FBI demanding iTunes gift cards
- Uncle stuck in Nigeria
- Bank account "crying"
- Computer with 18,742 viruses

### Subtle Phishing (40%)
- Misspelled domains (mircosoft.com, paypa1.com)
- HR payroll scams
- Boss impersonation
- Account verification tricks

### Legitimate Messages (30%)
- GitHub password confirmations
- Package delivery notifications
- Calendar reminders
- Spotify Wrapped

## 🛡️ Educational Value

Each scenario teaches:
- Red flags to watch for
- Domain verification techniques
- Social engineering tactics
- Professional communication standards
- Security best practices

## 🔧 Technologies

- **Next.js 15+** - React framework
- **React 18+** - UI library
- **Vanilla CSS** - Styling with CSS modules
- **Client-side rendering** - No backend required

## 📝 License

Free to use for educational purposes.

---

**Stay vigilant! Real organizations rarely ask for sensitive info via email. 🔒**
