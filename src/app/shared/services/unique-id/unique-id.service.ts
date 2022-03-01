import { Injectable } from '@angular/core';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error('Prefix can not be empty');
    }

    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;

    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneretedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }
  private generateUniqueId(): string {
    return v4();
  }
}
