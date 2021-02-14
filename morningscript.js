const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id ===textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}



const textNodes = [
    {
        id: 1,
        text: "Welcome to the world of pain, brother. Naked.",
        options: [
            {
                text: "Try to look around",
                setState: { naked: true },
                nextText: 2
            },
            {
                text: "Go back to sleep",
                setState: { naked : true },
                nextText: 3
            },
            {
                text: "Find something to wear",
                setState: {clothes : true},
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "There are some used condoms. There are empty bottles and cigarette butts. And lastly, there is a woman lying next to you.",
        options: [
            {
                text: "Look for smokes",
                nextText: 4
            },
            {
                text: "Look for alcohol",
                setState: { drunk: true },
                nextText: 5
            },
            {
                text: "Go to the bathroom",
                setState: { drugs : true, piss : true},
                nextText: 6
            },
            {
                text: "Check the woman",
                nextText: 7
            }
        ]
    },
    {
        id: 4,
        text: "You find a half broken cigarette and a lighter that works after couple tries.",
        options: [
            {
                text: "Look for alcohol",
                setState: { drunk: true},
                nextText: 5
            },
            {
                text: "Go to the bathroom",
                setState: { drugs : true, piss : true},
                nextText: 6
            },
            {
                text: "Go back to sleep",
                nextText: 3
            },
            {
                text: "Check the woman",
                nextText: 7
            }
        ]
    },
    {
        id: 5,
        text: "Some empty bottles and finally, you hit the spot. It doesn't taste nice though.",
        options: [
            {
                text: "Drink more",
                nextText: 8
            },
            {
                text: "Go to the bathroom",
                setState: { drugs : true, piss : true},
                nextText: 6
            }
        ]
    },
    {
        id: 8,
        text: "You are pretty drunk and can't keep your eyes open anymore.",
        options: [
            {
                text: "Shit",
                nextText: 3
            }
        ]
    },
    {
        id: 6,
        text: "Your shitface is on the mirror.",
        options: [
            {
                text: "Wash your face",
                nextText: 10
            },
            {
                text: "Check the cabinet",
                requiredState: (currentState) => currentState.drugs,
                nextText: 11
            },
            {
                text: "Take a wicked piss",
                requiredState: (currentState) => currentState.piss,
                setState: { piss : false},
                nextText: 12
            }
        ]
    },
    {
        id: 10,
        text: "Still the same shitface.",
        options: [
            {
                text: "Check the cabinet",
                requiredState: (currentState) => currentState.drugs,
                nextText: 11
            },
            {
                text: "Take a wicked piss",
                requiredState: (currentState) => currentState.piss,
                setState: { piss : false},
                nextText: 12
            },
            {
                text: "Go back",
                setState: {baloon : true},
                nextText: 13
            }
        ]
    },
    {
        id: 11,
        text: "It's for meds, d'uh.",
        options: [
            {
                text: "Take the painkillers",
                requiredState: (currentState) => currentState.drugs,
                setState: { drugs: false, painkillers: true},
                nextText: 10
            },
            {
                text: "Take a wicked piss",
                requiredState: (currentState) => currentState.piss,
                setState: { piss : false},
                nextText: 12
            },
            {
                text: "Go back",
                setState: {baloon : true},
                nextText: 13
            }
        ]
    },
    {
        id: 12,
        text: "You should get this blood checked.",
        options: [
            {
                text: "Go back",
                nextText: 6
            }
        ]
    },
    {
        id: 13,
        text: "The woman is there. Bottles are there. Condoms are there.",
        options: [
            {
                text: "Put some clothes",
                requiredState: (currentState) => currentState.naked,
                setState: { naked: false, clothes: true},
                nextText: 16
            },
            {
                text: "Make a baloon from condoms",
                requiredState: (currentState) => currentState.baloon,
                setState: { baloon: false},
                nextText: 17
            },
            {
                text: "Leave the apartment",
                nextText: 18
            },
            {
                text: "Check the woman",
                nextText: 7
            }
        ]
    },
    {
        id: 16,
        text: "You are looking fine, brother.",
        options: [
            {
                text: "Damn right",
                setState: {clothes : true},
                nextText: 13
            }
        ]
    },
    {
        id: 17,
        text: "You are disgusting. That's a great baloon though.",
        options: [
            {
                text: "Wipe the cum from your face",
                nextText: 13
            }
        ]
    },
    {
        id: 18,
        text: "Before you leave, you see a bag next to the door. Don't you want to check it?",
        options: [
            {
                text: "Check the bag",
                nextText: 19
            },
            {
                text: "Just leave",
                nextText: 20
            }
        ]
    },
    {
        id: 19,
        text: "There are all kinds of goodies here: money, smokes...",
        options: [
            {
                text: "Take the money",
                setState: {money : true},
                nextText: 20
            },
            {
                text: "Take the smokes",
                setState: {smokes : true},
                nextText: 20
            },
            {
                text: "Take both",
                setState: {money : true, smokes : true},
                nextText: 20
            }
        ]
    },
    {
        id: 20,
        text: "As soon as you are out, you see two buffed up dudes entering the building with guns in their hand",
        options: [
            {
                text: "You feel an urge to follow them",
                nextText: 21
            },
            {
                text: "Who are you? Fucking Batman?",
                nextText: 22
            }
        ]
    },
    {
        id: 21,
        text: "Sorry, detective. My bad. They are in front of the apartment you left banging the door.",
        options: [
            {
                text: "Wait",
                nextText: 23
            }
        ]
    },
    {
        id: 23,
        text: "Looks like no patience is left in these dudes. They break the door and enter the inside.",
        options: [
            {
                text: "...",
                nextText: 24
            }
        ]
    },
    {
        id: 24,
        text: "\"The bitch is dead, boss!\", you hear. Looks like you are in trouble, fuck boy.",
        options: [
            {
                text: "Run",
                nextText: 25 
            },
            {
                text: "Confront them like a hero",
                nextText: 26
            }
        ]
    },
    {
        id: 25,
        text: "You are not sure if they noticed you and you don't care. The meaning of life is running as fast as you can right now. Run, bitch, run!",
        options: [
            {
                text: "Head West",
                requiredState: (currentState) => currentState.naked,
                nextText: 27
            },
            {
                text: "Run West",
                requiredState: (currentState) => currentState.clothes,
                nextText: 28
            },
            {
                text: "Head East",
                requiredState: (currentState) => currentState.naked,
                nextText: 27
            },
            {
                text: "Run East",
                requiredState: (currentState) => currentState.clothes,
                nextText: 29
            }
        ]
    },
    {
        id: 27,
        text: "Why everyone is looking at you as you feel the air caressing your balls... Suddenly you realize that you are naked",
        options: [
            {
                text: "Run faster",
                nextText: 30
            },
            {
                text: "Try to steal clothes from someone",
                nextText: 31
            }
        ]
    },
    {
        id: 30,
        text: "You can't run faster than the speed of light; also, the cops. They tackle you and you hit your head on the ground. You open your eyes in a jail cell",
        options: [
            {
                text: "But where did I put everything I got from the apartment?",
                nextText: 32
            }
        ]
    },
    {
        id: 32,
        text: "You tell me...",
        options: [
            {
                text: "Take a cigarette from your ass",
                requiredState: (currentState) => currentState.painkillers,
                setState: { painkillers: false },
                nextText: 33
            },
            {
                text: "Take a painkiller from your ass",
                requiredState: (currentState) => currentState.smokes,
                setState: { smokes: false },
                nextText: 34
            },
            {
                text: "Look around",
                nextText: 35
            }
        ]
    },
    
    
           
]

startGame()