import { action, autorun, computed, makeObservable, observable, spy } from 'mobx';

interface CartItem{
    id: string;
    name: string; 
    price: number;
    quantity: number;
}

class MobxStore{
    item : CartItem[] = []

    constructor(){this,
        makeObservable(this,{
            item:observable,
            addItem:action,
            removeItem:action,
            clearCart:action,
            totalPrice: computed,
            totalItems: computed,
        })
        autorun(() => {
            console.log('Total price:', this.totalPrice);
            console.log('Total items:', this.totalItems);
            console.log('Cart items:', JSON.stringify(this.item));
        })
        spy((event) => {
            if (event.type === 'action') {
                console.log(`Action triggered: ${event.name}`);
            }
        })
    }
    
        addItem = (item: CartItem) => {
            const exitstingItem = this.item.find(i => i.id === item.id);
            if(exitstingItem){
                exitstingItem.quantity += item.quantity;
            } else{
                this.item.push({...item})
            }
        }
    
        /**filter((element, index, array) => { code }) 
         * element: giá trị hiện tại (*)
         * index: chỉ số hiện tại (*)
         * array: mảng ban đầu
         * 
         * ->tạo mảng mới chứa các phần tử thỏa mãn điều kiện đc cung cấp
        */
        removeItem = (id: string) => {
            this.item = this.item.filter(item => item.id !== id);
        }

        clearCart = () => {
            this.item = [];
        }

        /**reduce (accumulator, currentVal, currentIndex, array) => { code }, initialVal 
         * accumulator: giá trị tích lũy (*)
         * currentVal: giá trị hiện tại (*)
         * currentIndex: chỉ số hiện tại
         * array: mảng ban đầu
         * initialVal: giá trị khởi tạo cho accumulator
         * 
         * -> get để rút gọn mảng thành giá trị duy nhất bằng cách lặp qua từng phẩn tử của mảng
        */
        get totalPrice(): number {
            return this.item.reduce((sum,item) => sum + item.price * item.quantity, 0); 
        }

        get totalItems(): number {
            return this.item.reduce((sum,item) => sum + item.quantity, 0);
        }
}

export const mobxStore = new MobxStore();
