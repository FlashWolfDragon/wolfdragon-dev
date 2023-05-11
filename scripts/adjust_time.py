import csv
from collections import defaultdict
from datetime import datetime, timedelta

messages = defaultdict(list)

with open('library/scoutrfishfacts.csv') as file:
    reader = csv.reader(file)
    next(reader)

    for row in reader:
        dt = datetime.strptime(row[1][:19], '%Y-%m-%d %H:%M:%S')
        dt += timedelta(hours=-5)
        messages[row[1]] = dt.strftime('%m-%d-%Y')


print(messages)
