export class StorageService {
  public updateStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
