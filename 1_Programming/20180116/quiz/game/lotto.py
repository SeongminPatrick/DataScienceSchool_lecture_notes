
import random

def get_lotto_number():
    
    lotto_numbers = []
    
    while len(lotto_numbers) < 6:
        
        number = random.randint(1, 45)
        
        if number not in lotto_numbers:
            lotto_numbers.append(number)        
            
    lotto_numbers.sort()
    
    return lotto_numbers