# Bubble Sort

def bubbleSort(lst, n):
	swapped = False
	for i in range(n-1):
		for j in range(0, n-i-1):
			if lst[j] > lst[j + 1]:
				swapped = True
				lst[j], lst[j + 1] = lst[j + 1], lst[j]
		
		if not swapped:
			return

lst = []
n = int(input("Enter number of elements : "))

for i in range(0, n):
	ele = int(input())
	lst.append(ele)

bubbleSort(lst)

print("Sorted List is:")
for i in range(len(lst)):
	print("% d" % lst[i], end=" ")
