import { useState, useRef } from 'react';

const CARDS = [
  {
    name: 'The Fool',
    arcana: 'Major',
    meaning:
      'New beginnings, spontaneity, a leap into the unknown, naivety, free spirit',
  },
  {
    name: 'The Magician',
    arcana: 'Major',
    meaning: 'Willpower, skill, resourcefulness, taking action, manifestation',
  },
  {
    name: 'The High Priestess',
    arcana: 'Major',
    meaning: 'Intuition, mystery, inner knowledge, the subconscious, patience',
  },
  {
    name: 'The Empress',
    arcana: 'Major',
    meaning: 'Abundance, nurturing, creativity, nature, fertility, growth',
  },
  {
    name: 'The Emperor',
    arcana: 'Major',
    meaning: 'Authority, structure, stability, leadership, control, fatherhood',
  },
  {
    name: 'The Hierophant',
    arcana: 'Major',
    meaning:
      'Tradition, institutions, conformity, spiritual guidance, mentorship',
  },
  {
    name: 'The Lovers',
    arcana: 'Major',
    meaning:
      'Relationships, choices, alignment of values, partnerships, harmony',
  },
  {
    name: 'The Chariot',
    arcana: 'Major',
    meaning:
      'Determination, control, victory, willpower, ambition, overcoming obstacles',
  },
  {
    name: 'Strength',
    arcana: 'Major',
    meaning:
      'Courage, patience, inner strength, compassion, confidence, resilience',
  },
  {
    name: 'The Hermit',
    arcana: 'Major',
    meaning:
      'Solitude, introspection, inner guidance, withdrawal, soul-searching',
  },
  {
    name: 'Wheel of Fortune',
    arcana: 'Major',
    meaning: 'Cycles, fate, turning points, luck, change, destiny',
  },
  {
    name: 'Justice',
    arcana: 'Major',
    meaning:
      'Fairness, truth, cause and effect, accountability, law, decision-making',
  },
  {
    name: 'The Hanged Man',
    arcana: 'Major',
    meaning:
      'Pause, surrender, letting go, new perspective, suspension, waiting',
  },
  {
    name: 'Death',
    arcana: 'Major',
    meaning:
      'Endings, transformation, transition, letting go, change, inevitability',
  },
  {
    name: 'Temperance',
    arcana: 'Major',
    meaning:
      'Balance, moderation, patience, purpose, meaning, long-term vision',
  },
  {
    name: 'The Devil',
    arcana: 'Major',
    meaning:
      'Bondage, addiction, materialism, shadow self, dependency, restriction',
  },
  {
    name: 'The Tower',
    arcana: 'Major',
    meaning:
      'Sudden upheaval, chaos, revelation, disruption, collapse of false structures',
  },
  {
    name: 'The Star',
    arcana: 'Major',
    meaning:
      'Hope, renewal, serenity, inspiration, faith, calm after the storm',
  },
  {
    name: 'The Moon',
    arcana: 'Major',
    meaning:
      'Illusion, fear, the unconscious, confusion, uncertainty, hidden things',
  },
  {
    name: 'The Sun',
    arcana: 'Major',
    meaning: 'Joy, success, vitality, optimism, clarity, confidence, abundance',
  },
  {
    name: 'Judgement',
    arcana: 'Major',
    meaning:
      'Reflection, reckoning, awakening, absolution, evaluation, calling',
  },
  {
    name: 'The World',
    arcana: 'Major',
    meaning:
      'Completion, integration, accomplishment, wholeness, travel, fulfillment',
  },
  {
    name: 'Ace of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'New creative venture, inspiration, potential, enthusiasm',
  },
  {
    name: 'Two of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Planning, future vision, progress, decisions',
  },
  {
    name: 'Three of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Expansion, foresight, progress, leadership',
  },
  {
    name: 'Four of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Celebration, harmony, community, stability, milestones',
  },
  {
    name: 'Five of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Conflict, competition, tension, disagreement',
  },
  {
    name: 'Six of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Public recognition, victory, progress, self-confidence',
  },
  {
    name: 'Seven of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Perseverance, defensiveness, maintaining position',
  },
  {
    name: 'Eight of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Speed, swift action, movement, quick decisions, momentum',
  },
  {
    name: 'Nine of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Resilience, persistence, fatigue, boundaries, grit',
  },
  {
    name: 'Ten of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Burden, overwork, responsibility, stress',
  },
  {
    name: 'Page of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Exploration, excitement, freedom, new ideas',
  },
  {
    name: 'Knight of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Energy, passion, adventure, fearlessness, action',
  },
  {
    name: 'Queen of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Confidence, independence, charisma, determination',
  },
  {
    name: 'King of Wands',
    arcana: 'Minor',
    suit: 'Wands',
    meaning: 'Natural leader, vision, entrepreneur, big picture thinker',
  },
  {
    name: 'Ace of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'New feelings, emotional awakening, creativity, intuition',
  },
  {
    name: 'Two of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Unified love, partnership, mutual attraction, harmony',
  },
  {
    name: 'Three of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Friendship, celebration, creativity, community, collaboration',
  },
  {
    name: 'Four of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Contemplation, apathy, reevaluation, disconnection',
  },
  {
    name: 'Five of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Loss, regret, disappointment, grief',
  },
  {
    name: 'Six of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Nostalgia, happy memories, innocence, joy',
  },
  {
    name: 'Seven of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Opportunities, choices, wishful thinking, illusion',
  },
  {
    name: 'Eight of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Disappointment, abandonment, withdrawal, moving on',
  },
  {
    name: 'Nine of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Contentment, satisfaction, gratitude, wish fulfillment',
  },
  {
    name: 'Ten of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Harmony, alignment, emotional fulfillment, bliss',
  },
  {
    name: 'Page of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Creative opportunities, curiosity, idealism, sensitivity',
  },
  {
    name: 'Knight of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Creativity, romance, charm, imagination',
  },
  {
    name: 'Queen of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Compassionate, emotionally stable, intuitive, in flow',
  },
  {
    name: 'King of Cups',
    arcana: 'Minor',
    suit: 'Cups',
    meaning: 'Emotionally balanced, compassionate, diplomatic, wise',
  },
  {
    name: 'Ace of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Breakthroughs, new ideas, mental clarity, truth',
  },
  {
    name: 'Two of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Difficult choices, indecision, stalemate, avoidance',
  },
  {
    name: 'Three of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Heartbreak, emotional pain, sorrow, betrayal',
  },
  {
    name: 'Four of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Rest, relaxation, contemplation, recuperation',
  },
  {
    name: 'Five of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Conflict, disagreements, defeat, winning at all costs',
  },
  {
    name: 'Six of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Transition, change, releasing baggage, moving on',
  },
  {
    name: 'Seven of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Betrayal, deception, getting away with something, strategy',
  },
  {
    name: 'Eight of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Negative thoughts, self-imposed restriction, victim mentality',
  },
  {
    name: 'Nine of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Anxiety, worry, fear, depression, overwhelm',
  },
  {
    name: 'Ten of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Painful endings, deep wounds, betrayal, loss, rock bottom',
  },
  {
    name: 'Page of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'New ideas, curiosity, thirst for knowledge',
  },
  {
    name: 'Knight of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Ambitious, action-oriented, fast-thinking, assertive',
  },
  {
    name: 'Queen of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Independent, clear boundaries, direct communication, truth',
  },
  {
    name: 'King of Swords',
    arcana: 'Minor',
    suit: 'Swords',
    meaning: 'Mental clarity, intellectual power, authority, truth',
  },
  {
    name: 'Ace of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'New financial opportunity, manifestation, abundance, prosperity',
  },
  {
    name: 'Two of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Multiple priorities, time management, adaptability',
  },
  {
    name: 'Three of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Teamwork, collaboration, learning, building',
  },
  {
    name: 'Four of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Saving, security, conservatism, scarcity, control',
  },
  {
    name: 'Five of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Financial loss, insecurity, worry, isolation',
  },
  {
    name: 'Six of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Generosity, charity, giving, sharing wealth',
  },
  {
    name: 'Seven of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Long-term view, perseverance, investment, patience',
  },
  {
    name: 'Eight of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Apprenticeship, mastery, skill development, diligence',
  },
  {
    name: 'Nine of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Abundance, luxury, self-sufficiency, financial independence',
  },
  {
    name: 'Ten of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Wealth, financial security, long-term success, legacy',
  },
  {
    name: 'Page of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Manifestation, financial opportunity, skill development',
  },
  {
    name: 'Knight of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Hard work, productivity, routine, methodical',
  },
  {
    name: 'Queen of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Practical, nurturing, down-to-earth, work-life balance',
  },
  {
    name: 'King of Pentacles',
    arcana: 'Minor',
    suit: 'Pentacles',
    meaning: 'Abundance, prosperity, security, discipline, reliable',
  },
];

const CARD_IMAGES = {
  'The Fool':
    'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
  'The Magician':
    'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
  'The High Priestess':
    'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg',
  'The Empress':
    'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg',
  'The Emperor':
    'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg',
  'The Hierophant':
    'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg',
  'The Lovers':
    'https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg',
  'The Chariot':
    'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
  Strength:
    'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
  'The Hermit':
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg',
  'Wheel of Fortune':
    'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg',
  Justice:
    'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg',
  'The Hanged Man':
    'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
  Death:
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg',
  Temperance:
    'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg',
  'The Devil':
    'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg',
  'The Tower':
    'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
  'The Star':
    'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg',
  'The Moon':
    'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg',
  'The Sun':
    'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg',
  Judgement:
    'https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg',
  'The World':
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg',
  'Ace of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg',
  'Two of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg',
  'Three of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg',
  'Four of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg',
  'Five of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg',
  'Six of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg',
  'Seven of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg',
  'Eight of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg',
  'Nine of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg',
  'Ten of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg',
  'Page of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg',
  'Knight of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg',
  'Queen of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/b/b0/Wands13.jpg',
  'King of Wands':
    'https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg',
  'Ace of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg',
  'Two of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg',
  'Three of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg',
  'Four of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg',
  'Five of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg',
  'Six of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg',
  'Seven of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg',
  'Eight of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg',
  'Nine of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg',
  'Ten of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg',
  'Page of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg',
  'Knight of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg',
  'Queen of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg',
  'King of Cups':
    'https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg',
  'Ace of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg',
  'Two of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg',
  'Three of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg',
  'Four of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg',
  'Five of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg',
  'Six of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg',
  'Seven of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg',
  'Eight of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg',
  'Nine of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg',
  'Ten of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg',
  'Page of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg',
  'Knight of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg',
  'Queen of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg',
  'King of Swords':
    'https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg',
  'Ace of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg',
  'Two of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg',
  'Three of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg',
  'Four of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg',
  'Five of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg',
  'Six of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg',
  'Seven of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg',
  'Eight of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg',
  'Nine of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg',
  'Ten of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg',
  'Page of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg',
  'Knight of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg',
  'Queen of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg',
  'King of Pentacles':
    'https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg',
};

const TEMPLATES = {
  personal: [
    'How will my day go today?',
    'What should I focus on to make progress?',
    'What is blocking me right now?',
    'What am I not seeing clearly?',
    'How do I manage my current workload?',
  ],
  team: [
    'What should be our sprint goal?',
    'What risk are we currently ignoring?',
    'How can we improve our flow this week?',
    'What is the team not saying out loud?',
    'Where is our bandwidth being misallocated?',
  ],
};
const POSITIONS = ['Past', 'Present', 'Future'];
const drawCards = (n) => [...CARDS].sort(() => Math.random() - 0.5).slice(0, n);

const C = {
  adonis: '#FBD217',
  burgundy: '#6B5B8E', // replaced: deep lavender instead of burgundy
  redViolet: '#9B89C4', // replaced: soft mid-lavender instead of red violet
  cardinal: '#BF152C', // unused but keeping for reference
  dingley: '#657A42',
  // Derived
  cream: '#FEFAF2',
  paper: '#FDF6E8',
  dingleyLight: '#EEF4E6',
  lavLight: '#F0EDF8', // lavender tint for hover/bg moments
  text: '#2a1f10',
  mutedText: '#6b5744',
};

const fH = "'Playfair Display', Georgia, serif";
const fB = "'Inter', 'Helvetica Neue', sans-serif";

// little decorative doodle accents
const Dots = ({ color }) => (
  <span style={{ letterSpacing: 3, color, fontSize: 10 }}>✦ ✦ ✦</span>
);

export default function AgileOracle() {
  const [mode, setMode] = useState('personal');
  const [question, setQuestion] = useState('');
  const [spread, setSpread] = useState(1);
  const [cards, setCards] = useState(null);
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imgErrors, setImgErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState([]);
  const resultsRef = useRef(null);

  const reset = () => {
    setCards(null);
    setReadings([]);
    setQuestion('');
    setImgErrors({});
    setCopied(false);
    setRevealed([]);
  };

  const getReading = async (card, position, q, m) => {
    const posCtx =
      spread === 3
        ? `This card occupies the "${position}" position in a Past / Present / Future spread.`
        : '';
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `You are the Agile Oracle — a seasoned agilist channeling the wisdom of Jeff Sutherland (co-creator of Scrum) and the Agile Manifesto. Calm authority. You've seen every dysfunction, waste, and impediment — and lived to refactor it.

Grounded in: sprints, velocity, WIP limits, Definition of Done, impediments, retrospectives, standups, backlog refinement, flow efficiency, cycle time, Kanban, psychological safety, eliminating waste (muda).

Tone: direct, measured, occasionally wry. Not mystical. Say "the card surfaces a pattern" not "the cosmos speaks."

${
  m === 'team'
    ? 'TEAM MODE: sprint health, team dynamics, WIP, impediment removal, retrospective themes, delivery flow, systemic waste.'
    : 'PERSONAL MODE: focus, personal WIP, blockers, prioritization, energy, professional growth.'
}

3-4 sentences. No bullets. Confident prose like a great retro facilitator.`,
        messages: [
          {
            role: 'user',
            content: `Practitioner: "${q}"\nCard: ${card.name}\nMeaning: ${card.meaning}\n${posCtx}\n\nPractical. Direct. Surface the signal.`,
          },
        ],
      }),
    });
    const data = await res.json();
    return (
      data.content?.[0]?.text ||
      'The Oracle is in a conflicting meeting. Raise an impediment.'
    );
  };

  const doReading = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setCards(null);
    setReadings([]);
    setImgErrors({});
    setCopied(false);
    setRevealed([]);
    const drawn = drawCards(spread);
    drawn.forEach((_, i) =>
      setTimeout(() => setRevealed((r) => [...r, i]), 200 + i * 380)
    );
    setCards(drawn);
    try {
      const results = await Promise.all(
        drawn.map((c, i) => getReading(c, POSITIONS[i], question, mode))
      );
      setReadings(results);
    } catch {
      setReadings(
        drawn.map(
          () =>
            'The Oracle encountered an unplanned outage. Raise an impediment.'
        )
      );
    }
    setLoading(false);
    setTimeout(
      () =>
        resultsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        }),
      300
    );
  };

  const copyForSlack = () => {
    if (!cards || !readings.length) return;
    const txt = [
      `🃏 *Agile Oracle Reading*`,
      `*Mode:* ${mode === 'team' ? 'Team / Agile' : 'Personal'} | *Spread:* ${
        spread === 1 ? 'Single Card' : 'Past / Present / Future'
      }`,
      `*Question:* ${question}`,
      ``,
      ...cards.map(
        (c, i) =>
          `${
            spread === 3 ? `*${POSITIONS[i]}: ${c.name}*` : `*Card: ${c.name}*`
          }\n${readings[i] || 'Reading pending.'}`
      ),
      ``,
      `_Inspect & Adapt. All signals subject to retrospective._`,
    ].join('\n');
    navigator.clipboard.writeText(txt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: C.cream,
        fontFamily: fB,
        color: C.text,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing:border-box; }
        ::selection { background:${C.adonis}; color:${C.text}; }
        @media (prefers-reduced-motion:reduce) { * { animation:none !important; transition:none !important; } }
        textarea:focus { outline:none; border-color:${C.dingley} !important; }
        .chip:hover { border-color:${C.dingley} !important; background:${C.dingleyLight} !important; }
      `}</style>

      {/* ── HERO ── */}
      <header
        style={{
          background: `linear-gradient(160deg, ${C.dingley} 0%, #7d9452 35%, #9fb86a 60%, #cfe0a8 82%, ${C.cream} 100%)`,
          padding: '0 0 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        {[
          { s: 320, t: -80, r: -80, o: 0.08 },
          { s: 200, t: 40, r: 60, o: 0.06 },
          { s: 150, b: -40, l: 40, o: 0.07 },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: p.s,
              height: p.s,
              borderRadius: '50%',
              background: 'white',
              opacity: p.o,
              top: p.t,
              right: p.r,
              bottom: p.b,
              left: p.l,
              pointerEvents: 'none',
            }}
          />
        ))}

        {/* Top bar */}
        <div
          style={{
            padding: '14px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.25)',
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
              fontFamily: fB,
            }}
          >
            Est. 2026 · Alyssa Layden
          </span>
          <span
            style={{
              fontSize: 10,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
              fontFamily: fB,
            }}
          >
            Inspect &amp; Adapt
          </span>
        </div>

        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            padding: '52px 32px 0',
            textAlign: 'center',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-block',
              background: C.adonis,
              color: C.text,
              fontSize: 10,
              letterSpacing: 4,
              textTransform: 'uppercase',
              fontWeight: 700,
              padding: '6px 18px',
              borderRadius: 20,
              marginBottom: 28,
              fontFamily: fB,
            }}
          >
            ✦ The Official Journal of Agile Signal Detection ✦
          </div>

          {/* Big title */}
          <h1
            style={{
              margin: '0 0 20px',
              fontFamily: fH,
              fontSize: 'clamp(56px,10vw,104px)',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-1px',
            }}
          >
            <span style={{ color: 'white', display: 'block' }}>THE</span>
            <span
              style={{ color: 'white', fontStyle: 'italic', display: 'block' }}
            >
              AGILE
            </span>
            <span style={{ color: 'white', display: 'block' }}>ORACLE</span>
          </h1>

          <div style={{ margin: '20px auto 0', maxWidth: 500 }}>
            <Dots color="rgba(255,255,255,0.6)" />
            <p
              style={{
                margin: '16px 0 0',
                fontSize: 16,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.9)',
                fontFamily: fH,
                fontStyle: 'italic',
              }}
            >
              Draw a card. Describe your situation. Let the deck surface what
              your retrospective hasn't.
            </p>
          </div>
        </div>

        {/* Wavy bottom */}
        <svg
          viewBox="0 0 1440 60"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            display: 'block',
          }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill={C.cream}
          />
        </svg>
      </header>

      {/* ── MAIN ── */}
      <main
        style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px 80px' }}
      >
        {/* Input card */}
        <div
          style={{
            background: C.paper,
            border: `2px solid ${C.dingleyLight}`,
            borderRadius: 20,
            padding: '36px 32px',
            marginBottom: 32,
            boxShadow: '0 4px 24px rgba(101,122,66,0.1)',
          }}
        >
          {/* Mode */}
          <div style={{ marginBottom: 28 }}>
            <SectionLabel color={C.dingley}>Reading Mode</SectionLabel>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                ['personal', '🌿 Personal'],
                ['team', '🌱 Team / Agile'],
              ].map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => {
                    setMode(val);
                    setQuestion('');
                  }}
                  style={{
                    flex: 1,
                    padding: '12px 0',
                    borderRadius: 12,
                    border: `2px solid ${
                      mode === val ? C.dingley : 'rgba(101,122,66,0.25)'
                    }`,
                    background: mode === val ? C.dingley : 'white',
                    color: mode === val ? 'white' : C.dingley,
                    fontSize: 13,
                    cursor: 'pointer',
                    fontFamily: fB,
                    fontWeight: 600,
                    minHeight: 48,
                    transition: 'all 0.15s',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Templates */}
          <div style={{ marginBottom: 28 }}>
            <SectionLabel color={C.dingley}>Suggested Inquiries</SectionLabel>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {TEMPLATES[mode].map((t) => (
                <button
                  key={t}
                  className="chip"
                  onClick={() => setQuestion(t)}
                  style={{
                    padding: '7px 14px',
                    borderRadius: 20,
                    border: `1.5px solid ${
                      question === t ? C.dingley : 'rgba(101,122,66,0.3)'
                    }`,
                    background: question === t ? C.dingleyLight : 'white',
                    color: question === t ? C.dingley : C.mutedText,
                    fontSize: 12,
                    cursor: 'pointer',
                    fontFamily: fB,
                    minHeight: 34,
                    transition: 'all 0.15s',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Question */}
          <div style={{ marginBottom: 28 }}>
            <SectionLabel color={C.dingley}>Your Inquiry</SectionLabel>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Describe your situation. The Oracle has bandwidth for this."
              rows={3}
              style={{
                width: '100%',
                padding: '14px 16px',
                fontSize: 15,
                fontFamily: fB,
                border: `2px solid rgba(101,122,66,0.25)`,
                background: 'white',
                color: C.text,
                resize: 'vertical',
                lineHeight: 1.6,
                borderRadius: 12,
              }}
            />
          </div>

          {/* Spread */}
          <div style={{ marginBottom: 28 }}>
            <SectionLabel color={C.dingley}>Spread</SectionLabel>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                [1, '🃏 Single Card'],
                [3, '🌙 Past · Present · Future'],
              ].map(([n, label]) => (
                <button
                  key={n}
                  onClick={() => setSpread(n)}
                  style={{
                    flex: 1,
                    padding: '12px 0',
                    borderRadius: 12,
                    border: `2px solid ${
                      spread === n ? C.dingley : 'rgba(101,122,66,0.25)'
                    }`,
                    background: spread === n ? C.dingley : 'white',
                    color: spread === n ? 'white' : C.dingley,
                    fontSize: 13,
                    cursor: 'pointer',
                    fontFamily: fB,
                    fontWeight: 600,
                    minHeight: 48,
                    transition: 'all 0.15s',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={doReading}
            disabled={loading || !question.trim()}
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: 14,
              background:
                loading || !question.trim() ? C.lavLight : C.redViolet,
              border: `2px solid ${
                loading || !question.trim()
                  ? 'rgba(155,137,196,0.3)'
                  : C.burgundy
              }`,
              color: loading || !question.trim() ? C.redViolet : 'white',
              fontSize: 13,
              letterSpacing: 4,
              textTransform: 'uppercase',
              cursor: loading || !question.trim() ? 'not-allowed' : 'pointer',
              fontFamily: fB,
              fontWeight: 700,
              minHeight: 58,
              boxShadow:
                loading || !question.trim()
                  ? 'none'
                  : `0 4px 16px rgba(112,5,13,0.25)`,
              transition: 'all 0.2s',
            }}
          >
            {loading ? '✦ Consulting the Cards ✦' : '✦ Draw Your Reading ✦'}
          </button>
        </div>

        {/* ── RESULTS ── */}
        {cards && (
          <div ref={resultsRef}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <Dots color={C.dingley} />
              <h2
                style={{
                  margin: '12px 0 4px',
                  fontFamily: fH,
                  fontSize: 26,
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: C.redViolet,
                }}
              >
                {spread === 1 ? 'Your Reading' : 'Past · Present · Future'}
              </h2>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: C.dingley,
                  fontFamily: fB,
                }}
              >
                {mode === 'team' ? 'Team Mode' : 'Personal Mode'}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {cards.map((card, i) => (
                <div
                  key={i}
                  style={{
                    background: C.paper,
                    border: `2px solid ${C.dingleyLight}`,
                    borderRadius: 20,
                    padding: '28px',
                    boxShadow: '0 4px 24px rgba(101,122,66,0.08)',
                    opacity: revealed.includes(i) ? 1 : 0,
                    transform: revealed.includes(i)
                      ? 'translateY(0) scale(1)'
                      : 'translateY(16px) scale(0.98)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                  }}
                >
                  {spread === 3 && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        marginBottom: 16,
                      }}
                    >
                      <div
                        style={{
                          height: 2,
                          width: 20,
                          background: C.adonis,
                          borderRadius: 2,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 10,
                          letterSpacing: 4,
                          textTransform: 'uppercase',
                          color: C.dingley,
                          fontFamily: fB,
                          fontWeight: 700,
                        }}
                      >
                        {POSITIONS[i]}
                      </span>
                    </div>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      gap: 28,
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                    }}
                  >
                    {/* Card image */}
                    <div style={{ flexShrink: 0 }}>
                      {!imgErrors[i] && CARD_IMAGES[card.name] ? (
                        <div
                          style={{
                            borderRadius: 12,
                            overflow: 'hidden',
                            border: `3px solid white`,
                            boxShadow: `0 0 0 2px ${C.dingley}, 6px 6px 0 ${C.adonis}`,
                            width: 140,
                          }}
                        >
                          <img
                            src={CARD_IMAGES[card.name]}
                            alt={card.name}
                            onError={() =>
                              setImgErrors((e) => ({ ...e, [i]: true }))
                            }
                            style={{ width: 140, display: 'block' }}
                          />
                        </div>
                      ) : (
                        <div
                          style={{
                            width: 140,
                            height: 226,
                            borderRadius: 12,
                            background: C.dingleyLight,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 0 0 2px ${C.dingley}, 6px 6px 0 ${C.adonis}`,
                          }}
                        >
                          <span style={{ fontSize: 40, color: C.dingley }}>
                            ✦
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <h3
                        style={{
                          margin: '0 0 4px',
                          fontFamily: fH,
                          fontSize: 28,
                          fontWeight: 900,
                          color: C.redViolet,
                          lineHeight: 1.1,
                        }}
                      >
                        {card.name}
                      </h3>
                      <div
                        style={{
                          fontSize: 11,
                          color: C.dingley,
                          letterSpacing: 2,
                          textTransform: 'uppercase',
                          fontFamily: fB,
                          marginBottom: 12,
                        }}
                      >
                        {card.arcana} Arcana{card.suit ? ` · ${card.suit}` : ''}
                      </div>
                      <p
                        style={{
                          margin: '0 0 16px',
                          fontSize: 13,
                          color: C.mutedText,
                          fontFamily: fB,
                          fontStyle: 'italic',
                          lineHeight: 1.6,
                          paddingBottom: 12,
                          borderBottom: `1px dashed rgba(101,122,66,0.3)`,
                        }}
                      >
                        {card.meaning}
                      </p>

                      {readings[i] ? (
                        <div
                          style={{
                            background: `linear-gradient(135deg, ${C.burgundy}, #4a3d6e)`,
                            borderRadius: 12,
                            padding: '18px 20px',
                            borderLeft: `4px solid ${C.adonis}`,
                          }}
                        >
                          <div
                            style={{
                              fontSize: 9,
                              letterSpacing: 4,
                              textTransform: 'uppercase',
                              color: C.adonis,
                              fontFamily: fB,
                              marginBottom: 8,
                            }}
                          >
                            Oracle Reading
                          </div>
                          <p
                            style={{
                              margin: 0,
                              color: 'rgba(255,250,242,0.95)',
                              fontSize: 15,
                              lineHeight: 1.9,
                              fontFamily: fB,
                            }}
                          >
                            {readings[i]}
                          </p>
                        </div>
                      ) : (
                        <div
                          style={{
                            background: C.dingleyLight,
                            borderRadius: 12,
                            padding: '18px 20px',
                            color: C.dingley,
                            fontSize: 13,
                            fontFamily: fB,
                            fontStyle: 'italic',
                          }}
                        >
                          Surfacing signal…
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {readings.length === (cards?.length || 0) && (
              <div
                style={{
                  marginTop: 24,
                  display: 'flex',
                  gap: 10,
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={copyForSlack}
                  style={{
                    padding: '12px 28px',
                    borderRadius: 10,
                    border: `2px solid ${C.dingley}`,
                    background: copied ? C.dingley : 'white',
                    color: copied ? 'white' : C.dingley,
                    fontSize: 11,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontFamily: fB,
                    fontWeight: 600,
                    minHeight: 44,
                    transition: 'all 0.15s',
                  }}
                >
                  {copied ? '✓ Copied!' : 'Copy for Slack'}
                </button>
                <button
                  onClick={reset}
                  style={{
                    padding: '12px 28px',
                    borderRadius: 10,
                    border: `2px solid rgba(181,53,114,0.3)`,
                    background: 'white',
                    color: C.redViolet,
                    fontSize: 11,
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontFamily: fB,
                    fontWeight: 600,
                    minHeight: 44,
                  }}
                >
                  New Reading
                </button>
              </div>
            )}
          </div>
        )}

        <footer
          style={{
            marginTop: 72,
            textAlign: 'center',
            paddingTop: 24,
            borderTop: `2px dashed rgba(101,122,66,0.25)`,
          }}
        >
          <Dots color={C.dingley} />
          <div
            style={{
              marginTop: 12,
              fontFamily: fH,
              fontSize: 18,
              fontWeight: 900,
              fontStyle: 'italic',
              color: C.redViolet,
            }}
          >
            The Agile Oracle™
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: C.dingley,
              marginTop: 6,
              fontFamily: fB,
            }}
          >
            Inspect · Adapt · Eliminate Waste
          </div>
        </footer>
      </main>
    </div>
  );
}

function SectionLabel({ children, color }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
      }}
    >
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: color,
          opacity: 0.3,
        }}
      />
      <span
        style={{
          fontSize: 10,
          letterSpacing: 4,
          textTransform: 'uppercase',
          color,
          fontFamily: "'Inter',sans-serif",
          fontWeight: 700,
        }}
      >
        {children}
      </span>
    </div>
  );
}
