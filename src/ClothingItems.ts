import {Color, Style} from './ClothingTypes';

export const pathToArt = "art/";
export const pathToVedal = "vedal/";

export enum ClothingElement {
    TOP = "top",
    BOTTOM = "bottom",
    HEAD_DECORATION = "head-decoration",
    HAIRSTYLE = "hairstyle"
}

export const topItems = [
    {
        imagePath: "top-classic-neuro-cardigan",
        colors: [Color.BROWN],
        styles: [],
    },
    {
        imagePath: "top-maid-serious",
        colors: [Color.BLACK_WHITE],
        styles: [Style.MAID, Style.SERIOUS],
    },
    {
        imagePath: "top-blanket-pajama",
        colors: [Color.BROWN],
        styles: [Style.COZY],
    },
    {
        imagePath: "top-maid-sexy",
        colors: [Color.BLACK_WHITE],
        styles: [Style.MAID, Style.REVEALING],
    },
    {
        imagePath: "top-meth-t-shirt",
        colors: [Color.BLACK_WHITE],
        styles: [Style.PUNK],
    },
    {
        imagePath: "top-rave-t-shirt",
        colors: [Color.RED],
        styles: [Style.PUNK],
    },
    {
        imagePath: "top-frog-apron",
        colors: [Color.GREEN, Color.WHITE],
        styles: [Style.CUTE, Style.MAID],
    },
    {
        imagePath: "top-goth-harpoon",
        colors: [Color.BLACK],
        styles: [Style.DANGER],
    },
    {
        imagePath: "top-green-fluff",
        colors: [Color.GREEN],
        styles: [Style.PUNK, Style.REVEALING],
    },
    {
        imagePath: "top-greenscreen",
        colors: [Color.GREEN],
        styles: [Style.GREENSCREEN],
    },
    {
        imagePath: "top-heart-sweater",
        colors: [Color.BROWN],
        styles: [Style.COZY, Style.REVEALING],
    },
    {
        imagePath: "top-maid-neko",
        colors: [Color.BLACK_WHITE],
        styles: [Style.MAID, Style.CUTE],
    },
    {
        imagePath: "top-muscular-body",
        colors: [Color.BROWN],
        styles: [Style.WEIRD],
    },
    {
        imagePath: "top-tutel-sweatshirt",
        colors: [Color.DARK_BLUE],
        styles: [Style.COZY, Style.CUTE],
    },
]

export const bottomItems = [
    {
        imagePath: "bottom-classic-neuro-skirt",
        colors: [Color.WHITE],
        styles: [Style.CUTE],
    },
    {
        imagePath: "bottom-cargo-pants",
        colors: [Color.GREEN],
        styles: [Style.PUNK],
    },
    {
        imagePath: "bottom-maid-serious",
        colors: [Color.BLACK_WHITE],
        styles: [Style.MAID, Style.SERIOUS],
    },
    {
        imagePath: "bottom-maid-sexy",
        colors: [Color.BLACK_WHITE],
        styles: [Style.MAID, Style.REVEALING],
    },
    {
        imagePath: "bottom-pajama-pants",
        colors: [Color.PINK],
        styles: [Style.COZY, Style.CUTE],
    },
    {
        imagePath: "bottom-adidas-pants",
        colors: [Color.RED],
        styles: [Style.COZY],
    },
    {
        imagePath: "bottom-blue-skirt",
        colors: [Color.BLUE],
        styles: [Style.CUTE],
    },
    {
        imagePath: "bottom-leather-skirt",
        colors: [Color.BLACK],
        styles: [Style.REVEALING, Style.PUNK],
    },
    {
        imagePath: "bottom-greenscreen",
        colors: [Color.GREEN],
        styles: [Style.GREENSCREEN],
    }
]

export const hairstyleItems = [
    {
        imagePath: "hair-front-classic",
        colors: [Color.RED],
        styles: [],
    },
    {
        imagePath: "hair-front-bun",
        colors: [Color.RED],
        styles: [Style.SERIOUS, Style.MAID],
    },
    {
        imagePath: "hair-front-grandma",
        colors: [Color.RED],
        styles: [Style.PUNK, Style.WEIRD],
    },
    {
        imagePath: "face-empty",
        colors: [],
        styles: [Style.PUNK, Style.WEIRD],
    },
    {
        imagePath: "hair-front-punk-twintails",
        colors: [Color.RED],
        styles: [Style.PUNK],
    },
    {
        imagePath: "hair-front-clown-twintails",
        colors: [Color.RED],
        styles: [Style.CUTE],
    },
    {
        imagePath: "hair-front-headband",
        colors: [Color.RED],
        styles: [Style.CUTE],
    },
]

export const headItems = [
    {
        imagePath: "face-empty",
        colors: [],
        styles: [],
    },
    {
        imagePath: "head-maid",
        colors: [Color.WHITE],
        styles: [Style.MAID],
    },
    {
        imagePath: "face-choker",
        colors: [Color.BLACK_WHITE],
        styles: [Style.PUNK],
    },
    {
        imagePath: "face-sunglasses",
        colors: [Color.BLACK_WHITE],
        styles: [Style.COOL, Style.PUNK],
    },
    {
        imagePath: "face-round-glasses",
        colors: [Color.BLACK_WHITE],
        styles: [Style.SERIOUS, Style.CUTE],
    },
    {
        imagePath: "face-clown-nose",
        colors: [Color.RED],
        styles: [Style.WEIRD],
    },
    {
        imagePath: "head-burger-king",
        colors: [Color.BROWN],
        styles: [Style.WEIRD],
    },
    {
        imagePath: "face-clown-stickers",
        colors: [],
        styles: [Style.CUTE],
    },
    {
        imagePath: "head-frog-hat",
        colors: [Color.GREEN],
        styles: [Style.CUTE, Style.COZY],
    },
    {
        imagePath: "head-maid-ribbons",
        colors: [Color.WHITE, Color.PINK],
        styles: [Style.MAID],
    },
    {
        imagePath: "head-question-mark",
        colors: [Color.BROWN],
        styles: [Style.CUTE],
    },
    {
        imagePath: "head-zoo",
        colors: [Color.BROWN],
        styles: [],
    },

]