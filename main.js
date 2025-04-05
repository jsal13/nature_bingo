// ON CLICK BINGO SQUARES.
const squares = document.querySelectorAll('.col');
squares.forEach(square => square.addEventListener('click', handleClick));

function handleClick(e) {
    e.target.classList.toggle('done');
}

// SQUARE VALUES

const bingoSquares = [
    "A tree growing without human help",
    "A Bird's Nest",
    "Dandelion growing through concrete",
    "Bird drinking from a puddle",
    "Leaf with an interesting insect bite pattern",
    "An ant carrying something larger than itself",
    "Hear birdsong",
    "Feather on the ground",
    "Squirrel burying a nut",
    "Moss growing on a building",
    "Bee visiting a flower in a park",
    "Spider web",
    "Spider",
    "Large Spider",
    "Spider on web",
    "Tree with a hole in it",
    "Tree with a nest in it",
    "Tree with a bird in it",
    "Smooth, round stone",
    "Butterfly",
    "Wildflower growing in an unexpected place",
    "Pigeon pecking at the ground",
    "Ladybug",
    "Seed pod",
    "Group of birds flying together",
    "Animal Tracks",
    "Squirrel climbing a tree",
    "Bird in a Nest",
    "Water or Dew on a Leaf",
    "Water or Dew on a Flower",
    "Worm on the sidewalk after rain",
    "Twig that looks like a letter",
    "Bee collecting pollen",
    "Leaf with interesting veins",
    "Snail leaving a trail",
    "Ivy",
    "Small puddle reflecting the sky",
    "Bird perched on a wire",
    "Insect camouflaged on a plant",
    "Stone with different colors in it",
    "Spot a bird taking a bath in a puddle or fountain",
    "The smell of blooming flowers or fresh-cut grass"
]

