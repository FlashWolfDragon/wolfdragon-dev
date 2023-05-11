import json
import csv
from collections import defaultdict

result = defaultdict(str)

with open('scripts/messages.json', 'r') as jsonfile:
    data = json.load(jsonfile)
    with open('messages.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        counter = 1
        for key, value in reversed(data.items()):
            writer.writerow([counter, key, value])
            counter += 1
