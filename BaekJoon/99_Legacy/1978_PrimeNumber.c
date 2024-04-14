#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>


int main() {
	int N; //숫자 대입 받음. 개수 N
	int count = 0; //count 변수
	int real_cnt = 0;

	scanf("%d\n", &N);

	int* arr = (int*)malloc(sizeof(int) * N);
	//scanf로 arr배열에 숫자를 하나씩 넣어줌.
	for (int i = 0; i < N; i++) {
		scanf("%d", &arr[i]);
	}

	/*
	//test : arr배열에 숫자가 제대로 들어갔나?
	for (int i = 0; i < N; i++) {
		printf("%d \n", arr[i]);
	}
	*/

	for (int i = 0; i < N; i++) { //arr[i]번째 들을 확인함.
		count = 0;
		for (int j = 1; j <= arr[i]; j++) {
			if (arr[i] % j == 0)
				count++;
		}
		if (count == 2)
			real_cnt++;
	}

	printf("%d", real_cnt);
}


