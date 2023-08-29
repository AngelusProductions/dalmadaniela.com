export const getMagicTimeframe = magicSpeed => ({
    superfast: '4 hours',
    fast: '8 hours',
    standard: '24 hours',
})[magicSpeed]

export const getMagicGPTPrompt = (
    magicSpeed, brandName, website, socialMedia1, socialMedia2, description, objective,
    brandColors, brandEmojis, specificTopics, useHolidays, country, wantsGraphics, graphics
) => {
    let prompt = ''
    const magicTimeframe = getMagicTimeframe(magicSpeed)

    prompt += `I am making a content calendar for this brand name: ${brandName}. `
    prompt += `I need to make it within ${magicTimeframe}. `
    if(website.length > 0) 
        prompt += `This is their website: ${website}. `
    if(socialMedia1.length > 0) 
        prompt += `This is their first social media link: ${socialMedia1}. `
    if(socialMedia2.length > 0) 
        prompt += `This is their second social media link: ${socialMedia2}. `
    prompt += `This is the description of their brand they gave me: ${description}. `
    prompt += `This is their objective: ${objective}. `
    prompt += `These are their brand colors: ${brandColors.join(', ')}. `
    prompt += `These are the emojis that describe their brand: ${brandEmojis.join(', ')}. `
    prompt += `These are the specific topics they want to cover: ${specificTopics}. `
    if(useHolidays)
        prompt += `They want to highlight the holidays for this country: ${country.name}. `
    prompt += `I want to make 6 posts for the next month based upon these parameters. `
    prompt += `Please give me a list of posts with dates, a description of the graphic, captions, and which social media to use based upon trends and maximum reach for their niche.`

    return prompt
}