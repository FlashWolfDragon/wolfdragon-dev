from collections import defaultdict
from os import path
import csv
import json
import requests
from time import sleep
from datetime import datetime, timedelta

messages = defaultdict(list)
downloadPictures = False

with open('library/scoutrfishfacts.csv') as file:
    reader = csv.reader(file)
    next(reader)  # skip header
    for row in reader:
        # Adjust from UTC to CDT
        dt = datetime.strptime(row[1][:19], '%Y-%m-%d %H:%M:%S')
        dt += timedelta(hours=-5)
        correctedDateTime = dt.strftime('%m-%d-%Y')

        if row[3] != '':
            urls = row[3].split(' ')
            for url in urls:
                imgName = url[58:].replace('/', '_')
                imgPath = f'/public/fishfacts/{imgName}'
                messages[correctedDateTime].insert(0, imgPath)

                if downloadPictures and not path.exists(imgPath):
                    with open(imgPath, 'wb') as img:
                        print(f'downloading {url}')
                        response = requests.get(url)
                        img.write(response.content)
                        sleep(3)  # Limit requests ...

        messages[correctedDateTime].insert(0, row[2])

json.dump(messages, open('library/messages.json', 'w'))
