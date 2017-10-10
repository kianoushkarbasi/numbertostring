module convertApp.Interfaces {

    export interface IConvertNumber {
        get: (name, amount) => ng.IHttpPromise<any>;
    }

    export interface IAccountHolder {
        name: string;
        amount: string;
    }
}