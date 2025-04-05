#include <bits/stdc++.h>
using namespace std;

void inorderTraversal(const vector<int>& arr, int index) {
    if (index >= arr.size()) {
        return;
    }

    inorderTraversal(arr, 2 * index + 1);  // Left child
    cout << arr[index] << " ";              // Current node
    inorderTraversal(arr, 2 * index + 2);  // Right child
}

void preorderTraversal(const vector<int>& arr, int index) {
    if (index >= arr.size()) {
        return;
    }

    cout << arr[index] << " ";              // Current node
    preorderTraversal(arr, 2 * index + 1);  // Left child
    preorderTraversal(arr, 2 * index + 2);  // Right child
}

void postorderTraversal(const vector<int>& arr, int index) {
    if (index >= arr.size()) {
        return;
    }

    postorderTraversal(arr, 2 * index + 1);  // Left child
    postorderTraversal(arr, 2 * index + 2);  // Right child
    cout << arr[index] << " ";              // Current node
}

int main() {
    vector<int> arr = {10, 5, 15, 2, 8, 13, 17}; // Sample binary tree in array form
    int choice;

    do {
        cout << "\nMenu:\n";
        cout << "1. Inorder Traversal\n";
        cout << "2. Preorder Traversal\n";
        cout << "3. Postorder Traversal\n";
        cout << "4. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Inorder Traversal: ";
                inorderTraversal(arr, 0);
                cout << endl;
                break;
            case 2:
                cout << "Preorder Traversal: ";
                preorderTraversal(arr, 0);
                cout << endl;
                break;
            case 3:
                cout << "Postorder Traversal: ";
                postorderTraversal(arr, 0);
                cout << endl;
                break;
            case 4:
                cout << "Exiting...\n";
                break;
            default:
                cout << "Invalid choice. Please try again.\n";
        }
    } while (choice != 4);

    return 0;
}
