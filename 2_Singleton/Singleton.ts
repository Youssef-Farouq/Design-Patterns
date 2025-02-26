class Singleton {
  public static instance: Singleton; //Public or Private?

  private constructor() {
    console.log("Singleton instance created");
  }

  public static getInstance(): Singleton {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public sayHello() {
    console.log("Hello from Singleton!");
  }
}

// Usage

function clientCode() {
  const s1 = Singleton.instance;
  const s2 = Singleton.instance;

  if (s1 === s2) {
    console.log("Singleton works");
  } else {
    console.log("Singleton failed");
  }
}

clientCode();
