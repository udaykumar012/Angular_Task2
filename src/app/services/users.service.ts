import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class UserSevice {
    users = [
        {"id":"User1","firstName":"One","lastName":"User","age":21,"login":"bbog0","password":"QzVpGcNp","isDeleted":false},
        {"id":"User2","firstName":"Two","lastName":"User","age":22,"login":"dclemoes1","password":"SyYSzML","isDeleted":true},
        {"id":"User3","firstName":"Three","lastName":"User","age":23,"login":"waveyard2","password":"spZlF9z4QRl","isDeleted":false},
        {"id":"User4","firstName":"Four","lastName":"User","age":42,"login":"trippingale3","password":"eCGIzP9","isDeleted":true},
        {"id":"User5","firstName":"Five","lastName":"User","age":52,"login":"medger4","password":"10dLefmTz","isDeleted":false},
        {"id":"User6","firstName":"Six","lastName":"User","age":62,"login":"rmaccourt5","password":"z83cju","isDeleted":true},
        {"id":"User7","firstName":"Seven","lastName":"User","age":27,"login":"slenham6","password":"gN7xiop","isDeleted":false},
        {"id":"User8","firstName":"Eight","lastName":"User","age":82,"login":"swreath7","password":"SOQAVItwTMZ","isDeleted":true},
        {"id":"User9","firstName":"Nine","lastName":"User","age":91,"login":"dgergely8","password":"Tqu2BuiN","isDeleted":false},
        {"id":"User10","firstName":"Ten","lastName":"User","age":60,"login":"dcortin9","password":"Ec1EfHKZsb","isDeleted":true}
    ]
    constructor() { }
    getUsers() {
        return this.users;
    }
}