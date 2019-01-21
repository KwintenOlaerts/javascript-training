let films = [
    `A Prayer Before Dawg`,
    `Incredibles 2`,
    `Dogman`,
    `Will Tura, Hoop Doet Leven`,
    `The Idol`,
    `De Kleine Heks`,
    `Den Skyldige`,
    `McQueen`,
]

const wrapWithTag = (content, tagname) =>`<${tagname}>${content}</${tagname}>`;




films.reverse();

document.write(`<ol>`)

films.forEach(show => document.write(wrapWithTag(show, 'li')))
document.write(`</ol>`);

const toLower = films.map (show => {
    return show.toLowerCase()
})






