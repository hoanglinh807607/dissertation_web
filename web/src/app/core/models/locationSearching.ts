import {Deserializable} from './deserializable';

export class LocationSearching implements Deserializable {
  latitude = 0;
  longitude = 0;
  address = '';

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  update(lat: number, longtitude: number, address: string) {
    this.latitude = lat;
    this.longitude = longtitude;
    this.address = address;
    return this;
  }

  isEmpty() {
    return !this.longitude || !this.latitude || !this.address;
  }
}
