import {Color, Style} from './ClothingTypes';
import {topItems, bottomItems, headItems, hairstyleItems, ClothingElement, pathToArt} from './ClothingItems';

  enum Condition {
    SAME_COLOR = "SAME_COLOR",
    SAME_STYLE = "SAME_STYLE",
    MIXED_STYLES = "MIXED_STYLES",
    // Add more conditions as needed
  }
  
  interface ClothingItem {
    imagePath: string;
    colors: Color[];
    styles: Style[];
}
  
  interface FeedbackMessage {
    message: string;
    spritePath: string;
    priority: number;
  }
  
  // Clothing piece class
  class ClothingPiece {
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
class DressUpGame {
  appContainer: HTMLDivElement;
    eyes: string;
    bottomClothing: ClothingPiece;
    topClothing: ClothingPiece;
    headDecoration: ClothingPiece;
    hairstyle: ClothingPiece;
    feedbackWindow!: HTMLElement;
    randomizeButton!: HTMLElement;
  
    constructor() {
      // Initialize clothing pieces with their respective items
      this.appContainer = document.body.querySelector(`#app`) as HTMLDivElement;
      this.eyes = "eyes-neuro";
      this.bottomClothing = new ClothingPiece(bottomItems, ClothingElement.BOTTOM);
      this.topClothing = new ClothingPiece(topItems, ClothingElement.TOP);
      this.headDecoration = new ClothingPiece(headItems, ClothingElement.HEAD_DECORATION);
      this.hairstyle = new ClothingPiece(hairstyleItems, ClothingElement.HAIRSTYLE);
      
      this.initClothingDisplay();
      this.setupUI();
      this.setupEventListeners();
    }
  
    private initClothingDisplay(): void {
      const imgBase = document.querySelector(`#base-body-image`) as HTMLImageElement;
      if (imgBase) {
        imgBase.src = pathToArt + "base-body" + ".png";
      }
      const imgEyes = document.querySelector(`#eyes-image`) as HTMLImageElement;
      if (imgEyes && this.eyes) {
        imgEyes.src = pathToArt + this.eyes + ".png";
      }
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
  
  private checkBackHairstyle(imagePath?: string): void {
    const backHairstyle = document.querySelector(`#hairstyle-back-image`) as HTMLImageElement;
    if (imagePath === "hair-front-classic-neuro" && backHairstyle) {
      backHairstyle.src = pathToArt + "hair-back-classic-neuro" + ".png";
    } else if (backHairstyle) {
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
  
      // Create randomize button (hidden by default)
      this.randomizeButton = document.createElement('button');
      this.randomizeButton.className = 'randomize-button hidden';
      this.randomizeButton.textContent = 'Randomize';
      this.appContainer.appendChild(this.randomizeButton);
      this.randomizeButton.addEventListener('click', () => {
        this.randomizeOutfit();
      });
    });
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
  
      // // Set up feedback button
      // document.querySelector('.feedback-button')?.addEventListener('click', () => {
      //   this.showFeedback();
      // });
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
      if (
        this.bottomClothing.allSeen() &&
        this.topClothing.allSeen() &&
        this.headDecoration.allSeen() &&
        this.hairstyle.allSeen()
      ) {
        this.randomizeButton.classList.remove('hidden');
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
  
      this.feedbackWindow.innerHTML = `
        <div class="feedback-content">
          <img src="${feedback.spritePath}" alt="Feedback Character">
          <p>${feedback.message}</p>
          <button onclick="this.parentElement.parentElement.classList.add('hidden')">Close</button>
        </div>
      `;
      this.feedbackWindow.classList.remove('hidden');
    }
  }
  
  // Feedback determinator class
  class OutfitFeedbackDeterminator {
    private static readonly feedbackMessages: Record<Condition, FeedbackMessage> = {
      [Condition.SAME_COLOR]: {
        message: "Wow, monochrome! Bold choice!",
        spritePath: "assets/feedback-sprites/excited.png",
        priority: 2
      },
      [Condition.SAME_STYLE]: {
        message: "Love how committed you are to the style!",
        spritePath: "assets/feedback-sprites/happy.png",
        priority: 1
      },
      [Condition.MIXED_STYLES]: {
        message: "Interesting mix of styles!",
        spritePath: "assets/feedback-sprites/thoughtful.png",
        priority: 0
      }
    };
  
    static determineFeedback(
      bottom: ClothingItem,
      top: ClothingItem,
      head: ClothingItem,
      hair: ClothingItem
    ): FeedbackMessage {
      const conditions: Condition[] = [];
  
      // Check for same color
      if (this.allSameColor([bottom, top, head, hair])) {
        conditions.push(Condition.SAME_COLOR);
      }
  
      // Check for same style
      if (this.allSameStyle([bottom, top, head, hair])) {
        conditions.push(Condition.SAME_STYLE);
      }
  
      // If no other conditions met, it's mixed styles
      if (conditions.length === 0) {
        conditions.push(Condition.MIXED_STYLES);
      }
  
      // Return feedback with highest priority
      return this.feedbackMessages[
        conditions.reduce((a, b) => 
          this.feedbackMessages[a].priority > this.feedbackMessages[b].priority ? a : b
        )
      ];
    }
  
    private static allSameColor(items: ClothingItem[]): boolean {
      const colors = new Set(items.flatMap(item => item.colors));
      return colors.size === 1;
    }
  
    private static allSameStyle(items: ClothingItem[]): boolean {
      const styles = new Set(items.flatMap(item => item.styles));
      return styles.size === 1;
    }
  }
  
  // Initialize the game
  window.onload = () => {
    document.body.style.display = 'block'; // or remove a "hidden" class
  };
  const game = new DressUpGame();