import { IDIRegister } from "@back/types/DI.type";

export class DIContainer {
  private instances = new Map<string, any>();

  register<K extends keyof IDIRegister>(key: K, instance: IDIRegister[K]) {
    this.instances.set(key, instance);
  }

  get<K extends keyof IDIRegister>(key: K): IDIRegister[K] {
    const instance = this.instances.get(key);
    if (!instance) throw new Error(`Dependency ${key} not found`);
    return instance;
  }
}
