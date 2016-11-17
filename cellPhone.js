String.prototype.createPhone = function() {

    var str = "";

    for (var i = 1; i < this.length; i++) {

        if(typeof +this[i] === 'number') {

            if(i % 3 == 0) {

                str = str + this[i] + "-";

            }else {
                str = str + this[i];
            }

        }else {
            console.log('Error: Неправильный формат');
            return false;
        }

    }

    return str;

};

var phone = "111111111111111";
var result = phone.createPhone();

console.log(result);







