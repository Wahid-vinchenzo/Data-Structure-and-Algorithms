#include<bits/stdc++.h>
using namespace std;

int main() {
    int a[20][20];
    int n;

    cout << "Enter the number of vertices of the graph:\n";
    cin >> n;

    // Input adjacency matrix
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= n; j++) {
            cout << "Enter (1) if there is an edge between vertex " << i << " and vertex " << j << ".\n";
            cout << "Enter (0) otherwise.\n";
            cin >> a[i][j];
        }
    }

    // Output adjacency matrix
    cout << "The adjacency matrix of the graph is:\n";
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= n; j++) {
            cout << a[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
