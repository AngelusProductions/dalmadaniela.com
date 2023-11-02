import { bucketPrefix } from "../../../constants/data/assets"

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
            question1: "Let's check out your website",
            question2: "(if you have one):",
        },
        three: {
            question: "And main social media accounts:"
        },
        four: {
            question1: "Tell us about your brand or business",
            question2: "(There's no wrong answer!)",
            question3: "Share your brand's mission and vision if you have them:"
        },
        five: {
            question: "What's your main business objective?"
        },
        six: {
            question: "What are your brand colors? Choose up to five."
        },
        seven: {
            question: "What are your brand emojis? Choose up to five."
        },
        eight: {
            question1: "Is there a specific topic you'd like us to include this month?",
            question2: "Should we include national holiday posts if applicable?",
        },
        nine: {
            question1: "Upload up to six photos or videos you'd like us to use. No pics or vids? No problem!",
            question2: "Choose ",
            question3: "Create From Scratch",
            question4: " and you're all set!",
            createFromScratch: "Create from Scratch",
            upload:  "Click here to upload..."
        },
        ten: {
            question1: 'Choose your style.',
            options: [
                {
                    id: 1,
                    name: 'Minimalistic',
                    url: `${bucketPrefix}/magicCalendars/styles/minimalistic.jpg`
                },
                {
                    id: 2,
                    name: 'Aesthetic',
                    url: `${bucketPrefix}/magicCalendars/styles/aesthetic.jpg`
                },
                {
                    id: 3,
                    name: 'Business',
                    url: `${bucketPrefix}/magicCalendars/styles/business.jpg`
                },
                {
                    id: 4,
                    name: 'Surprise me!',
                    url: `${bucketPrefix}/magicCalendars/styles/surpriseMe.jpg`
                }
            ],
            question2: "Last thing! What's a good email to send your Magic Calendar to?"
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