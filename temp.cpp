#include <iostream>
using namespace std;
int main()
{
    int arr[] = {0, 1, 1, 2, 0, 1, 2, 2, 1, 0, 1};
    int size = sizeof(arr) / sizeof(arr[0]);
    // cout << size;
    int low = 0, mid = 0, high = size - 1;
    while (mid <= high)
    {
        if (arr[mid] == 0)
        {
            int temp = arr[mid];
            arr[mid] = arr[low];
            arr[low] = temp;
            mid++;
            low++;
        }
        else if (arr[mid] == 1)
        {
            mid++;
        }
        else if (arr[mid] == 2)
        {
            int temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << "  ";
    }
    return 0;
}