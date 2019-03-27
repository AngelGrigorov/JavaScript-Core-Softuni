class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        }
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        }
    }

    rentARoom(clientName, roomType, nights) {
        var singleRooms = this.capacity / 2;
        var doubleRooms = (this.capacity * 3) / 10;
        var maisonetteRooms = (this.capacity * 2) / 10;
        if (roomType === 'single') {
            if (singleRooms > 0) {
                let obj = {clientName, roomType, nights, room: this.currentBookingNumber}
                this.bookings.push(obj);
                singleRooms--;

                return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber++}.`;
            } else {
                return `No single rooms available! Available double rooms: ${doubleRooms}. Available maisonette rooms: ${maisonetteRooms}.`;
            }
        } else if (roomType === 'double') {
            if (doubleRooms > 0) {
                let obj = {clientName, roomType, nights, room: this.currentBookingNumber}
                this.bookings.push(obj);

                doubleRooms--;

                return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber++}.`;
            } else {
                return `No double rooms available! Available single rooms: ${singleRooms}. Available maisonette rooms: ${maisonetteRooms}.`;
            }
        } else {
            if (maisonetteRooms > 0) {
                let obj = {clientName, roomType, nights, room: this.currentBookingNumber};
                this.bookings.push(obj);

                maisonetteRooms--;

                return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber++}.`;
            } else {
                return `No maisonette rooms available! Available single rooms: ${singleRooms}. Available double rooms: ${doubleRooms}.`;
            }
        }
    }

    roomService(currentBookingNumber, serviceType) {
        if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }
        var matches = false;
        for (let object of this.bookings) {
            var propertyName = 'services';

            if (object.room === currentBookingNumber) {
                matches = true;
                if (object.hasOwnProperty('services')) {
                    object.services.push(serviceType);
                    return `Mr./Mrs. ${object.clientName}, Your order for ${serviceType} service has been successful.`;
                } else {
                    object[propertyName] = [];
                    object.services.push(serviceType);
                    return `Mr./Mrs. ${object.clientName}, Your order for ${serviceType} service has been successful.`;

                }
            }

        }
        if (matches === false) {
            return `The booking ${currentBookingNumber} is invalid.`;

        }
    }

    checkOut(currentBookingNumber) {
        var matches = false;
        for (let object of this.bookings) {
            if (object.room === currentBookingNumber) {
                matches = true;

                if (object.hasOwnProperty('services')) {
                    let totalServiceMoney = 0;
                    if (object.roomType === 'single') {
                        let totalMoney = this.roomsPricing.single * object.nights;
                        switch (this.servicesPricing) {
                            case'food':
                                totalServiceMoney += 10;
                                break;
                            case 'drink':
                                totalServiceMoney += 15;
                                break;
                            case 'housekeeping':
                                totalServiceMoney += 25;
                                break;

                        }

                        return `We hope you enjoyed your time here, Mr./Mrs. ${object.clientName}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;

                    } else if (object.roomType === 'double') {
                        let totalMoney = this.roomsPricing.double * object.nights;
                        switch (this.servicesPricing) {
                            case'food':
                                totalServiceMoney += 10;
                                break;
                            case 'drink':
                                totalServiceMoney += 15;
                                break;
                            case 'housekeeping':
                                totalServiceMoney += 25;
                                break;

                        }

                        return `We hope you enjoyed your time here, Mr./Mrs. ${object.clientName}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;

                    } else {
                        let totalMoney = this.roomsPricing.maisonette * object.nights;
                        switch (this.servicesPricing) {
                            case'food':
                                totalServiceMoney += 10;
                                break;
                            case 'drink':
                                totalServiceMoney += 15;
                                break;
                            case 'housekeeping':
                                totalServiceMoney += 25;
                                break;

                        }

                        return `We hope you enjoyed your time here, Mr./Mrs. ${object.clientName}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;

                    }
                } else {
                    if (object.roomType === 'single') {
                        let totalMoney = this.roomsPricing.single * object.nights;
                        return `We hope you enjoyed your time here, Mr./Mrs. ${object.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;

                    } else if (object.roomType === 'double') {
                        let totalMoney = this.roomsPricing.double * object.nights;
                        return `We hope you enjoyed your time here, Mr./Mrs. ${object.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;
                    } else {
                        let totalMoney = this.roomsPricing.maisonette * object.nights;
                        return `We hope you enjoyed your time here, Mr./Mrs. ${object.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;

                    }
                }
            }
        }
        if (matches === false) {
            return `The booking ${currentBookingNumber} is invalid.`;

        }
    }
    report(){
        let string = '';
if(this.bookings.length === 0){
    string = `${this.name.toUpperCase()} DATABASE:\n
    -------------------- \n
    There are currently no bookings.`;
    return string;
}
        string += `${this.name.toUpperCase()} DATABASE:\n--------------------\n`;
for (let obj of this.bookings){
    if(obj.hasOwnProperty('services')){
       string +=`bookingNumber - ${obj.room}\nclientName - ${obj.clientName}\nroomType - ${obj.roomType}\nnights - ${obj.nights}\nservices: ${obj.services.join(', ')}----------\n`;

    }else{
        string +=`bookingNumber - ${obj.room}\nclientName - ${obj.clientName}\nroomType - ${obj.roomType}\nnights - ${obj.nights}----------\n`;
    }

}

    string = string.slice(string[0],string.length-11);

return string;
    }
}
let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');

hotel.report();




