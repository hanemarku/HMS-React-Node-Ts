export interface Entity {
    id: string;
    number: string;
    price: number;
    size: number;
    availability: boolean;
    reserved:Date;
    main_image: string;
    type: {
        roleId: string;
        name: string;
    }
    facilities: Facility[];
}

export interface Facility {
    id: string;
    name: string;
}