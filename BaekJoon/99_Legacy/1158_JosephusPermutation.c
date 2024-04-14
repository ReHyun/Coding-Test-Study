#include<stdio.h>

int main() {
    int N, K;
    int check[5002] = { 0, };
    int now;

    scanf("%d %d", &N, &K);

    now = K;
    check[now] = 1;
    printf("<%d", now);

    for (int i = 0; i < N - 1; i++) {
        for (int j = 0; j < K; j++) {
            while (1) {
                now++;
                if (now > N) now = 1;
                if (!check[now]) break;
            }
        }

        printf(", %d", now);
        check[now] = 1;
    }
    printf(">");
}