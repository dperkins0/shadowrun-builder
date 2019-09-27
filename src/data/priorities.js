const metatype = {
  a: [
    {
      metatype: 'Dwarf',
      adjustmentPoints: 13
    },
    {
      metatype: 'Ork',
      adjustmentPoints: 13
    },
    {
      metatype: 'Troll',
      adjustmentPoints: 13
    }
  ],
  b: [
    {
      metatype: 'Dwarf',
      adjustmentPoints: 11
    },
    {
      metatype: 'Ork',
      adjustmentPoints: 11
    },
    {
      metatype: 'Elf',
      adjustmentPoints: 11
    },
    {
      metatype: 'Troll',
      adjustmentPoints: 11
    }
  ],
  c: [
    {
      metatype: 'Dwarf',
      adjustmentPoints: 9
    },
    {
      metatype: 'Ork',
      adjustmentPoints: 9
    },
    {
      metatype: 'Elf',
      adjustmentPoints: 9
    },
    {
      metatype: 'Human',
      adjustmentPoints: 9
    },
    {
      metatype: 'Troll',
      adjustmentPoints: 9
    }
  ],
  d: [
    {
      metatype: 'Dwarf',
      adjustmentPoints: 4
    },
    {
      metatype: 'Ork',
      adjustmentPoints: 4
    },
    {
      metatype: 'Elf',
      adjustmentPoints: 4
    },
    {
      metatype: 'Human',
      adjustmentPoints: 4
    },
    {
      metatype: 'Troll',
      adjustmentPoints: 4
    }
  ],
  e: [
    {
      metatype: 'Dwarf',
      adjustmentPoints: 1
    },
    {
      metatype: 'Ork',
      adjustmentPoints: 1
    },
    {
      metatype: 'Elf',
      adjustmentPoints: 1
    },
    {
      metatype: 'Human',
      adjustmentPoints: 1
    },
    {
      metatype: 'Troll',
      adjustmentPoints: 1
    }
  ]
}

const attributes = {
  a: 24,
  b: 16,
  c: 12,
  d: 8,
  e: 2
}

const skills = {
  a: 32,
  b: 24,
  c: 20,
  d: 16,
  e: 10
}

const resources = {
  a: 450000,
  b: 275000,
  c: 150000,
  d: 50000,
  e: 8000
}

const magic = {
  a: {
    full: 4,
    aspected: 5,
    mysticAdept: 4,
    adept: 4,
    technomancer: 4
  },
  b: {
    full: 3,
    aspected: 4,
    mysticAdept: 3,
    adept: 3,
    technomancer: 3
  },
  c: {
    full: 2,
    aspected: 3,
    mysticAdept: 2,
    adept: 2,
    technomancer: 2
  },
  d: {
    full: 1,
    aspected: 2,
    mysticAdept: 1,
    adept: 1,
    technomancer: 1
  },
  e: {
    full: 0,
    aspected: 0,
    mysticAdept: 0,
    adept: 0,
    technomancer: 0
  }
}

export default {
  metatype,
  attributes,
  skills,
  magic,
  resources
}

export { metatype, attributes, skills, magic, resources }
