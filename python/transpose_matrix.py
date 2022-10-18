if __name__ == '__main__':

    r = int(input("Enter number of rows : "))
    c = int(input("Enter number of columns :"))
    if(r > 0 and c > 0):
        mat = []
        for i in range(r):
            print("Enter elements for row ",i+1,": ",end="");
            l = [ele for ele in input().split()]
            mat.append(l);
            print()
        trans = [[mat[j][i] for j in range(r)] for i in range (c)]
        print("New Matrix after transpose :-\n")
        for i in trans:
            print(*i)
    else:
        print("Its an invalid matrix dimension!!!")
