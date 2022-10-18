"""Kevin and Stuart want to play the 'The Minion Game'.

Game Rules

Both players are given the same string, .
Both players have to make substrings using the letters of the string .
Stuart has to make words starting with consonants.
Kevin has to make words starting with vowels.
The game ends when both players have made all possible substrings.

Scoring
A player gets +1 point for each occurrence of the substring in the string .

For Example:
String  = BANANA
Kevin's vowel beginning word = ANA
Here, ANA occurs twice in BANANA. Hence, Kevin will get 2 Points.

For better understanding, see the image below:

banana.png

Your task is to determine the winner of the game and their score.

Function Description

Complete the minion_game in the editor below.

minion_game has the following parameters:

string string: the string to analyze
Prints

string: the winner's name and score, separated by a space on one line, or Draw if there is no winner
Input Format

A single line of input containing the string .
Note: The string  will contain only uppercase letters: .

Constraints



Sample Input

BANANA
Sample Output

Stuart 12"""



"""

def minion_game(string):
    # your code goes here
    if string.isupper() and 0<len(string)<=10**6:
       
        vowels=['A','E','I','O','U']
     
        vowel_starting_words=[]
        consonant_starting_words=[]
        
        for i in range(len(string)):
            if string[i] in vowels :
                lst=[string[i:x+1] for x in range(i,len(string))]
                vowel_starting_words.extend(lst)
                
            elif string[i].isalpha() and string[i] not in vowels:
                lst=[string[i:x+1] for x in range(i,len(string))]
                consonant_starting_words.extend(lst)
                
           
        kevin_score=len(vowel_starting_words)
        stuart_score=len(consonant_starting_words)
        if kevin_score>stuart_score:
            print("Kevin",kevin_score)
        elif stuart_score>kevin_score:
            print("Stuart",stuart_score)
        else:
            print("Draw")
        
    

if __name__ == '__main__':
    s = input()
    minion_game(s)

"""

#above is NOOB code
##above will surely fail for large strings🙄

###when possible words are not required why store them!!😅







def minion_game(string):
    # your code goes here
    
    kevin=0
    stuart=0
    slen = len(string)
    for i in range(slen):
        if s[i] in "AEIOU":
            kevin+=slen-i #then vowel encountered no of possible words should be (length of word-index)
        elif s[i].isalpha() and s[i] not in "AEIOU":
            stuart += slen-i
    
    if kevin > stuart:
        print("Kevin", kevin)
    elif kevin < stuart:
        print("Stuart",stuart)
    elif kevin == stuart:
        print("Draw")


if __name__ == '__main__':
    s = input()
    minion_game(s)