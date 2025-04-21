import { t, flow } from 'mobx-state-tree'
import ApiEndpoints from '../../network/api_endpoint'
import { DrinkCoffeeModel } from '../model/drinkModelMST '

export const DrinkCoffeeStore = t.model('DrinkCoffeeStore', {
    drinks: t.array(DrinkCoffeeModel),
    isLoading: t.optional(t.boolean, false),
    error: t.optional(t.string, 'Error'),
})
    .actions(self => ({
        fetchDrinks: flow(function* () {
            self.isLoading = true;
            try {
                const response = yield fetch(ApiEndpoints.baseURL); 
                const data = yield response.json();
                console.log("API Data:", data);
                self.drinks = data.map((drink: any) => DrinkCoffeeModel.create(drink)); // Cập nhật drinks
            } catch (error: any) {
                self.error = error.message;
            } finally {
                self.isLoading = false;
            }
        }),
    }))

