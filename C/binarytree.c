#include<stdio.h>
#include<stdlib.h>
#define MAX 100
int BTree[MAX];
int top=-1;
void insert();
int display();
void main()
{
    int choice,status;
    while(1)
    {
        printf("\n***********************");
        printf("\n1.Insert node in Binary Tree");
        printf("\n2.Display all node");
        printf("\n3.Display leaf/terminal node");
        printf("\n4.Display all father node");
        printf("\nEnter your choice:");
        scanf("%d",&choice);
        switch(choice)
        {
            case 1:
             insert();
             break;
            case 2:
             status=display();
             if(status==0)
              printf("BTree is empty");
             break;
            case 3:
             exit(0);
            default:
             printf("Enter valid choice");
        }
    }
}
void insert()
{
    printf("Enter node value:");
    scanf("%d",&BTree[++top]);
}
int display()
{
    if(top==-1)
     return 0;
    printf("Nodes in Binary Tree are:\n");
    for(int i=0;i<=top;i++)
     printf("%d ",BTree[i]);
}