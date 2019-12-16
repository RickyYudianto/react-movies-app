import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

export function convertJsonToArrayOfObject<T,V>(classType: ClassType<T>, json: V[]): T[] {
  return plainToClass(classType, json);
}

export function convertJsonToObject<T,V>(classType: ClassType<T>, json: V): T {
  return plainToClass(classType, json);
}

export function generateRateColor(rate: number) {
  if (rate >= 7.0) {
    return 'green';
  } else if(rate >= 4.0) {
    return 'yellow';
  }

  return 'red';
}
