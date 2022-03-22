#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
	int memory, i, j;
    char *arr;
	
    scanf("%i", &memory);

    if (memory >= 1024*1024) {
        printf("Too mucch memory requested");
        return 1;
    }

    arr = (char *) malloc(memory);

    for (i = 0;i < memory;) {
        for (j = 65; j < 91 && i < memory; j++, i++) {
            arr[i] = j;
        }
    }

    for (i = 0; i < memory;) {
        for (j = 0; j < 40 && i + j < memory; j++) {
            printf("%c ", arr[i + j]);
        }
        printf("\nbr\n");
        if (i + 40 > memory) i += memory - i;
        else i += 40;
    }

	return 0;
}