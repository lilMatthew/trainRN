import {t} from 'mobx-state-tree'

export const DrinkCoffeeModel = t.model('DrinkModel', {
    id: t.string,
    name: t.string,
    price: t.number,
    type: t.string,
    available: t.boolean,
    description: t.string,
})