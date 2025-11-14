const getFortune = () => {

    const id = Math.floor(Math.random() * 10) + 1
    const messages = [
    "You will step on a lego.",
    "That XP farm will be finished... eventually.",
    "You will give Ethan an A in this class.",
    "Ethan will show up on time next class (spin again).",
    "There is an error... Ask Reed to fix it",
    "You will recieve a fortune if you run this again.",
    "You will fail to prove you are human on your next captcha... it will take 30 minutes to resolve.",
    "The sun will rise after 7 AM tomorrow morning if you grade this after 11/24/25.",
    "The sun will set before 5 PM tonight if you grade this before 1/29/26.",
    "You will save big money at Menards."
    ]

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    return randomMessage
}

module.exports = getFortune