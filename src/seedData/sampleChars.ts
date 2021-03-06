import { Character, JabEndType, FinalTargType } from "../types/character";

export const sampleChars: Character[] = [
  {
    name: "Dovahkiin",
    auth: "Scott Alan",
    phrase: "By His Honor is Sworn",
    jumps: 2,
    wallJump: false,
    weight: 111,
    specPerk: "When opponent is killed, Dovahkiin absorbs the soul of the fallen, converting it into an increase of his Final Smash meter",
    finalSmash: {
      name: "Breath of Paarthurnax",
      targetStyle: FinalTargType.Reticle,
      desc: "Paarthurnax descends behind stage. Dovahkiin aims reticle to strike opponents with a giant fire breath",
    },
    jab: {
      name: "Shield Bash",
      stages: 3,
      endType: JabEndType.Infinite,
      desc: "Bashes twice with shield before double wielding blades",
    },
    dash: {
      name: "Shield Charge",
      desc: "Runs over opponent with shield causing damage and major knockback",
    },
    tiltSd: {
      name: "Sword Slash",
      desc: "Quick, sweeping attack with sword",
    },
    tiltUp: {
      name: "Up Slash",
      desc: "Slashes upwards with a sword",
    },
    tiltDn: {
      name: "Dagger Strike",
      desc: "Sneaks around opponent for a back stab",
    },
    smashSd: {
      name: "Greatsword Sweep",
      desc: "Huge, powerful swing of a massive greatsword",
    },
    smashUp: {
      name: "Axe Arc",
      desc: "Overhead swing of a huge battleaxe",
    },
    smashDn: {
      name: "Warhammer Slam",
      desc: "Slams the ground with a mighty warhammer",
    },
    specNt: {
      name: "Arrow Shot",
      desc: "Draws bow and shoots an arrow",
    },
    specSd: {
      name: "Fus Ro Dah",
      desc: "Blasts enemies with a magical shout. Can be charged in three levels",
    },
    specUp: {
      name: "Dragon Flight",
      desc: "A dragon materializes, grabbing the dragonborn and flying him into the air",
    },
    specDn: {
      name: "Firebolt/Flames",
      desc: "If tapped, shoots a bolt of fire. If held, releases a continuous gout of flame a shorter distance",
    },
    airNt: {
      name: "Aerial Arrow",
      desc: "Quickly fires an arrow",
    },
    airFw: {
      name: "Sword Arc",
      desc: "Forward swipe with a sword",
    },
    airUp: {
      name: "Lightning Blade",
      desc: "Quick upwards strike with an electrically-enchanted blade",
    },
    airDn: {
      name: "Frost Strike",
      desc: "Downward blow with an ice-enchanted blade. Causes temporary slowness to hit enemy",
    },
    airBk: {
      name: "Counter Strike",
      desc: "If hit by an opponent, a quick dodge and counterstrike with sword",
    },
    grab: {
      name: "Grab",
      desc: "Grabs the opponent with hands",
    },
    pummel: {
      name: "Dagger Jab",
      desc: "Stabs with dagger while holding opponent",
    },
    thrFw: {
      name: "Fus",
      desc: "Launches opponent with a magical shout",
    },
    thrUp: {
      name: "Fire Spout",
      desc: "Throws opponent overhead and launches an upward spout of flame",
    },
    thrDn: {
      name: "Freeze Lock",
      desc: "Throws opponent on ground and blasts them with ice. Causes significant temporary slowness",
    },
    thrBk: {
      name: "Reverse Fus",
      desc: "Spins opponent around and launches them with a magical shout",
    },
    tauntSd: {
      name: "Shield Bang",
      desc: "Bangs shield with sword",
    },
    tauntUp: {
      name: "Fire Spout",
      desc: "Shoots a small blast of fire into the air",
    },
    tauntDn: {
      name: "Frost Spread",
      desc: "Covers the ground with frost",
    },
  },
  {
    //General
    name: "Dovahkiin2",
    auth: "Scott Alan",
    phrase: "By His Honor is Sworn",
    jumps: 2,
    weight: 100,
    specPerk: "When opponent is killed, Dovahkiin absorbs the soul of the fallen, converting it into an increase of his Final Smash meter",
    wallJump: false,

    //Gen Attacks
    jab: {
      name: "Shield Bash",
      stages: 3,
      endType: JabEndType.Infinite,
      desc: "Bashes twice with shield before double wielding blades",
    },
    dash: {
      name: "Shield Charge",
      desc: "Runs over opponent with shield causing damage and major knockback",
    },

    //Tilts
    tiltUp: {
      name: "Up Slash",
      desc: "Slashes upwards with a sword",
    },
    tiltSd: {
      name: "Sword Slash",
      desc: "Quick, sweeping attack with sword",
    },
    tiltDn: {
      name: "Dagger Strike",
      desc: "Sneaks around opponent for a back stab",
    },

    //Smashes
    smashUp: {
      name: "Axe Arc",
      desc: "Overhead swing of a huge battleaxe",
    },
    smashSd: {
      name: "Greatsword Sweep",
      desc: "Huge, powerful swing of a massive greatsword",
    },
    smashDn: {
      name: "Warhammer Slam",
      desc: "Slams the ground with a mighty warhammer",
    },

    //Specials
    specNt: {
      name: "Arrow Shot",
      desc: "Draws bow and shoots an arrow",
    },
    specUp: {
      name: "Dragon Flight",
      desc: "A dragon materializes, grabbing the dragonborn and flying him into the air",
    },
    specSd: {
      name: "Fus Ro Dah",
      desc: "Blasts enemies with a magical shout. Can be charged in three levels",
    },
    specDn: {
      name: "Firebolt/Flames",
      desc: "If tapped, shoots a bolt of fire. If held, releases a continuous gout of flame a shorter distance",
    },

    //Aerials
    airNt: {
      name: "Aerial Arrow",
      desc: "Quickly fires an arrow",
    },
    airUp: {
      name: "Lightning Blade",
      desc: "Quick upwards strike with an electrically-enchanted blade",
    },
    airFw: {
      name: "Sword Arc",
      desc: "Forward swipe with a sword",
    },
    airDn: {
      name: "Frost Strike",
      desc: "Downward blow with an ice-enchanted blade. Causes temporary slowness to hit enemy",
    },
    airBk: {
      name: "Counter Strike",
      desc: "If hit by an opponent, a quick dodge and counterstrike with sword",
    },

    //Grab and Throws
    grab: {
      name: "Grab",
      desc: "Grabs the opponent with hands",
    },
    pummel: {
      name: "Dagger Jab",
      desc: "Stabs with dagger while holding opponent",
    },
    thrUp: {
      name: "Fire Spout",
      desc: "Throws opponent overhead and launches an upward spout of flame",
    },
    thrFw: {
      name: "Fus",
      desc: "Launches opponent with a magical shout",
    },
    thrDn: {
      name: "Freeze Lock",
      desc: "Throws opponent on ground and blasts them with ice. Causes significant temporary slowness",
    },
    thrBk: {
      name: "Reverse Fus",
      desc: "Spins opponent around and launches them with a magical shout",
    },

    //Taunts
    tauntSd: {
      name: "Shield Bang",
      desc: "Bangs shield with sword",
    },
    tauntUp: {
      name: "Fire Spout",
      desc: "Shoots a small blast of fire into the air",
    },
    tauntDn: {
      name: "Frost Spread",
      desc: "Covers the ground with frost",
    },

    //Final
    finalSmash: {
      name: "Breath of Paarthurnax",
      targetStyle: FinalTargType.Reticle,
      desc: "Paarthurnax descends behind stage. Dovahkiin aims reticle to strike opponents with a giant fire breath",
    },
  },
];
