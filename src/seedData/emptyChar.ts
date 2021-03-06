import { Character, JabEndType, FinalTargType } from "../types/character";

export let emptyChar: Character = {
  //General
  name: "",
  auth: "",
  phrase: "",
  jumps: 2, //2-6
  wallJump: false,
  weight: 100, //range in game=62-135 (150 for gigaBowser)
  specPerk: "",

  //Final Smash Attack
  finalSmash: {
    name: "",
    targetStyle: FinalTargType.Area,
    desc: "",
  },

  //Gen Attacks
  jab: {
    name: "",
    stages: 2, //2-4
    endType: JabEndType.Standard, //standard, choosable, infinite
    desc: "",
  },
  dash: {
    name: "",
    desc: "",
  },

  //Tilts
  tiltUp: {
    name: "",
    desc: "",
  },
  tiltSd: {
    name: "",
    desc: "",
  },
  tiltDn: {
    name: "",
    desc: "",
  },

  //Smashes
  smashUp: {
    name: "",
    desc: "",
  },
  smashSd: {
    name: "",
    desc: "",
  },
  smashDn: {
    name: "",
    desc: "",
  },

  //Specials
  specNt: {
    name: "",
    desc: "",
  },
  specUp: {
    name: "",
    desc: "",
  },
  specSd: {
    name: "",
    desc: "",
  },
  specDn: {
    name: "",
    desc: "",
  },

  //Aerials
  airNt: {
    name: "",
    desc: "",
  },
  airUp: {
    name: "",
    desc: "",
  },
  airFw: {
    name: "",
    desc: "",
  },
  airDn: {
    name: "",
    desc: "",
  },
  airBk: {
    name: "",
    desc: "",
  },

  //Grab and Throws
  grab: {
    name: "",
    desc: "",
  },
  pummel: {
    name: "",
    desc: "",
  },
  thrUp: {
    name: "",
    desc: "",
  },
  thrFw: {
    name: "",
    desc: "",
  },
  thrDn: {
    name: "",
    desc: "",
  },
  thrBk: {
    name: "",
    desc: "",
  },

  //Taunts
  tauntSd: {
    name: "",
    desc: "",
  },
  tauntUp: {
    name: "",
    desc: "",
  },
  tauntDn: {
    name: "",
    desc: "",
  },
};
