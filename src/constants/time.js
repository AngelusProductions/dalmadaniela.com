export const getHumanizedDuration = ms => {
    let humanizedTime = ''

    const hours = Math.floor(ms / 1000 / 60 / 60);
    const minutes = Math.floor(ms / 1000 / 60) % 60;
    const seconds = Math.floor(ms / 1000) % 60;

    if(hours > 0) {
        humanizedTime += `${hours} hours, `
    }
    if(minutes > 0) {
        humanizedTime += `${minutes} minutes, `
    }
    humanizedTime += `${seconds} seconds`

    return humanizedTime
}