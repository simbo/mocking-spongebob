enum CharacterCase {
  Lower = 0,
  Upper = 1
}

export function decorateText(lines: string[]): string[] {
  let characterCase = CharacterCase.Upper;
  return lines.map(line =>
    [...line]
      .map(character => {
        if (/^\s$/.test(character)) {
          return character;
        } else if (characterCase === CharacterCase.Lower) {
          characterCase = CharacterCase.Upper;
          return character.toUpperCase();
        } else {
          characterCase = CharacterCase.Lower;
          return character.toLowerCase();
        }
      })
      .join('')
  );
}
