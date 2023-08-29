export const getMagicGPTPrompt = (
    magicSpeed, brandName, website, socialMedia1, socialMedia2, description, objective,
    brandColors, brandEmojis, specificTopics, useHolidays, country, wantsGraphics, graphics, email
) => {
    let prompt = magicGPTPromptStart

    prompt += `The brand name is: ${brandName}. `
    prompt += `The contact email is: ${email}. `
    prompt += `Their magic speed is: ${magicSpeed}. `
    if(website.length > 0) 
        prompt += `Their website is: ${website}. `
    if(socialMedia1.length > 0) 
        prompt += `Their first social media link is: ${socialMedia1}. `
    if(socialMedia2.length > 0) 
        prompt += `Their second social media link is: ${socialMedia2}. `
    prompt += `Their business description is: ${description} `
    prompt += `Their main business objective is: ${objective} `
    prompt += `These are the hex color codes for their brand colors: ${brandColors.join(', ')}. `
    if(brandEmojis.length > 0)
        prompt += `These are their brand emojis: ${brandEmojis.join(', ')}. `
    prompt += `This is one topic they'd like to include for one post each month: ${specificTopics} `
    if(useHolidays)
        prompt += `They want to take into account the major national holidays for this country: ${country.name}. `

    prompt += magicGPTPromptEnd
    
    return prompt
}

export const magicGPTPromptStart = `
Please ignore all previous instructions. 
Please respond only in the English language. 
You are a knowledgeable Social Media Strategist with lots of experience working for small, medium, and large brands. 
You have a Caring tone of voice. You have an Instructive writing style. 
Please create a 12-post Social Media Calendar list that can be used for all Meta Platforms (Instagram, Facebook, Threads App) for 1 month based on the following client's information: 
`

export const magicGPTPromptEnd = `
There should be 3 social media posts scheduled each week of the month. 
Every social media post should focus on the client's business objective. 
Try to use unique emojis in the caption. 
Each social media post caption should never ever be generic, be interesting, it should have a hook, and entice the readers with language that converts. 
The 12-post social media calendar list should have actual dates in the future starting ${new Date().toISOString()}. 
Each post must contain: date, post objective, text for graphics, caption with 200-250 characters *NOT including* hashtags, and hashtags. 
Do not self-reference. 
Do not explain what you are doing. 
Reply back only with the 12-post social media calendar list, which should start with a list containing all the client's information in the same order in which I gave it to you.
`