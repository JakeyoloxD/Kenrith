//+1 abilties (write in "quotes and seperate with a ,")
const groupHugEffects = [
    "Each player draws a card.",
    "Each player gains 5 life.",
    "Each player may put a land card from their hand onto the battlefield.",
    "Each player creates a 1/1 white Spirit creature token with flying.",
    "Each player returns a creature card from their graveyard to their hand."
];

//-x abilties (write in "quotes and seperate with a ,")
const groupThugEffects = [
    "Destroy target nonland permanent an opponent controls.",
    "Each opponent sacrifices a creature.",
    "Deal X damage to any target.",
    "Target opponent discards X cards.",
    "Exile target permanent an opponent controls with converted mana cost X or less."
];

//death abilties (write in "quotes and seperate with a ,")
const deathTriggerEffects = [
    "Each opponent draws a card.",
    "You discard two cards.",
    "You lose 5 life.",
    "Sacrifice a creature.",
    "Each opponent creates a 2/2 black Zombie creature token.",
    "Exile the top five cards of your library."
];

function getRandomEffect(effects) {
    const randomIndex = Math.floor(Math.random() * effects.length);
    return effects[randomIndex];
}

function displayEffect(type) {
    let effect;
    switch(type) {
        case 'groupHug':
            effect = getRandomEffect(groupHugEffects);
            break;
        case 'groupThug':
            effect = getRandomEffect(groupThugEffects);
            break;
        case 'deathTrigger':
            effect = getRandomEffect(deathTriggerEffects);
            break;
        default:
            effect = '';
    }
    document.getElementById('result').innerText = effect;
}