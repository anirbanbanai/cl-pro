
import whiteCustom from "@/assets/json/white.json";

interface Item {
    subType: string;
    id: number;
    src: string;
    type: string;
}

const data: Item[] = whiteCustom;


export const fullhandItems: Item[] = [];
export const tophandItems: Item[] = [];
export const bukItems: Item[] = [];
export const bottamItems: Item[] = [];
export const pocketItems: Item[] = [];
export const sholderItems: Item[] = [];
export const halfItems: Item[] = [];

data.forEach(item => {
    switch (item.type) {
        case 'fullhand':
            fullhandItems.push(item);
            break;
        case 'tophand':
            tophandItems.push(item);
            break;
        case 'buk':
            bukItems.push(item);
            break;
        case 'bottam':
            bottamItems.push(item);
            break;
        case 'pocket':
            pocketItems.push(item);
            break;
        case 'sholder':
            sholderItems.push(item);
            break;
        case 'hafhand':
            halfItems.push(item);
            break;
        default:
            break;
    }
});

