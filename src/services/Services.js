import {authAxios} from "./Axios";
import products from '../data/productsStock.json';
export class Services {
    static instance = null;
    // TODO: utilizar enviroments variables
    API_KEY = '394e9338b73a9f061b1968ceaa050a';
    LOGIN = `/login`;
    REGISTER = `/Register`;

    static getInstance() {
        console.log('Initializing Services...');
        if (!this.instance) {
            this.instance = new Services();
        }
        return this.instance;
    }

    async login(username, password) {
         console.log('Logging in...');
         const body = {
             username,
             password,
         };
         const response = await authAxios.post(this.LOGIN, body);
         return response.data;
    }

    async register(email, password, name) {
        console.log('Registering...');
        const body = {
            email,
            password,
            name,
        };
        const response = await authAxios.post(this.REGISTER, body);
        return response.data;
    }

    async getLocalProducts() {
        console.log('Getting local products...');
        console.log(products);
        return products;
    }
}