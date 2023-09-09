export default {
    title: "Magic Form",
    yourMagicSpeed: "Speed:",
    magicSpeeds: {
        standard: "Standard",
        fast: "Fast",
        superFast: "SuperFast"
    },
    questions: {
        one: {
            intro: "It's nice to e-meet you!",
            question: "Tell us your brand name:"
        },
        two: {
            question1: "Let's check out your website (if you have one):",
            websiteLabel: "Website:",
            question2: "and main social media accounts:",
            socialMediaLabel1: "Social Media:",
            socialMediaLabel2: "Social Media:"
        },
        three: {
            question: "Tell us about your brand or business (There's no wrong answer!).",
            helper: "Feel free to share your brand's mission and vision if you have them:"
        },
        four: {
            question: "What's your main business objective?"
        },
        five: {
            question: "What are your brand colors? Choose up to 5:"
        },
        six: {
            question: "Your brand emojis (Choose up to 5 emojis):"
        },
        seven: {
            question: "Is there a specific topic you'd like us to include this month?"
        },
        eight: {
            question1: "Should we include national holiday posts if applicable?",
            question2: "For which country?"
        },
        nine: {
            question: "Now upload up to 6 photos you'd like us to use.",
            helper: "No pics? No problem! Just choose \"I want graphics\", and you're all set!",
            graphics: "I want graphics"
        },
        ten: {
            question: 'Choose your style.',
            options: [
                {
                    id: 1,
                    name: 'Minimalist'
                },
                {
                    id: 2,
                    name: 'Aesthetic'
                },
                {
                    id: 3,
                    name: 'Business'
                },
                {
                    id: 4,
                    name: 'Surprise me!'
                }
            ]
        },
        eleven: {
            question: "What's a good email to send your calendar link to?"
        }
    },
    cta: "Create My Calendar",

    test: {
        brandName: "Angelus Productions",
        website: "https://www.angelusproductions.com",
        socialMedia1: "https://www.instagram.com/corey.angelus/",
        socialMedia2: "https://www.facebook.com/coreyangelus/",
        description: "Can your developer not seem to make your website look how you envisioned? Does your website look straight out of the 90's on mobile? Or is it just a few too many pixels off from the original design? At my web agency, Angelus Productions, we specialize in giving websites an optimized facelift that looks pretty and makes your brand more money.",
        objective: "Our main business objective is to get new, paying clients and establish our brand as an authority in front-end development.",

        brandColor1: "#ff00c9",
        brandColor2: "#5a00ff",
        brandColor3: "#00ffeb",
        brandColor4: "#ffffff",
        brandColor5: "#000000",

        brandEmoji1: "😇",
        brandEmoji2: "👨‍💻",
        brandEmoji3: "🤓",
        brandEmoji4: "✨",
        brandEmoji5: "😮",

        specificTopics: "We want to talk about innovative best practices when writing React.js, HTML, CSS, little-known front-end development hacks, unusual aspects of the realities of being a front-end developer, and opinionated posts about common beliefs in front-end development.",
        useHolidays: true,
        country: {
            name: "United States of America", 
            code: "US", 
            capital: "Washington, D.C.", 
            region: "Americas", 
            latlng: [38, -97]
        },
        wantsGraphics: true,
        graphics: [],
        styleId: 2,
        email: "angelusproductions@gmail.com"
    }
}