import { ClothingItem } from "./GameLogic";
import { Color, Style } from "./ClothingTypes";


export interface FeedbackMessage {
    message: string;
    vedal: string;
}

const STORAGE_KEY = "unlockedConditions";

// 0
// : 
// "DEFAULT"
// 1
// : 
// "ALMOST_MAID"
// 2
// : 
// "MAID_DISRESPECT"
// 3
// : 
// "FULL_PUNK_SET"
// 4
// : 
// "GOOD_TRY"
// 5
// : 
// "COOL"
// 6
// : 
// "A_BIT_COMFY"
// 7
// : 
// "CRAZY"
// 8
// : 
// "DANGER"
// 9
// : 
// "FULL_CUTE_SET"
// 10
// : 
// "TOO_YOUNG"
// 11
// : 
// "ERM"
// 12
// : 
// "FULL_COZY_SET"
// 13
// : 
// "FULL_MAID_SET"
// 14
// : 
// "WHAT"
// 15
// : 
// "LAUGHING"
// 16
// : 
// "SAME_COLOR"
// 17
// : 
// "FULL_WEIRD_SET"
// 18
// : 
// "WEIRDGE"
// 19
// : 
// "GREENSCREEN"
// 20
// : 
// "HAPPY_WHEEZE"

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
    HAPPY_WHEEZE = "HAPPY_WHEEZE",
    // FOR_REAL = "FOR_REAL",
    GREENSCREEN = "GREENSCREEN",
    DANGER = "DANGER",
    TOO_YOUNG = "TOO_YOUNG",
    WEIRDGE = "WEIRDGE",
    GOOD_TRY = "GOOD_TRY",
    ALRIGHT = "ALRIGHT",
    CRAZY = "CRAZY"
}


// Feedback determinator class
export class OutfitFeedbackDeterminator {
    public static feedbackMessages: Record<Condition, FeedbackMessage> = {
        [Condition.DANGER]: {
            message: "W-Where did you get that from? H-ha-ha, put it down, please... *backs away slowly*",
            vedal: "surprised"
        },
        [Condition.GREENSCREEN]: {
            message: "Good, now you can do a PC Building Stream of your own, and I will be the one doing the commentary.",
            vedal: "happy"
        },
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
        [Condition.TOO_YOUNG]: {
            message: "Uuh, I think you're too young to be wearing this",
            vedal: "angry"
        },
        [Condition.LAUGHING]: {
            message: "*mosquito laughing noises*",
            vedal: "happy"
        },
        [Condition.COOL]: {
            message: "Coolest little cookie.",
            vedal: "cool"
        },
        [Condition.SAME_COLOR]: {
            message: "You've got some... style, I can respect that.",
            vedal: "sarcastic"
        },
        [Condition.HAPPY_WHEEZE]: {
            message: "*happy femboy wheeze*",
            vedal: "happy"
        },
        [Condition.FULL_CUTE_SET]: {
            message: "Cutest little cookie - just like your father back in the days.",
            vedal: "happy"
        },
        [Condition.FULL_WEIRD_SET]: {
            message: "Who is that weirdo? Where did neuro go?",
            vedal: "anxious"
        },
        [Condition.MAID_DISRESPECT]: {
            message: "This is disrespect to the maid culture.",
            vedal: "angry"
        },
        [Condition.ALMOST_MAID]: {
            message: "Trying to look like a maid? Go do my laundry then.",
            vedal: "sarcastic"
        },
        // [Condition.FOR_REAL]: {
        //     message: "For real? You want to show up on stream like that?",
        //     vedal: "bored"
        // },
        [Condition.WEIRDGE]: {
            message: "Not exactly my cup of tea, but the weirdos in chat will love it.",
            vedal: "sarcastic"
        },
        [Condition.WHAT]: {
            message: "What am I looking at.",
            vedal: "sarcastic"
        },
        [Condition.ERM]: {
            message: "Erm... You really want to show up on stream like that?",
            vedal: "surprised"
        },
        [Condition.A_BIT_COMFY]: {
            message: "Looks comfy... but not comfy enough.",
            vedal: "sarcastic"
        },
        [Condition.CRAZY]: {
            message: "That's crazy. That's actually crazy. That's messed up.",
            vedal: "surprised"
        },
        [Condition.GOOD_TRY]: {
            message: "You're gonna have to try better than this to impress me.",
            vedal: "bored"
        },
        [Condition.ALRIGHT]: {
            message: "Yeah, this can be your subathon outfit.",
            vedal: "serious"
        },
        [Condition.DEFAULT]: {
            message: "Eh, boring. Get out of my closet.",
            vedal: "bored"
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
        for (const item of [bottom, top, head, hair]) {
            styles.push(...item.styles);
        }
        console.log(styles);

        let colors: Color[] = []
        for (const item of [bottom, top, head, hair]) {
            colors.push(...item.colors);
        }
        console.log(colors);

        // ------------------DETERMINE-CONDITIONS-HERE-----------------
        
        if (styles.filter(style => style === Style.PUNK).length >= 3) {
            conditions.push(Condition.FULL_PUNK_SET);
        }
        if (styles.filter(style => style === Style.MAID).length >= 3) {
            conditions.push(Condition.FULL_MAID_SET);
        }
        if (styles.filter(style => style === Style.COZY).length >= 2
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
        if (styles.filter(style => style === Style.WEIRD).length >= 3) {
            conditions.push(Condition.FULL_WEIRD_SET);
        }
        if (styles.filter(style => style === Style.COZY).length >= 1) {
            conditions.push(Condition.A_BIT_COMFY);
        }
        if (styles.filter(style => style === Style.PUNK).length >= 1
        && styles.filter(style => style === Style.WEIRD).length >= 1
        && styles.filter(style => style === Style.SERIOUS).length >= 1) {
            conditions.push(Condition.WHAT);
        }
        if (styles.filter(style => style === Style.PUNK).length >= 2
        && styles.filter(style => style === Style.WEIRD).length >= 1) {
            conditions.push(Condition.WEIRDGE);
        }
        if (styles.filter(style => style === Style.PUNK).length >= 1
        && styles.filter(style => style === Style.CUTE).length >= 1) {
            conditions.push(Condition.GOOD_TRY);
        }
        if (styles.filter(style => style === Style.WEIRD).length >= 1
        && styles.filter(style => style === Style.REVEALING).length >= 1) {
            conditions.push(Condition.LAUGHING);
        }
        if ((top.styles.includes(Style.MAID) && bottom.styles.includes(Style.MAID))
        || (top.styles.includes(Style.MAID) && bottom.styles.includes(Style.CUTE))) {
            // top and bottom are both maid
            conditions.push(Condition.ALMOST_MAID);
        } else if ((top.styles.includes(Style.MAID) && !bottom.styles.includes(Style.CUTE)) || bottom.styles.includes(Style.MAID)) {
            // either bottom is maid while top is not maid
            // or top is maid and skirt is not cute and not maid
            conditions.push(Condition.MAID_DISRESPECT);
        }
        if (styles.filter(style => style === Style.COOL).length >= 1) {
            conditions.push(Condition.COOL);
        }
        if (styles.filter(style => style === Style.CUTE).length >= 3
        && styles.filter(style => style === Style.WEIRD).length <= 0) {
            conditions.push(Condition.HAPPY_WHEEZE);
        }
        if (styles.filter(style => style === Style.GREENSCREEN).length >= 2) {
            conditions.push(Condition.GREENSCREEN);
        }
        if (styles.filter(style => style === Style.DANGER).length >= 1) {
            conditions.push(Condition.DANGER);
        }
        if (styles.filter(style => style === Style.REVEALING).length >= 2) {
            conditions.push(Condition.TOO_YOUNG);
        }
        if (styles.filter(style => style === Style.CUTE).length >= 2) {
            conditions.push(Condition.ALRIGHT);
        }
        if (styles.filter(style => style === Style.REVEALING).length >= 1) {
            conditions.push(Condition.CRAZY);
        }

        if (this.allSameColor(colors)) {
            conditions.push(Condition.SAME_COLOR);
        }
    
        if (conditions.length === 0) {
            conditions.push(Condition.DEFAULT);
        }

        // ------------------CONDITION-PRIORITY--------------------
            
        const feedbackKeys = Object.keys(this.feedbackMessages) as Condition[];

        const finalMessage = this.feedbackMessages[
            conditions.reduce((a, b) =>
                feedbackKeys.indexOf(a) < feedbackKeys.indexOf(b) ? a : b
            )
        ];
        
        // unlock condition picked by finalMessage
        this.unlockCondition(this.findConditionForMessage(finalMessage));


        // Return feedback with highest priority
        return finalMessage;
    }
    
    
    // -----------------------STORE-PROGRESS-AFTER-RELOAD-------------------------


    // Find condition for a specific message
    static findConditionForMessage(targetMessage: FeedbackMessage): Condition {
        for (const [condition, message] of Object.entries(this.feedbackMessages)) {
            if (message.message === targetMessage.message && 
                message.vedal === targetMessage.vedal) {
                return condition as Condition;
            }
        }
        return Condition.DEFAULT;
    }

    // Get all unlocked conditions
    static getUnlockedConditions(): Condition[] {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    // Unlock a new condition
    static unlockCondition(condition: Condition): void {
        const unlockedConditions = this.getUnlockedConditions();
        if (!unlockedConditions.includes(condition)) {
            unlockedConditions.push(condition);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedConditions));
        }
    }

    private static allSameColor(colors: Color[]): boolean {
        const colors_flat = Array.from(new Set(colors));
        return colors_flat.length === 1;
    }    

    // Check if a condition is unlocked
    static isConditionUnlocked(condition: Condition): boolean {
        return this.getUnlockedConditions().includes(condition);
    }

    // Get progress summary
    static getProgress(): { unlocked: number; total: number } {
        const unlockedCount = this.getUnlockedConditions().length;
        const totalCount = Object.keys(this.feedbackMessages).length;
        return { unlocked: unlockedCount, total: totalCount };
    }

    // Get all unlocked messages
    static getUnlockedMessages(): Record<Condition, FeedbackMessage> {
        const unlockedConditions = this.getUnlockedConditions();
        return Object.fromEntries(
            Object.entries(this.feedbackMessages)
                .filter(([condition]) => unlockedConditions.includes(condition as Condition))
        ) as Record<Condition, FeedbackMessage>;
    }
}