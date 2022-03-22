#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
	int memory, i, j, up_lim, low_lim;
    char *arr;
	
    scanf("%i", &memory);

    if (memory >= 1024*1024) {
        printf("Too much memory requested.");
        return 1;
    }

    arr = (char *) malloc(memory);

    for (i = 0; i < memory;) {
        for (j = 65; j <= 90 && i < memory; j++, i++) {
            arr[i] = j;
        }
    }

    low_lim = 0;
    if (memory < 40) up_lim = memory;
    else up_lim = 40;
    do {
        for (i = low_lim; i < up_lim; i++) {
            printf("%c", arr[i]);
        }
        printf("\n");
        low_lim += 40;
        up_lim += 40;
        if (up_lim > memory) up_lim = memory;
        if (up_lim > 400) up_lim = 400;
    } while (up_lim > low_lim);

	return 0;
}