import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidators {
    static notBeforeToday(control: AbstractControl) {
        let value = control.value as Date;
        if(value == null) return;
        let today = new Date();
        let todayMoins18 = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
        );
        if(todayMoins18.getTime() < value.getTime()){
            return { error: "Invalid Date" };
        }
    }

    static compare(...args: any) {
        return (group: FormGroup) => {
            let first = group.get(args[0]);
            let second = group.get(args[1]);
            if(!first || ! second) return;
            if(first.value != second.value){
                return { matchError: "Not match" };
            }
        } 
    }
}