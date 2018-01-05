import {Poem} from './../js/haiku.js';

describe("Poem", function() {
  it('counts syllables correctly for simple words', function() {
    const bananaPoem = new Poem(["banana"]);
    expect(bananaPoem.syllables()).toEqual([3]);
  });

  it('counts syllables correctly for multiple vowels in a row', function() {
    const feetPoem = new Poem(["feet"]);
    expect(feetPoem.syllables()).toEqual([1]);
  })

  it('correctly identifies silent e at the end of a word', function() {
    const fatePoem = new Poem(["fate"]);
    const thePoem = new Poem(["the"]);
    const treePoem = new Poem(["tree"]);

    expect(fatePoem.syllables()).toEqual([1]);
    expect(thePoem.syllables()).toEqual([1]);
    expect(treePoem.syllables()).toEqual([1]);
  });

  it('correctly identifies silent e followed by s', function() {
    const cagesPoem = new Poem(["cages"]);
    const fatesPoem = new Poem(["fates"]);
    const treesPoem = new Poem(["trees"])

    expect(cagesPoem.syllables()).toEqual([2]);
    expect(fatesPoem.syllables()).toEqual([1]);
    expect(treesPoem.syllables()).toEqual([1]);
  });

  it('counts syllables for multiple words', function() {
    const friendPoem = new Poem(["friends are great"]);

    expect(friendPoem.syllables()).toEqual([3]);
  });

  it('counts syllables for multiple lines', function() {
    const catPoem = new Poem(["I love cats", "they make me happy"]);

    expect(catPoem.syllables()).toEqual([3,5])
  });
});
