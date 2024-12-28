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
        styles: [Style.COZY, Style.CUTE],
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
]

export const bottomItems = [
    {
        imagePath: "bottom-classic-neuro-skirt",
        colors: [Color.PINK],
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
]

export const hairstyleItems = [
    {
        imagePath: "hair-front-classic-neuro",
        colors: [Color.RED],
        styles: [Style.CUTE],
    },
    {
        imagePath: "hair-front-bun",
        colors: [Color.RED],
        styles: [Style.SERIOUS, Style.MAID],
    },
    {
        imagePath: "hair-front-grandma",
        colors: [Color.RED],
        styles: [Style.WEIRD],
    },
    {
        imagePath: "face-empty",
        colors: [],
        styles: [Style.PUNK],
    },
    {
        imagePath: "hair-front-punk-twintails",
        colors: [Color.RED],
        styles: [Style.PUNK],
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
]