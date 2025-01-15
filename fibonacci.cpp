#include <bits/stdc++.h>
using namespace std;
double fibonacci(int n) {
    if (n == 0 || n == 1) {
        return n;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}
int main() {
    int n;
    cout << "Please enter the value of n: ";
    cin >> n;
    for (int i = 0; i <= n; ++i) {
        cout << fibonacci(i) << " ";
    }
    cout << endl;
    return 0;
}
