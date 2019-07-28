function dayOfWeek(arr) {

    let days = ["Invalid day!","Monday", "Tuestday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (arr >= 1 && arr <= 7) {
        console.log(days[arr]);
    } else if(arr <= 0 || arr > 7 ){
        console.log(days[0]);
    }

}
dayOfWeek(1);