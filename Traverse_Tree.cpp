#include <bits/stdc++.h>

using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int value) {
        data = value;
        left = NULL;
        right = NULL;
    }
};

void inorderTraversal(Node* root) {
    if (root == NULL) {
        return;
    }
    inorderTraversal(root->left);
    cout << root->data << "->";
    inorderTraversal(root->right);
}

void preorderTraversal(Node* root) {
    if (root == NULL) {
        return;
    }
    cout << root->data << "->";
    preorderTraversal(root->left);
    preorderTraversal(root->right);
}

void postorderTraversal(Node* root) {
    if (root == NULL) {
        return;
    }
    postorderTraversal(root->left);
    postorderTraversal(root->right);
    cout << root->data <<"->";
}

int main() {
    Node* root = new Node(10);
    root->left = new Node(5);
    root->right = new Node(15);
    root->left->left = new Node(2);
    root->left->right = new Node(8);
     root->right->left=new Node(13);
    root->right->right =new Node(17);
    int choice;
    do {
        cout << "\nMenu:\n";
        cout << "1. Inorder Traversal.\n";
        cout << "2. Preorder Traversal.\n";
        cout << "3. Postorder Traversal.\n";
        cout << "4. Exit.\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Inorder Traversal: ";
                 cout<<"Start->";
                inorderTraversal(root);
                cout<<"End.";
                cout << endl;
                break;
            case 2:
                cout << "Preorder Traversal: ";
                cout<<"Start->";
                preorderTraversal(root);
                cout<<"End.";
                cout << endl;
                break;
            case 3:
                cout << "Postorder Traversal: ";
                cout<<"Start->";
                postorderTraversal(root);
                cout<<"End.";
                cout << endl;
                break;
            case 4:
                cout << "Exiting.....\n";
                break;
            default:
                cout << "!.!.!.!    Invalid choice. Please try again !.!.!.!...........\n";
        }
    } while (choice != 4);

    return 0;
}
