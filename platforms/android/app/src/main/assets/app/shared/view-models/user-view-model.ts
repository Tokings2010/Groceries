import config from '../shared/config';
import { Observable } from 'data/observable';
import { request } from 'http';

class UserViewModel extends Observable {
    username: string //properties
    email: string //properties
    password: string //properties

    constructor() {
        super();
        //Assign the values of these properties to keys in our observable
        this.set("usr", this.username);
        this.set("email", this.email);
        this.set("pass", this.password);
    }

    registerAction() {
        /***Using HTTP Module */
        request({
            url: config.apiUrl + "user/" + config.appKey,
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": config.authorization },
            content: JSON.stringify({ username: this.get("usr"), email: this.get("email"), password: this.get("email") })
        }).then(function (result) {
            console.log(result);
            alert(result);
        }, function (error) {
            console.log(error);
            alert(error);
        });
    }
}
export default UserViewModel;
