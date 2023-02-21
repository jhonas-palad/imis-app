from uuid import uuid4

NUMBER_TO_GENERATE = 17


generated_arr = []

for i in range(17):
    generated_arr.append(str(uuid4()))
    
result = "\n".join(generated_arr);

with open('generated_id', 'w') as f:
    f.write(result)
