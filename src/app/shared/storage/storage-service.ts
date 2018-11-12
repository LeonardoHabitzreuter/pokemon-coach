export class StorageService {
  public updateStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  public get(key) {
    return JSON.parse(localStorage.getItem(key))
  }
}
