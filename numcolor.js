var divIdCount = 0;
var color = [0,0,0];
var numList = document.getElementById('numList');

function getColor() {
  for (var i in color){
    color[i] = Math.floor(Math.random() * 256);
  };
  return;
}

function addNumber(i) {
	for (c = 0; c < i; c++){
	var nextNumber = document.createElement("div");
	nextNumber.style.backgroundColor = changeColor();
	nextNumber.innerHTML = divIdCount + 1;
	divIdCount += 1;
	nextNumber.setAttribute("class", "nums");
	nextNumber.setAttribute("id", "num" + divIdCount);
	numList.appendChild(nextNumber);
	}
}

function deleteNumber(i) {
	for (c = 0; c < i; c++){
	numList.removeChild(numList.lastChild);
	divIdCount -= 1;}
}


function changeColor(){
		do{
			getColor();
		} while (color[0] + color[1] + color[2] > 550);
	console.log('Text Color: rgb(' + color.join(', ') +')');
    return 'rgb(' + color.join(', ') +')';
    }
	
changeColor();
