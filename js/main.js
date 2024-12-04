// Poem stanzas
const poemStanzas = [
    "they say being in a relationship is difficult\nand in some senses, it’s true\nbut loving you came easy.",
    "because loving you was\nsweet, patient, and kind.",
    "loving you came naturally\nlearning to love you was challenging\ngetting to know you was exciting\nand being a part of your life was a dream.",
    "we didn’t always have happy moments\nbut in the end\nwe continued to choose to love each other\nthrough the thick and thin.",
    "however, sometimes loving you was painful\nloving you came with flaws\nfalse promises, miscommunication\nand playing pretend.",
    "slowly it started to get harder\nloving you started to hurt more\nand the biggest grief is letting you go\nespecially knowing that my heart is yours."
  ];
  
  // Elements
  const symbols = document.querySelectorAll('.symbol');
  const stanzaDisplay = document.querySelector('.stanza-display');
  const stanzaText = document.querySelector('.stanza-text');
  const closeButton = document.querySelector('.close-button');
  
  // Show stanza on symbol click
  symbols.forEach((symbol, index) => {
    symbol.addEventListener('click', () => {
      stanzaText.textContent = poemStanzas[index];
      stanzaDisplay.classList.remove('hidden');
      stanzaDisplay.style.display = 'block';
    });
  });
  
  // Close button functionality
  closeButton.addEventListener('click', () => {
    stanzaDisplay.classList.add('hidden');
    stanzaDisplay.style.display = 'none';
  });
  