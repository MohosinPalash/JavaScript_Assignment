// https://github.com/MohosinPalash/JavaScript_Assignment

// Problem - 1
function kilometerToMeter (meter){
    if(meter < 0){
        var errorMessage = 'Invalid Input';
        return errorMessage;
    }else{
        var result = meter*1000;
        return result;
    }
}

//Problem - 2
function budgetCalculator(watches, phones, laptops){
    if(watches < 0 || phones < 0 || laptops < 0){
        var errorMessage = 'Invalid Input';
        return errorMessage;
    }else{
        var totalCost = (watches*50) + (phones*100) + (laptops*500);
        return totalCost;
    }
}

// Problem - 3
function hotelCost (days){
    if (days < 0){
        var errorMessage = 'Invalid Input';
        return errorMessage;
    }else if(days <= 10){
        var totalCost = days*100;
        return totalCost;
    }else if(days<= 20){
        var totalCost = (10*100) + ((days-10)*80);
        return totalCost;
    }else{
        var totalCost = (10*100) + (10*80) + ((days-20)*50);
        return totalCost;
    }
}

// Problem - 4
function megaFriend(friends){
    if(friends.length == 0){
        var errorMessage = 'Inavlid Input! No friends name in the array';
        return errorMessage;
    }else{
        var megaFriendName = "";
        var maxLength = 0;
        for(var i=0; i<friends.length; i++){
            var nameLength = friends[i].length;
            if(nameLength> maxLength){
                maxLength = nameLength;
                megaFriendName = friends[i];
            }
        }
        return megaFriendName;
    }
}