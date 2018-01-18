
import random

def start():
    random_number = random.randint(1, 100)
    count = 0
    while True:
        number = int(input("insert number : "))
        count += 1
        if number < random_number:
            print("Up")
        elif number > random_number:
            print("Down")
        else:
            print("random number is {} - count : {}".format(random_number, count))
            break