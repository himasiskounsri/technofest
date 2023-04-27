interface SetMessenger {
  (messenger: string): void;
}

type FadeBufferObj = {
  c: number;
  l: string;
};

export class Messenger {
  codeletters: string;
  message: number;
  current_length: number;
  fadeBuffer: FadeBufferObj[];
  messages: string[];
  setMessenger: SetMessenger;

  constructor(setMessenger: SetMessenger) {
    this.codeletters = "&#*+%?£@§$0123456789";
    this.message = 0;
    this.current_length = 0;
    this.fadeBuffer = [];
    this.messages = [
      "Technofest.",
      "2023.",
      "Himasisko.",
      "Future.",
      "Eternity.",
      "Infinity.",
      "Unsri.",
      "2045.",
      "Technology.",
      "Quantum.",
    ];
    this.setMessenger = setMessenger;
    this.animateIn();
  }

  generateRandomString(length: number) {
    var random_text = "";
    while (random_text.length < length) {
      random_text += this.codeletters.charAt(
        Math.floor(Math.random() * this.codeletters.length)
      );
    }

    return random_text;
  }

  animateIn() {
    if (this.current_length < this.messages[this.message].length) {
      this.current_length = this.current_length + 2;
      if (this.current_length > this.messages[this.message].length) {
        this.current_length = this.messages[this.message].length;
      }
      var message = this.generateRandomString(this.current_length);
      this.setMessenger(message);

      setTimeout(() => {
        this.animateIn();
      }, 20);
    } else {
      setTimeout(() => {
        this.animateFadeBuffer();
      }, 20);
    }
  }

  animateFadeBuffer() {
    if (this.fadeBuffer.length === 0) {
      // this.fadeBuffer = [];
      for (var i = 0; i < this.messages[this.message].length; i++) {
        this.fadeBuffer.push({
          c: Math.floor(Math.random() * 12) + 1,
          l: this.messages[this.message].charAt(i),
        });
      }
    }

    var do_cycles = false;
    var message = "";

    for (var i = 0; i < this.fadeBuffer.length; i++) {
      var fader = this.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += this.codeletters.charAt(
          Math.floor(Math.random() * this.codeletters.length)
        );
      } else {
        message += fader.l;
      }
    }

    this.setMessenger(message);

    if (do_cycles === true) {
      setTimeout(() => {
        this.animateFadeBuffer();
      }, 50);
    } else {
      setTimeout(() => {
        this.cycleText();
      }, 2000);
    }
  }

  cycleText() {
    this.message = this.message + 1;
    if (this.message >= this.messages.length) {
      this.message = 0;
    }

    this.current_length = 0;
    this.fadeBuffer = [];

    setTimeout(() => {
      this.animateIn();
    }, 200);
  }
}
