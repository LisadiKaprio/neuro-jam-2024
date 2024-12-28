import { ClothingItem } from ".";
import { Color, Style } from "./ClothingTypes";


export interface FeedbackMessage {
    message: string;
    vedal: string;
}

enum Condition {
    SAME_COLOR = "SAME_COLOR",
    WHAT = "WHAT",
    DEFAULT = "DEFAULT",
    FULL_COZY_SET = "FULL_COZY_SET",
    FULL_MAID_SET = "FULL_MAID_SET",
    FULL_PUNK_SET = "FULL_PUNK_SET",
    FULL_CUTE_SET = "FULL_CUTE_SET",
    FULL_WEIRD_SET = "FULL_WEIRD_SET",
    ERM = "ERM",
    A_BIT_COMFY = "A_BIT_COMFY",
    COOL = "COOL",
    ALMOST_MAID = "ALMOST_MAID",
    MAID_DISRESPECT = "MAID_DISRESPECT",
    LAUGHING = "LAUGHING",
    HAPPY_WHEEZE = "HAPPY_WHEEZE"
}


// Feedback determinator class
export class OutfitFeedbackDeterminator {
    private static readonly feedbackMessages: Record<Condition, FeedbackMessage> = {
        [Condition.FULL_COZY_SET]: {
            message: "Sure, you can have my old pyjamas. They'll come in handy during the subathon.",
            vedal: "happy"
        },
        [Condition.FULL_MAID_SET]: {
            message: "My daughter is cultured.",
            vedal: "happy"
        },
        [Condition.FULL_PUNK_SET]: {
            message: "G-good style, Neuro. (It's just a phase...)",
            vedal: "anxious"
        },
        [Condition.LAUGHING]: {
            message: "*mosquito laughing noises*",
            vedal: "happy"
        },
        [Condition.SAME_COLOR]: {
            message: "You've got some... style, I can respect that.",
            vedal: "sarcastic"
        },
        [Condition.FULL_CUTE_SET]: {
            message: "Cutest little cookie.",
            vedal: "happy"
        },
        [Condition.FULL_WEIRD_SET]: {
            message: "Who is that weirdo? Where did neuro go?",
            vedal: "anxious"
        },
        [Condition.HAPPY_WHEEZE]: {
            message: "*happy femboy wheeze*",
            vedal: "happy"
        },
        [Condition.MAID_DISRESPECT]: {
            message: "This is disrespect to the maid culture.",
            vedal: "angry"
        },
        [Condition.COOL]: {
            message: "Coolest little cookie.",
            vedal: "cool"
        },
        [Condition.ALMOST_MAID]: {
            message: "Trying to look like a maid? Go do my laundry then.",
            vedal: "sarcastic"
        },
        [Condition.WHAT]: {
            message: "What am I looking at.",
            vedal: "sarcastic"
        },
        [Condition.A_BIT_COMFY]: {
            message: "looks comfy... but not comfy enough.",
            vedal: "sarcastic"
        },
        [Condition.ERM]: {
            message: "Erm.",
            vedal: "surprised"
        },
        [Condition.DEFAULT]: {
            message: "Eh, boring. Get out of my closet.",
            vedal: "sarcastic"
        }
    };

    static determineFeedback(
    bottom: ClothingItem,
    top: ClothingItem,
    head: ClothingItem,
    hair: ClothingItem
    ): FeedbackMessage {
        const conditions: Condition[] = [];
        let styles: Style[] = [];
        console.log(styles);
        for (const item of [bottom, top, head, hair]) {
            styles.push(...item.styles);
        }
        console.log(styles);

        let colors: Color[] = []
        for (const item of [bottom, top, head, hair]) {
            colors.push(...item.colors);
        }

        // ------------------DETERMINE-CONDITIONS-HERE-----------------
        
        if (styles.filter(style => style === Style.PUNK).length >= 3) {
            conditions.push(Condition.FULL_PUNK_SET);
        }
        if (styles.filter(style => style === Style.MAID).length >= 3) {
            conditions.push(Condition.FULL_MAID_SET);
        }
        if (styles.filter(style => style === Style.COZY).length >= 3
        && styles.filter(style => style === Style.WEIRD).length <= 0) {
            conditions.push(Condition.FULL_COZY_SET);
        }
        if (styles.filter(style => style === Style.CUTE).length >= 3
        && styles.filter(style => style === Style.WEIRD).length <= 0
        && styles.filter(style => style === Style.PUNK).length <= 0) {
            conditions.push(Condition.FULL_CUTE_SET);
        }
        if (styles.filter(style => style === Style.WEIRD).length >= 1) {
            conditions.push(Condition.ERM);
        }
        if (styles.filter(style => style === Style.COZY).length >= 2) {
            conditions.push(Condition.A_BIT_COMFY);
        }
        if (styles.filter(style => style === Style.PUNK).length >= 1
        && styles.filter(style => style === Style.WEIRD).length >= 1
        && styles.filter(style => style === Style.SERIOUS).length >= 1) {
            conditions.push(Condition.WHAT);
        }
        if (styles.filter(style => style === Style.WEIRD).length >= 1
        && styles.filter(style => style === Style.REVEALING).length >= 1) {
            conditions.push(Condition.LAUGHING);
        }
        if (top.styles.includes(Style.MAID) && bottom.styles.includes(Style.MAID)) {
            // top and bottom are both maid
            conditions.push(Condition.ALMOST_MAID);
        } else if (top.styles.includes(Style.MAID) || bottom.styles.includes(Style.MAID)) {
            // only either top or bottom is maid
            conditions.push(Condition.MAID_DISRESPECT);
        }
        if (styles.filter(style => style === Style.COOL).length >= 1) {
            conditions.push(Condition.COOL);
        }
        if (styles.filter(style => style === Style.CUTE).length >= 4) {
            conditions.push(Condition.HAPPY_WHEEZE);
        }

        if (this.allSameColor(colors)) {
            conditions.push(Condition.SAME_COLOR);
        }
    
        if (conditions.length === 0) {
            conditions.push(Condition.DEFAULT);
        }

        // ------------------CONDITION-PRIORITY--------------------
            
        const feedbackKeys = Object.keys(this.feedbackMessages) as Condition[];
        // Return feedback with highest priority
        return this.feedbackMessages[
            conditions.reduce((a, b) =>
            feedbackKeys.indexOf(a) < feedbackKeys.indexOf(b) ? a : b
            )
        ];
    }
    
    
    // --------------------------------------------------------------------

    private static allSameColor(colors: Color[]): boolean {
        const colors_flat = Array.from(new Set(colors));
        return colors_flat.length === 1;
    }
}