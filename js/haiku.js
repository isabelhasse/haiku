export const vowels = "aeiouyAEIOU";
export const exceptions = "scxgl";

export class Poem {
  constructor(lines) {
    this.lines = lines;
  }

  syllables() {
    var syllablesPerLine = [];
    for(let i=0;i<this.lines.length;i++) {
      let words = this.lines[i].split(" ");
      let syllables = 0;
      words.forEach(function(word) {
        let lastWasVowel = false;
        let vowelsInWord = 0;
        for(let j=0;j<word.length;j++) {
          if(vowels.includes(word.charAt(j))) {
            if(!lastWasVowel && (j != word.length-1 || word.charAt(j) != "e" || vowelsInWord === 0)) {
              syllables++;
            }
            lastWasVowel = true;
            vowelsInWord++;
          } else {
            lastWasVowel = false;
          }
        }

        if(word.charAt(word.length-1) === "s" && word.charAt(word.length-2) === "e" && !exceptions.includes(word.charAt(word.length-3)) && !vowels.includes(word.charAt(word.length-3))) {
          syllables--;
        }

        if(word.includes("ia") || word.includes("io")) {
          syllables++;
        }

      });
      syllablesPerLine.push(syllables);
    }
    return syllablesPerLine;
  }

  isHaiku() {
    return this.syllables() === [5,7,5];
  }
}
