class Character {
}

export function lifebarColor(character) {
  const characterHealth = character.health;

  if (characterHealth < 15) {
    return 'critical';
  }

  if (characterHealth >= 15 && characterHealth < 50) {
    return 'wounded';
  }

  return 'healthy';
}

export default Character;
