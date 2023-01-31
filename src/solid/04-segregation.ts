interface Bird {
  eat(): void
}

interface FlyingBird {
  fly(): void
}

interface RunningBird {
  run(): void
}

interface SwimmerBird {
  swim(): void
}

class Tucan implements Bird, FlyingBird {
  fly(): void {}
  eat(): void {}
}

class Humminbird implements Bird, FlyingBird {
  fly(): void {}
  eat(): void {}
}

class Ostrich implements Bird, RunningBird {
  eat(): void {}
  run(): void {}
}

class Penguin implements Bird, SwimmerBird {
  swim(): void {}
  eat(): void {}
}
