function swap(arr, i ,j ){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
function BubbleSort(arr,asc = true){
	var len = arr.length;
	for(let i = len -1 ; i >= 0; i--){
		for(let j = 0; j < i; j++){
			if(arr[j] > arr[j + 1]){
				swap(arr,j,j+1);
			}
		}
	}
}
function bubble(arr){
	var len = arr.length,i = 0, flag = true;
	while(i < len - 1 && flag){
		flag = false;
		var j = len - 2;
		while(j >= i){
			if(arr[j+1] < arr[j]){
				swap(arr,j,j+1);
				flag = true;
			}
			j--;
		}
		i++;
	}
}