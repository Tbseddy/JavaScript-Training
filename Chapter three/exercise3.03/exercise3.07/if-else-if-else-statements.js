var target = Math.floor(Math.random() * 21) + 1;
 var player = Math.floor(Math.random() * 21) + 1;
 console.log("Target score:", target);
 console.log("Player score:", player);
 if (player >= target){
 console.log("Player wins: beats target by " + (player - target));
 }else{
 console.log("Player loses: misses target by " + (target - player));
 }