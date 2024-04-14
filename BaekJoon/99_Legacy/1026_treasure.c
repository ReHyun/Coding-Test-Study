#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#define _CRT_SECURE_NO_WARNINGS

int main() {
	int N = 0;
	int A_num, A_arr[50], B_num, B_arr[50];
	int temp = 0;
	int value = 0;
	int result = 0;
	scanf(" %d ", &N);

	// 배열에 담기
	for (int i = 0; i < N; i++) {
		A_num = 0;
		scanf("%d", &A_num);
		A_arr[i] = A_num;
	}

	for (int i = 0; i < N; i++) {
		B_num = 0;
		scanf("%d", &B_num);
		B_arr[i] = B_num;
	}

	/*
	// 배열 확인
	for (int i = 0; i < N; i++) {
		printf("%d ", A_arr[i]);
		if (i == N - 1) printf("\n");
	}
	for (int i = 0; i < N; i++) {
		printf("%d ", B_arr[i]);
	}
	printf("\n");
	*/
	
	//버블 정렬 : A_arr 오름차순 정렬
	for (int i = 0; i < N - 1; i++)
		for (int j = 0; j < N - 1 - i; j++)
			if (A_arr[j] > A_arr[j + 1]) {
				temp = A_arr[j];
				A_arr[j] = A_arr[j + 1];
				A_arr[j + 1] = temp;
			}

	/*
	//A_arr 오름차순 정렬 출력(확인용)
	for (int i = 0; i < N; i++) printf("%d ", A_arr[i]);
	printf("\n");
	*/

	//버블 정렬 : B_arr 내림차순 정렬
	for (int i = 0; i < N - 1; i++)
		for (int j = 0; j < N - 1 - i; j++)
			if (B_arr[j] < B_arr[j + 1]) {
				temp = B_arr[j];
				B_arr[j] = B_arr[j + 1];
				B_arr[j + 1] = temp;
			}
	/*
	//B_arr 오름차순 정렬 출력(확인용)
	for (int i = 0; i < N; i++) printf("%d ", B_arr[i]);
	printf("\n");
	*/

	for (int i = 0; i < N; i++) {
		value = (A_arr[i] * B_arr[i]);
		result = result + value;
	}

	printf("%d", result);
}

