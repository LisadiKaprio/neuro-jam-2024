import {Color, Style} from './ClothingTypes';
import {topItems, bottomItems, headItems, hairstyleItems, ClothingElement, pathToArt, pathToVedal} from './ClothingItems';
import { OutfitFeedbackDeterminator } from './VedalSystem';
  
export interface ClothingItem {
    imagePath: string;
    colors: Color[];
    styles: Style[];
}

// Clothing piece class
export class ClothingPiece {
    items: ClothingItem[];
    currentIndex: number = 0;
    type: ClothingElement;
    seen: Set<number> = new Set();

    constructor(items: ClothingItem[], type: ClothingElement) {
        this.items = items;
        this.type = type;
        this.seen.add(0); // Mark first item as seen
    }

    next(): ClothingItem {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.seen.add(this.currentIndex);
        return this.items[this.currentIndex];
    }

    previous(): ClothingItem {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.seen.add(this.currentIndex);
        return this.items[this.currentIndex];
    }

    current(): ClothingItem {
        return this.items[this.currentIndex];
    }

    allSeen(): boolean {
        return this.seen.size === this.items.length;
    }

    random(): ClothingItem {
        this.currentIndex = Math.floor(Math.random() * this.items.length);
        return this.items[this.currentIndex];
    }
}
  
  // Main game class
export class DressUpGame {
    randomizeEnabled: boolean = false;
    appContainer: HTMLDivElement;
    isEvil: boolean = false;
    isMeow: boolean = false;
    catEarsImage: HTMLImageElement;
    catTailImage: HTMLImageElement;
    eyes: string;
    bottomClothing: ClothingPiece;
    topClothing: ClothingPiece;
    headDecoration: ClothingPiece;
    hairstyle: ClothingPiece;
    feedbackWindow!: HTMLElement;
    randomizeButton!: HTMLElement;
    feedbackButton!: HTMLElement;
    evilButton!: HTMLElement;
    meowButton!: HTMLElement;
  
  constructor() {
      this.catEarsImage = document.querySelector(`#cat-ears-image`) as HTMLImageElement;
      this.catEarsImage.src = pathToArt + "face-empty" + ".png";
      this.catTailImage = document.querySelector(`#cat-tail-image`) as HTMLImageElement;
      this.catTailImage.src = pathToArt + "face-empty" + ".png";
      // Initialize clothing pieces with their respective items
      this.appContainer = document.body.querySelector(`#app`) as HTMLDivElement;
      this.eyes = "eyes-neuro";
      this.bottomClothing = new ClothingPiece(bottomItems, ClothingElement.BOTTOM);
      this.topClothing = new ClothingPiece(topItems, ClothingElement.TOP);
      this.headDecoration = new ClothingPiece(headItems, ClothingElement.HEAD_DECORATION);
      this.hairstyle = new ClothingPiece(hairstyleItems, ClothingElement.HAIRSTYLE);
      
      this.preloadImages();
      this.initClothingDisplay();
      this.setupUI();
      this.setupEventListeners();
    }

    private preloadImages(): void {
        const clothings = [
          ...this.topClothing.items,
          ...this.bottomClothing.items,
          ...this.headDecoration.items,
          ...this.hairstyle.items
        ]
        const allImages = clothings.map((clothing) => pathToArt + clothing.imagePath + ".png");
        const vedalImages = Object.entries(OutfitFeedbackDeterminator.feedbackMessages).map((feedback) => pathToArt + pathToVedal + feedback[1].vedal + ".png");
        allImages.push()
        allImages.forEach((imagePath) => {
          const img = new Image();
          img.src = imagePath;
        });
    }
  
    private initClothingDisplay(): void {
      const imgBase = document.querySelector(`#base-body-image`) as HTMLImageElement;
      if (imgBase) {
        imgBase.src = pathToArt + "base-body" + ".png";
      }
      this.drawEyes();
      const clothings = [
        this.topClothing,
        this.bottomClothing,
        this.headDecoration,
        this.hairstyle
      ]
      clothings.forEach((clothing) => {
        const imgtop = document.querySelector(`#${clothing.type}-image`) as HTMLImageElement;
        if (imgtop && clothing.items[0].imagePath) {
          imgtop.src = pathToArt + clothing.items[0].imagePath + ".png";
        }
        if (clothing.type === ClothingElement.HAIRSTYLE) {
          this.checkBackHairstyle(clothing.items[0].imagePath);
        }
      })
    }
  
  private checkBackHairstyle(imagePath: string): void {
    const backHairstyle = document.querySelector(`#hairstyle-back-image`) as HTMLImageElement;
    if (["hair-front-classic-neuro", "hair-front-headband"].includes(imagePath) && backHairstyle) {
      backHairstyle.src = pathToArt + "hair-back-classic-neuro" + ".png";
    } else if (imagePath === "hair-front-clown-twintails" && backHairstyle) {
      backHairstyle.src = pathToArt + "hair-back-clown-twintails" + ".png";
    }
    else if (backHairstyle) {
      backHairstyle.src = pathToArt + "face-empty" + ".png";
    }
  }
  
  private setupUI(): void {
    document.addEventListener('DOMContentLoaded', () => {
      this.appContainer = document.body.querySelector('#app') as HTMLDivElement;
      // Create feedback window (hidden by default)
      this.feedbackWindow = document.createElement('div');
      this.feedbackWindow.className = 'feedback-window hidden';
      this.appContainer.appendChild(this.feedbackWindow);

      // Create vedal button       
      this.feedbackButton = this.setupButton(
            this.feedbackButton,
            'feedback-button',
            'Show to Vedal',
            this.appContainer,
            () => {
                this.showFeedback();
            }
        )

        // Create change to evil button        
        this.evilButton = this.setupButton(
            this.evilButton,
            'evil-button',
            'Play as Evil instead',
            this.appContainer,
            () => {
                this.changeCharacter();
            }
        )

        // Create meow button        
        this.meowButton = this.setupButton(
            this.meowButton,
            'meow-button',
            'meow!',
            this.appContainer,
            () => {
                this.handleMeow();
            }
        )
        
      // Create randomize button (hidden by default)    
        this.randomizeButton = this.setupButton(
            this.randomizeButton,
            'randomize-button hidden',
            '🎲 Randomize',
            this.appContainer,
            () => {
                this.randomizeOutfit();
            }
        );
        this.checkAllSeen();

    });
    }

    private setupButton(
        button: HTMLElement,
        className: string,
        text: string,
        parentElement: HTMLElement,
        clickFunction: () => void
    ): HTMLElement {
        button = document.createElement('button');
        button.className = className;
        button.textContent = text;
        parentElement.appendChild(button);
        button.addEventListener('click', () => {
            clickFunction();
        });
        return button;
    }
  
    private setupEventListeners(): void {
      // Set up arrow click handlers
      document.querySelectorAll('.arrow-left').forEach(arrow => {
        arrow.addEventListener('click', (e) => {
          const type = (e.target as HTMLElement).dataset.type;
          this.handleArrowClick(type!, 'previous');
        });
      });
  
      document.querySelectorAll('.arrow-right').forEach(arrow => {
        arrow.addEventListener('click', (e) => {
          const type = (e.target as HTMLElement).dataset.type;
          this.handleArrowClick(type!, 'next');
        });
      });
    }
  
    private handleArrowClick(type: string, direction: 'next' | 'previous'): void {
      let piece: ClothingPiece;
      switch(type) {
        case ClothingElement.BOTTOM: piece = this.bottomClothing; break;
        case ClothingElement.TOP: piece = this.topClothing; break;
        case ClothingElement.HEAD_DECORATION: piece = this.headDecoration; break;
        case ClothingElement.HAIRSTYLE: piece = this.hairstyle; break;
        default: return;
      }
  
      const item = direction === 'next' ? piece.next() : piece.previous();
      this.updateClothingDisplay(type, item);
      this.checkAllSeen();
    }
  
    private updateClothingDisplay(type: ClothingElement, item: ClothingItem): void {
      const img = document.querySelector(`#${type}-image`) as HTMLImageElement;
      if (img && item.imagePath) {
        img.src = pathToArt + item.imagePath + ".png";
      }
      if (type === ClothingElement.HAIRSTYLE) {
        this.checkBackHairstyle(item.imagePath);
      }
    }
  
    private checkAllSeen(): void {
        if (!!localStorage.getItem('allSeen')) {
            this.randomizeButton.classList.remove('hidden');
        } else if (
            this.bottomClothing.allSeen() &&
            this.topClothing.allSeen() &&
            this.headDecoration.allSeen() &&
            this.hairstyle.allSeen()
        ) {
            this.randomizeButton.classList.remove('hidden');
            localStorage.setItem('allSeen', 'true');
        }
  }
  
  private randomizeOutfit(): void {
    this.updateClothingDisplay(ClothingElement.HAIRSTYLE, this.hairstyle.random());
    this.updateClothingDisplay(ClothingElement.HEAD_DECORATION, this.headDecoration.random());
    this.updateClothingDisplay(ClothingElement.TOP, this.topClothing.random());
    this.updateClothingDisplay(ClothingElement.BOTTOM, this.bottomClothing.random());
  }
  
    private showFeedback(): void {
      const feedback = OutfitFeedbackDeterminator.determineFeedback(
        this.bottomClothing.current(),
        this.topClothing.current(),
        this.headDecoration.current(),
        this.hairstyle.current()
        );


        const progress = OutfitFeedbackDeterminator.getProgress();
  
      this.feedbackWindow.innerHTML = `
        <div class="feedback-content">
          <img src="${pathToArt}${pathToVedal}${feedback.vedal}.png" class="vedal" alt="Vedal">
          <p style="margin: 12px;">${feedback.message}</p>
          <button onclick="this.parentElement.parentElement.classList.add('hidden')">Try another outfit</button>
          <sup>Unlocked: ${progress.unlocked}/${progress.total}</sup>
        </div>
      `;
      this.feedbackWindow.classList.remove('hidden');
  }
    private changeCharacter(): void {
        if (!this.isEvil) {
            this.isEvil = true;
            this.eyes = "eyes-evil";
            this.drawEyes();
            this.evilButton.textContent = "Play as Neuro instead";
        } else if (this.isEvil) {
            this.isEvil = false;
            this.eyes = "eyes-neuro";
            this.drawEyes();
            this.evilButton.textContent = 'Play as Evil instead';
        }
    }
    
    private handleMeow(): void {
        if (!this.isMeow) {
            this.isMeow = true;
            this.catEarsImage.src = pathToArt + "cat-ears" + ".png";
            this.catTailImage.src = pathToArt + "cat-tail" + ".png";
            this.meowButton.textContent = "unmeow!";
        } else {
            this.isMeow = false;
            this.catEarsImage.src = pathToArt + "face-empty" + ".png";
            this.catTailImage.src = pathToArt + "face-empty" + ".png";
            this.meowButton.textContent = "meow!";
        }
    }

  private drawEyes(): void {
    const imgEyes = document.querySelector(`#eyes-image`) as HTMLImageElement;
    if (imgEyes && this.eyes) {
      imgEyes.src = pathToArt + this.eyes + ".png";
    }
  }


  }
  
  