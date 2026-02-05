// Scenario Generator for Phish-Me-Not Game
// Generates realistic phishing and safe scenarios with educational value

const categories = {
    FUNNY: 'funny',
    SUBTLE: 'subtle',
    SAFE: 'safe'
};

const messageTypes = ['Email', 'SMS', 'WhatsApp'];

// Template scenarios organized by category
const scenarioTemplates = {
    // 30% Dramatic/Funny Phishing
    funny: [
        {
            type: 'Email',
            sender: 'FBI Cyber Division',
            subject: 'URGENT: YOUR COMPUTER HAS BEEN COMPROMISED!!!',
            body: 'Dear User,\n\nTHIS IS THE FBI CYBER CRIMES UNIT. We have detected ILLEGAL ACTIVITIES on your computer!!! 🚨🚨🚨\n\nYou must pay $5000 in iTunes gift cards IMMEDIATELY or you will go to FEDERAL PRISON for 25 YEARS!!!\n\nClick here to avoid ARREST: http://fbi-cyber-totally-real.net/pay-now\n\nThis is VERY SERIOUS!!! DO NOT IGNORE!!!\n\nAgent Johnson (Badge #12345)\nFBI Cyber Division',
            isPhish: true,
            difficulty: 'Easy',
            clues: [
                'FBI would never contact you via email for criminal matters',
                'Excessive use of caps lock and exclamation marks',
                'Requesting payment in iTunes gift cards (major red flag)',
                'Suspicious URL: "fbi-cyber-totally-real.net"',
                'Creating panic and urgency to bypass rational thinking'
            ],
            funnyRebuttal: 'The FBI called. They want their dignity back. 🎭 Pro tip: Federal agencies don\'t accept iTunes gift cards!',
            dramaLevel: 10
        },
        {
            type: 'WhatsApp',
            sender: 'Uncle Rico',
            subject: null,
            body: '🆘🆘🆘 NEPHEW!!! 😭😭😭\n\nI am STUCK in NIGERIA!!! The police took my wallet and passport!! I need $2000 RIGHT NOW or they will put me in AFRICAN JAIL!!! 🚔👮\n\nPlease send Western Union to:\nName: Prince Abdul Rahman\nLocation: Lagos, Nigeria\n\nI will pay you back TRIPLE when I get home I PROMISE!!! 🙏🙏🙏\n\nDON\'T TELL YOUR MOTHER SHE WILL WORRY!!! 😰\n\nYour favorite uncle,\nRico',
            isPhish: true,
            difficulty: 'Easy',
            clues: [
                'Classic "stranded relative" scam',
                'Asking to send money to a different person\'s name',
                'Excessive emojis and drama to manipulate emotions',
                'Requests secrecy ("don\'t tell your mother")',
                'Creates false urgency with jail threat'
            ],
            funnyRebuttal: 'Uncle Rico has been in your basement all week eating Cheetos. Nice try, Prince Abdul! 👑',
            dramaLevel: 9
        },
        {
            type: 'SMS',
            sender: '+1-555-BANK',
            subject: null,
            body: 'ALERT: Your bank account is CRYING 😭😭😭\n\nSomeone is trying to steal all your MONEYS!! 💰\n\nYour balance will be $0.00 in 1 HOUR unless you verify NOW:\n\nhttp://bit.ly/def-not-scam\n\nWe are VERY SCARED for your account!! 😱\n\n- Your Bank (the real one)',
            isPhish: true,
            difficulty: 'Easy',
            clues: [
                'Banks don\'t use emotional language like "crying" or "scared"',
                'Shortened URL (bit.ly) hides the real destination',
                'Excessive emojis in professional correspondence',
                'Creates false 1-hour deadline',
                'Suspicious sender number format'
            ],
            funnyRebuttal: 'My bank account isn\'t crying, but I am... from laughing! 😂 Banks don\'t have feelings, scammers!',
            dramaLevel: 8
        },
        {
            type: 'Email',
            sender: 'Amazon Customer Service',
            subject: 'YOUR PACKAGE IS BEING HELD HOSTAGE!!!',
            body: 'Dear Valued Customer,\n\nYour package (#AMZ-123-FAKE) is being held at our warehouse because the delivery driver ATE YOUR ADDRESS LABEL!!! 🍕\n\nTo release your package from captivity, please pay a $3.50 "label replacement fee" immediately:\n\nPayment Link: www.amazon-totally-legit.biz/pay\n\nIf you don\'t pay within 24 hours, we will donate your package to CHARITY!!! 📦➡️🎁\n\nBest regards,\nJeff (definitely the real CEO)',
            isPhish: true,
            difficulty: 'Medium',
            clues: [
                'Absurd story (driver ate the label)',
                'Suspicious domain: "amazon-totally-legit.biz"',
                'Amazon wouldn\'t threaten to donate your package',
                'Small fee ($3.50) to seem believable',
                'Unprofessional tone for a major company'
            ],
            funnyRebuttal: 'That driver must have been REALLY hungry! 🍽️ Real Amazon emails don\'t come from .biz domains!',
            dramaLevel: 7
        },
        {
            type: 'Email',
            sender: 'Microsoft Support Team',
            subject: 'Your Computer Has 18,742 Viruses!!!',
            body: 'CRITICAL SECURITY ALERT\n\nDear Windows User,\n\nOur advanced AI detected exactly 18,742 viruses on your computer right now!!! Your files are in EXTREME DANGER!!! ⚠️⚠️⚠️\n\nViruses found:\n- Trojan.BadStuff.exe\n- Virus.VeryBad.dll  \n- Malware.SoScary.bat\n- UltraMegaVirus.ohno\n\nCall our toll-free support IMMEDIATELY: 1-800-NOT-SCAM\n\nOur technicians will remote into your computer and fix everything for only $299.99!\n\nDO NOT TURN OFF YOUR COMPUTER OR ALL YOUR PHOTOS WILL BE DELETED!!!\n\nMicrosoft Certified Support\n(Definitely Real)',
            isPhish: true,
            difficulty: 'Easy',
            clues: [
                'Microsoft doesn\'t monitor individual computers',
                'Absurdly specific virus count (18,742)',
                'Fake file names designed to scare',
                'Pressure to call a phone number immediately',
                'Tech support scam asking for payment',
                'Threats about turning off computer'
            ],
            funnyRebuttal: 'They counted all 18,742 viruses by hand! 🧮 Real Microsoft doesn\'t cold-email about viruses!',
            dramaLevel: 9
        }
    ],

    // 40% Subtle Phishing
    subtle: [
        {
            type: 'Email',
            sender: 'Microsoft Security Team',
            subject: 'Unusual sign-in activity detected',
            body: 'Hello,\n\nWe detected an unusual sign-in attempt to your Microsoft account from an unrecognized device in Lagos, Nigeria.\n\nDevice: Windows 10 PC\nIP Address: 197.211.58.102\nDate: February 5, 2026 at 2:15 AM\n\nIf this was you, you can safely ignore this message. If not, please secure your account immediately by clicking the link below:\n\nhttps://account-security.mircosoft.com/verify\n\nThis link will expire in 24 hours.\n\nThank you,\nMicrosoft Account Security Team',
            isPhish: true,
            difficulty: 'Medium',
            clues: [
                'Domain misspelling: "mircosoft.com" instead of "microsoft.com"',
                'Creates urgency with 24-hour expiration',
                'Includes legitimate-looking details (IP, location) to build trust',
                'Asks user to click a link instead of directing to official site'
            ],
            funnyRebuttal: 'Nice try, "Mircosoft"! Even spell-check wouldn\'t fall for that one. 🎯',
            dramaLevel: 4
        },
        {
            type: 'Email',
            sender: 'PayPal Support',
            subject: 'Action Required: Verify Your Account',
            body: 'Dear PayPal User,\n\nWe have temporarily limited your account due to unusual activity. To restore full access, please verify your identity.\n\nAccount Status: Limited\nReason: Security Check\nAction Required: Verify Now\n\nClick here to verify: https://www.paypa1.com/verify\n\nIf you do not verify within 48 hours, your account will be permanently suspended.\n\nRegards,\nPayPal Security Department',
            isPhish: true,
            difficulty: 'Medium',
            clues: [
                'Domain uses number "1" instead of letter "L": "paypa1.com"',
                'Generic greeting ("Dear PayPal User") instead of your name',
                'Threat of permanent suspension creates pressure',
                'Legitimate PayPal asks you to log in directly, not click email links'
            ],
            funnyRebuttal: 'Paypa-ONE? More like Paypa-DONE! 🔢 That\'s a number 1, not a letter L!',
            dramaLevel: 5
        },
        {
            type: 'Email',
            sender: 'HR Department',
            subject: 'Important: Update Your Direct Deposit Information',
            body: 'Hello Team,\n\nWe are upgrading our payroll system and need all employees to re-enter their direct deposit information by Friday.\n\nPlease use the secure portal below to update your banking details:\n\nhttps://employeeportal-secure.com/payroll/update\n\nYour current information will be deleted from the old system on Friday at 5 PM.\n\nThank you for your cooperation,\nHuman Resources',
            isPhish: true,
            difficulty: 'Expert',
            clues: [
                'Requests sensitive banking information via email link',
                'Generic sender ("HR Department") without specific name',
                'External domain instead of company domain',
                'Creates deadline pressure (Friday)',
                'Legitimate HR would use internal systems for payroll changes'
            ],
            funnyRebuttal: 'Your real HR dept just facepalmed. 🤦 Banking info goes through official portals, not random links!',
            dramaLevel: 3
        },
        {
            type: 'SMS',
            sender: 'Netflix',
            subject: null,
            body: 'Your Netflix subscription has expired. Update your payment method to avoid service interruption:\n\nhttp://netflix-billing.net/update\n\nNetflix Team',
            isPhish: true,
            difficulty: 'Medium',
            clues: [
                'Wrong domain: "netflix-billing.net" (real is netflix.com)',
                'Netflix sends emails, not SMS, for billing issues',
                'Shortened urgent timeline',
                'No account-specific details'
            ],
            funnyRebuttal: 'Netflix would never slide into your texts like this! 📱 Check the domain, detective!',
            dramaLevel: 4
        },
        {
            type: 'WhatsApp',
            sender: 'Your Boss',
            subject: null,
            body: 'Hey, I need you to do me a quick favor. I\'m in a meeting and can\'t access my email.\n\nCan you purchase 5 x $100 Amazon gift cards and send me the codes? I need them for client gifts.\n\nI\'ll reimburse you tomorrow. Just send the codes here.\n\nThanks!',
            isPhish: true,
            difficulty: 'Expert',
            clues: [
                'Boss impersonation scam (verify sender\'s actual number)',
                'Requesting gift cards (major red flag)',
                'Creates urgency ("I\'m in a meeting")',
                'Asks for codes via messaging app',
                'Real business purchases go through proper procurement channels'
            ],
            funnyRebuttal: 'Your boss just asked me in person and has no idea what you\'re talking about. 🕵️ Always verify!',
            dramaLevel: 6
        },
        {
            type: 'Email',
            sender: 'Apple Support',
            subject: 'Your Apple ID has been locked',
            body: 'Dear Customer,\n\nYour Apple ID was locked for security reasons. We detected suspicious activity and need you to verify your account.\n\nApple ID: (your email)\nStatus: Locked\nReason: Suspicious login attempt\n\nVerify your account here:\nhttps://appleid.apple.com-verify.net/unlock\n\nIf you don\'t verify within 12 hours, your Apple ID will be permanently disabled.\n\nApple Security',
            isPhish: true,
            difficulty: 'Medium',
            clues: [
                'Domain is suspicious: "apple.com-verify.net" (real is appleid.apple.com)',
                'Generic greeting instead of your name',
                '12-hour deadline creates pressure',
                'Real Apple uses different communication methods'
            ],
            funnyRebuttal: 'Apple.com-verify.net? More like apple-NOT! 🍎 The real domain is appleid.apple.com!',
            dramaLevel: 5
        }
    ],

    // 30% Safe/Legitimate Messages
    safe: [
        {
            type: 'Email',
            sender: 'GitHub',
            subject: 'Your password was successfully changed',
            body: 'Hi there,\n\nThis email confirms that the password for your GitHub account was successfully changed.\n\nChange made: February 5, 2026 at 2:18 PM (UTC)\nIP address: 203.0.113.42\nLocation: New Delhi, India\n\nIf you did not make this change, please visit https://github.com/settings/security to secure your account.\n\nBest,\nThe GitHub Team',
            isPhish: false,
            difficulty: 'Easy',
            clues: [
                'Confirmation email (no action required)',
                'Official GitHub domain would be used',
                'Provides specific details (timestamp, IP, location)',
                'Only asks you to visit GitHub IF you didn\'t make the change',
                'Professional tone and formatting'
            ],
            funnyRebuttal: 'Correct! This is a legitimate security notification. Stay vigilant! ✅',
            dramaLevel: 1
        },
        {
            type: 'SMS',
            sender: 'Amazon',
            subject: null,
            body: 'Your package #123-4567890-1234567 will arrive today by 9 PM. Track it here: https://amazon.com/track',
            isPhish: false,
            difficulty: 'Easy',
            clues: [
                'Simple delivery notification',
                'Official Amazon domain (amazon.com)',
                'Valid tracking number format',
                'No request for payment or personal information',
                'Standard delivery notification messaging'
            ],
            funnyRebuttal: 'Spot on! Just a boring old delivery notification. Nothing fishy here! 📦',
            dramaLevel: 1
        },
        {
            type: 'Email',
            sender: 'LinkedIn',
            subject: 'You appeared in 42 searches this week',
            body: 'Hi,\n\nYour profile appeared in 42 searches this week. See who\'s viewing your profile and discover new opportunities.\n\nTop searches:\n- Software Engineer positions in San Francisco\n- Senior Developer roles\n- Full Stack developers\n\nUpgrade to Premium to see who viewed your profile.\n\nBest,\nThe LinkedIn Team\n\nUpdate your settings: https://www.linkedin.com/settings',
            isPhish: false,
            difficulty: 'Easy',
            clues: [
                'Standard LinkedIn weekly digest',
                'Official LinkedIn domain',
                'Promotional content (Premium upsell) is normal for LinkedIn',
                'Settings link goes to legitimate domain',
                'No urgent action required'
            ],
            funnyRebuttal: 'Nailed it! Just LinkedIn trying to sell you Premium... as usual. 💼',
            dramaLevel: 2
        },
        {
            type: 'WhatsApp',
            sender: 'Mom',
            subject: null,
            body: 'Hi honey! Just wanted to check if you\'re coming for dinner on Sunday. Let me know what time works for you. Love you! ❤️',
            isPhish: false,
            difficulty: 'Easy',
            clues: [
                'Personal message from a known contact',
                'Natural, conversational tone',
                'No requests for money or sensitive information',
                'No suspicious links',
                'Typical family communication'
            ],
            funnyRebuttal: 'Correct! Mom just wants to feed you. Accept the invitation! 🍽️❤️',
            dramaLevel: 1
        },
        {
            type: 'Email',
            sender: 'Google Calendar',
            subject: 'Reminder: Team Meeting in 15 minutes',
            body: 'Team Meeting\n\nWhen: Today at 3:00 PM - 4:00 PM (India Standard Time)\nWhere: Conference Room B / Zoom\n\nJoining info:\nhttps://zoom.us/j/1234567890\n\nAttendees:\n- You\n- Sarah Chen\n- Mike Rodriguez\n- Dr. Patel\n\nAgenda attached.\n\nGoing? Yes - No - Maybe\nhttps://calendar.google.com/calendar/event\n\nGoogle Calendar',
            isPhish: false,
            difficulty: 'Easy',
            clues: [
                'Standard Google Calendar reminder',
                'Official Google domain',
                'Contains expected meeting details',
                'Legitimate Zoom link format',
                'RSVP links point to google.com'
            ],
            funnyRebuttal: 'You got it! Better join that meeting or your boss will be sad. 📅',
            dramaLevel: 1
        },
        {
            type: 'Email',
            sender: 'Spotify',
            subject: 'Your Spotify Wrapped 2025 is here!',
            body: 'Your year in music is ready!\n\nYou listened to 52,483 minutes of music this year. That\'s 875 hours of pure audio joy!\n\nTop Artist: The Weeknd\nTop Song: "Blinding Lights"\nTop Genre: Pop\n\nCheck out your full Wrapped story:\nhttps://spotify.com/wrapped\n\nShare your Wrapped with friends!\n\nThanks for listening,\nSpotify',
            isPhish: false,
            difficulty: 'Easy',
            clues: [
                'Annual Spotify Wrapped campaign (real event)',
                'Official Spotify domain',
                'Personalized statistics (normal for Wrapped)',
                'No requests for payment or personal info',
                'Promotional content to encourage sharing'
            ],
            funnyRebuttal: 'Correct! Time to humble-brag about your music taste on social media! 🎵',
            dramaLevel: 2
        }
    ]
};

// Generate a random UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Get a random scenario based on distribution percentages
export function generateScenario() {
    const rand = Math.random();
    let category;

    // 30% funny, 40% subtle, 30% safe
    if (rand < 0.30) {
        category = categories.FUNNY;
    } else if (rand < 0.70) {  // 0.30 + 0.40
        category = categories.SUBTLE;
    } else {
        category = categories.SAFE;
    }

    const templates = scenarioTemplates[category];
    const template = templates[Math.floor(Math.random() * templates.length)];

    return {
        ...template,
        id: generateUUID()
    };
}

// Generate multiple scenarios at once
export function generateScenarios(count = 10) {
    const scenarios = [];
    for (let i = 0; i < count; i++) {
        scenarios.push(generateScenario());
    }
    return scenarios;
}
