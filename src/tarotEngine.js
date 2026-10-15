import "./extraSpreads.js";
import { deck } from "./data/deck.js";
import { spreads, drawCards } from "./spreads.js";

export function createReading(spreadId, question = "") {
  const spread = spreads.find(s => s.id === spreadId);

  if (!spread) {
    throw new Error("Расклад не найден");
  }

  const cards = drawCards(deck, spreadId);

  return {
    spread: spread.name,
    question,
    cards,
    createdAt: new Date().toISOString()
  };
}

export function getAvailableSpreads() {
  return spreads;
}
