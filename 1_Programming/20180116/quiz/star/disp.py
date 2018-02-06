def disp_star1(number):
    
    for star in range(1, number + 1):
        print("*" * star)

def disp_star2(number):
    
    for star in range(1, number + 1):
        print(" " * (number - star) + "*" * star)
        
def disp_star3(number):
    
    space = number // 2
    
    for star in range(1, number + 1, 2):
        print(" " * space + "*" * star)
        space -= 1

def disp_star4(number):
    
    space = 0
    
    for star in range(number, 0, -2):
        print(" " * space + "*" * star)
        space += 1

def disp_star5(number):
    
    space = number // 2
    
    for star in range(1, number, 2):
        print(" " * space + "*" * star)
        space -= 1
        
    for star in range(number, 0, -2):
        print(" " * space + "*" * star)
        space += 1