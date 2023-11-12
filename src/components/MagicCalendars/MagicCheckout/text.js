export default {
    title: "Magic Checkout",
    questions: {
        one: {
            label: "Your brand name:",
            error: 'Please enter a valid brand name :)'
        },
        two: {
            label: "Your website:",
            error: 'Please enter a valid URL :)'
        },
        three: {
            label1: 'Your primary social media:',
            label2: 'Your secondary social media:',
            error: 'Please ensure all URLs are valid :)'
        },
        four: {
            label: "About your brand:",
            error: 'Please enter something :)'
        },
        five: {
            label: "Your business objective:",
            error: 'Please enter something :)'
        },
        six: {
            label: "Your brand colors:",
            error: 'Please choose at least one color :)'
        },
        seven: {
            label: "Your brand emojis:",
            error: 'Please choose at least one emoji :)'
        },
        eight: {
            label1: "Specific topics to cover:",
            label2: "Include national holiday posts?",
            label3: "For this country:",
            error: 'Please enter something :)'
        },
        nine: {
            label1: "Should we create your graphics from scratch?",
            label2: "Use these graphics:",
            upload: "Click to upload...",
            error: 'Please upload at least one graphic :)'
        },
        ten: {
            label1: 'Your style:',
            options: [
                {
                    id: 1,
                    name: 'Minimalistic',
                    tooltip: `This style is perfect for businesses that want a sleek and classy look. Think high-end fashion brands, modern tech startups, or luxury real estate agencies.`
                },
                {
                    id: 2,
                    name: 'Aesthetic',
                    tooltip: `This style is all about creativity and looks. It's a great match for content creators, bloggers, art galleries, hip clothing stores, or photography studios.`
                },
                {
                    id: 3,
                    name: 'Business',
                    tooltip: `If your company needs to share info in a pro and organized way, this style is for you. It's great for B2B companies, banks, or consulting firms.`
                },
                {
                    id: 4,
                    name: 'Surprise me!',
                    tooltip: `This style follows what similar brands and creators do on social media, but it also adds something special to make your brand unique!`
                }
            ],
            label2: 'Your email:',
            error: 'Please give us a good email :)'
        }
    },
    cta: "Looks good... let's go!",
    error: "Something's wrong... please review your answers :)"
}